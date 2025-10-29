using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ExplorIdentity.Migrations
{
    /// <inheritdoc />
    public partial class seedrolesremoved : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3a7d0bae-fbd8-4969-93fa-b8ff0bf515fb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c9ea3619-fe2b-4f3e-aa21-6f78f37d273c");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3a7d0bae-fbd8-4969-93fa-b8ff0bf515fb", "1", "Admin", "ADMIN" },
                    { "c9ea3619-fe2b-4f3e-aa21-6f78f37d273c", "2", "User", "USER" }
                });
        }
    }
}
