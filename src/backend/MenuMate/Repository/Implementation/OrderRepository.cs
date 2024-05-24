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
    public class OrderRepository : EfRepository<Order>, IOrderRepository
    {
        protected MenuDbContext _context;
        public OrderRepository(MenuDbContext context) : base(context)
        {
            _context = context;
        }

    }
}
