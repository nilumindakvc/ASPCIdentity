using ExplorIdentity.Models.Authentication.Login;
using ExplorIdentity.Models.Authentication.Signup;

namespace ExplorIdentity.Services
{
    public interface IAuthServices
    {
        public Task<AuthResponseAtReg> RegisterUser(RegisterUser model);

        public Task<bool> ConfirmEmail(string token, string email);

        public Task<AuthResponseAtLogin> AuthenticationAndTokenGeneration(LoginModel model);
    }
}