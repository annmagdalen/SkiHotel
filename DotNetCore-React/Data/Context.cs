using DotNetCoreReact.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreReact.Data
{
    public class Context : IdentityDbContext<User>
    {
        public Context(DbContextOptions<Context> options): base(options) {}

        public DbSet<User> Customers { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
    }
}
