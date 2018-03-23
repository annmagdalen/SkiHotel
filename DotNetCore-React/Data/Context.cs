using DotNetCoreReact.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreReact.Data
{
    public class Context : DbContext 
    {
        public Context(DbContextOptions<Context> options): base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
    }
}
