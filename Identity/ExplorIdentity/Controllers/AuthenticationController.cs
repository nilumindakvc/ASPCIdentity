using ExplorIdentity.Models;
using ExplorIdentity.Models.Authentication.Login;
using ExplorIdentity.Models.Authentication.Signup;
using ExplorIdentity.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using User.Management.Service.Models;
using User.Management.Service.Services;

namespace ExplorIdentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IEmailServices _emailServices;
        private readonly IAuthServices _authServices;
        private readonly UserManager<IdentityUser> _userManager;

        public AuthenticationController(IEmailServices emailServices, IAuthServices authServices, UserManager<IdentityUser> userManager)
        {
            _emailServices = emailServices;
            _authServices = authServices;
            _userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUser model)
        {
            var result = await _authServices.RegisterUser(model);
            if (result.message == "UE")
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                  new Response { Status = "error", Message = "user already exist!" });
            }
            if (result.message == "CF")
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    new Response { Status = "error", Message = "creation failed!,try again" });
            }

            var confirmationLink = Url.Action("ConfirmEmail", "Authentication",
                new { result.token, email = result.User.Email }, Request.Scheme);

            var message = new Message(new string[] { result.User.Email! }, "Email Confirmation Token", confirmationLink!);

            _emailServices.SendEmail(message);

            return Ok(new Response
            {
                Status = "Success",
                Message = $"User created & confirmation email is send to {result.User.Email}!",
                Roles = result.roles
            });
        }

        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string token, string email)
        {
            var result = await _authServices.ConfirmEmail(token, email);
            if (result)
            {
                return Ok(new Response { Status = "Success", Message = "Email confirmed successfully!" });
            }
            return BadRequest(new Response { Status = "Error", Message = "user does not exist!" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result = await _authServices.AuthenticationAndTokenGeneration(model);
            if (result.message == "ok")
            {
                return Ok(new { Token = result.token });
            }

            return Unauthorized(new Response { Status = "Error", Message = "Invalid Authentication" });
        }

        [HttpPost("forgot-password")]
        [AllowAnonymous]
        public async Task<ActionResult> ForgotPassword([Required] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var forgotpasswordLink = Url.Action("ResetPasswordCardProvider", "Authentication",
                                        new { token, email = user.Email }, Request.Scheme);
                var message = new Message(new string[] { user.Email! }, "Forgot Password Link", forgotpasswordLink!);

                _emailServices.SendEmail(message);

                return Ok(new Response { Status = "Success", Message = $"password resting link is sent to {user.Email}!" });
            }
            return Ok(new Response { Status = "Error", Message = "no user with given email" });
        }

        [HttpGet("reset-password")]
        public ActionResult ResetPasswordCardProvider(string token, string email)
        {
            var model = new ResetPasswordDto { Token = token, Email = email };
            return Ok(model);
        }

        [HttpPost("reset-password")]
        [AllowAnonymous]
        public async Task<ActionResult> ResetPassword(ResetPasswordDto resetPassword)
        {
            var user = await _userManager.FindByEmailAsync(resetPassword.Email);
            if (user != null)
            {
                var resetPasswordResult = await _userManager.ResetPasswordAsync(user, resetPassword.Token, resetPassword.Password);
                if (!resetPasswordResult.Succeeded)
                {
                    foreach (var error in resetPasswordResult.Errors)
                    {
                        ModelState.AddModelError(error.Code, error.Description);
                        return Ok(ModelState);
                    }
                }
                return Ok(new Response { Status = "success", Message = "password has been changed" });
            }
            return BadRequest(new Response { Status = "error", Message = "error with finding emai!" });
        }
    }
}