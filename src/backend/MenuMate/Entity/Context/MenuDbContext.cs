using Entity.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Context
{
    public class MenuDbContext : DbContext
    {
        public MenuDbContext(DbContextOptions<MenuDbContext> options) : base(options)
        { }

        public DbSet<MenuCategory> MenuCategory { get; set; }
        public DbSet<Item> Item { get; set; }



    }
}
