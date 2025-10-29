using System.ComponentModel.DataAnnotations;

namespace ExplorIdentity.Models.Authentication.Login
{
    public class LoginModel
    {
        [Required(ErrorMessage = "username is required")]
        public string? username { get; set; }

        [Required(ErrorMessage = "password is required")]
        public string? password { get; set; }
    }
}