using Entity.Models;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Repository.Interfaces;
using Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implementation
{
    public class MenuCategoryService:IMenuCategoryService
    {
        private readonly IMenuCategoryRepository _repository;
        public MenuCategoryService(IMenuCategoryRepository repository)
        {
            _repository = repository;
        }

        public async Task<MenuCategory> Add(MenuCategory menuCategory)
        {
          var g = await _repository.Add(menuCategory);
            return g;
        }
    }
}
