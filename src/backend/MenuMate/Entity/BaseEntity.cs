using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entity
{
    public class BaseEntity
    {
        public string CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }
        [Required]
        [DefaultValue(typeof(DateTime), "getdate()")]

        public DateTime CreatedDate { get; set; }
        public DateTime? LastUpdatedDate { get; set; }


    }
}
