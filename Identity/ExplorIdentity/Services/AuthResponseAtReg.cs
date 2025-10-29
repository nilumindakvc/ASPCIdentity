using Microsoft.AspNetCore.Identity;

namespace ExplorIdentity.Services
{
    public class AuthResponseAtReg
    {
        public string message { get; set; }
        public IdentityUser? User { get; set; } = null;

        public string? token { get; set; } = null;

        public List<string>? roles { get; set; } = null;
    }
}