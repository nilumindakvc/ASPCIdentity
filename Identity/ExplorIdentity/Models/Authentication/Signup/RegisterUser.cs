using System.ComponentModel.DataAnnotations;

namespace ExplorIdentity.Models.Authentication.Signup
{
    public class RegisterUser
    {
        [Required(ErrorMessage = "username is required")]
        public string? UserName { get; set; }

        [EmailAddress]
        public string? Email { get; set; }

        [Required(ErrorMessage = "password is required")]
        public string? Password { get; set; }

        public List<string> Roles { get; set; }
    }
}