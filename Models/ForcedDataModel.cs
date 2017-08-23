using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_interface_issues.Models
{
    public class ForcedDataModel
    {
        public int id { get; set; }
        public string displayName { get; set; }
        public string filter
        {
            get { return displayName; }
        }
    }
}
