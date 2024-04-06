using Entity.Context;
using Entity.Models;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Implementation
{
    public class ItemRepository : EfRepository<Item>, IItemRepository
    {
        protected MenuDbContext _context;
        public ItemRepository(MenuDbContext context) : base(context)
        {
            _context = context;
        }

    }
}
