using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class Item: BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }
        public bool Active { get; set; }
    
    }
}
