using Entity.Mappings;
using Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.ViewModels
{
    public class MenuCategoryVM:IMapBoth<MenuCategory>
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
    }
}
