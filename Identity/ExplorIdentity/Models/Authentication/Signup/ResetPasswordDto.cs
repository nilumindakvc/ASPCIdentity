using System.ComponentModel.DataAnnotations;

namespace ExplorIdentity.Models.Authentication.Signup
{
    public class ResetPasswordDto
    {
        [Required]
        public string Password { get; set; } = null!;

        [Compare("Password", ErrorMessage = "two passwords are not maching")]
        public string Confirmedpassword { get; set; } = null!;

        public string Token { get; set; } = null!;

        public string Email { get; set; } = null!;
    }
}