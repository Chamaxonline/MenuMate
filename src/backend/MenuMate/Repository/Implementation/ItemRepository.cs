using Entity.Context;
using Entity.Models;
using Entity.ViewModels;
using Microsoft.EntityFrameworkCore;
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

        public async Task<List<ItemVM>> GetItemsByCategoryId(int categoryId)
        {
            //return await _context.Set<Item>().Where(x=> x.CategoryId == categoryId).ToListAsync();
            return await (from I in _context.Item.Where(x=> x.CategoryId == categoryId)
                          select new ItemVM
                          {
                              CategoryId = I.CategoryId,
                              Active = I.Active,
                              Id = I.Id,
                              Name = I.Name
                          }).ToListAsync();
        }

    }
}
