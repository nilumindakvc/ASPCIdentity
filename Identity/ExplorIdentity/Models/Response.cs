namespace ExplorIdentity.Models
{
    public class Response
    {
        public string? Status { get; set; }
        public object? Message { get; set; }

        public List<string>? Roles { get; set; } = null;
    }
}