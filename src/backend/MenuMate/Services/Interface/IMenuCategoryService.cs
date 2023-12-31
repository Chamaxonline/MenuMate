﻿using Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interface
{
    public interface IMenuCategoryService
    {
        Task<MenuCategory> Add(MenuCategory menuCategory);
        Task<MenuCategory> Get(int id);
        Task<IEnumerable<MenuCategory>> GetAll();
    }
}
