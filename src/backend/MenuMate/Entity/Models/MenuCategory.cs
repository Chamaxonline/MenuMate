﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class MenuCategory:BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public string Name  { get; set; }
        public bool Active { get; set; }
    }
}
