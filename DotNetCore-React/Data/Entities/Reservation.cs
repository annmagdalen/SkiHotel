using System;

namespace DotNetCoreReact.Data.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public bool Classic { get; set; }
        public User User { get; set; }
    }
}
