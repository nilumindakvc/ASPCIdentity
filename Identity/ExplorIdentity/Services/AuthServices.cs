using ExplorIdentity.Models.Authentication.Login;
using ExplorIdentity.Models.Authentication.Signup;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using User.Management.Service.Services;

namespace ExplorIdentity.Services
{
    public class AuthServices : IAuthServices
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public AuthServices(UserManager<IdentityUser> userManager,
           RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        public async Task<AuthResponseAtReg> RegisterUser(RegisterUser model)
        {
            //check whether user already exists
            var userExist = await _userManager.FindByNameAsync(model.UserName);
            if (userExist != null)
            {
                return new AuthResponseAtReg { message = "UE" };//user exist
            }

            //create and save a user

            IdentityUser user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return new AuthResponseAtReg { message = "CF" };//creation failed ,try again
            }

            //add role to user
            var addedRoles = await AddRolesToUserAsync(model.Roles, user);
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            return new AuthResponseAtReg { message = "UAWR", User = user, token = token, roles = addedRoles };//user added with a role
        }

        public async Task<bool> ConfirmEmail(string token, string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var result = await _userManager.ConfirmEmailAsync(user, token);
                if (result.Succeeded)
                {
                    return true;
                }
            }
            return false;
        }

        public async Task<AuthResponseAtLogin> AuthenticationAndTokenGeneration(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.username);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.password))
            {
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                var roles = await _userManager.GetRolesAsync(user);
                foreach (var role in roles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, role));
                }

                var token = GetToken(authClaims);

                return new AuthResponseAtLogin { message = "ok", token = new JwtSecurityTokenHandler().WriteToken(token) };
            }
            return new AuthResponseAtLogin { };
        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]!));
            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(1),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );
            return token;
        }

        private async Task<List<string>> AddRolesToUserAsync(List<string> roles, IdentityUser user)
        {
            List<string> addedRoles = new List<string>();

            foreach (var role in roles)
            {
                if (await _roleManager.RoleExistsAsync(role))
                {
                    await _userManager.AddToRoleAsync(user, role);
                    addedRoles.Add(role);
                }
            }

            return addedRoles;
        }
    }
}