using api_interface_issues.Models;
using api_interface_issues.Models.Extensions;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_interface_issues.Controllers
{
    [Route("api/[controller]")]
    public class AppController : Controller
    {
        public AppController() {
            
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<Theme>> GetThemes()
        {
            return await AppExtensions.GetThemes();
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<DataModel>> GetData()
        {
            return await AppExtensions.GetData();
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<ShapedDataModel>> GetShapedData()
        {
            return await AppExtensions.GetShapedData();
        }
    }
}
