using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace DotNetCoreReact.Data.Entities
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public string Level { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }
}
