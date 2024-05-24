using Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class Order: BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public required string Code { get; set; }
        public int DetailId { get; set; }
        public required OrderStatus Status { get; set; }
    }
}
