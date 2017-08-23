using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_interface_issues.Models.Extensions
{
    public static class AppExtensions
    {
        public static Task<List<Theme>> GetThemes()
        {
            return Task.Run(() =>
            {
                var model = new List<Theme>() {
                    new Theme { name = "green-light", display = "Green - Light" },
                    new Theme { name = "red-light", display = "Red - Light" },
                    new Theme { name = "blue-light", display = "Blue - Light" }
                };

                return model;
            });
        }

        public static Task<List<DataModel>> GetData()
        {
            return Task.Run(() =>
            {
                return new List<DataModel>()
                {
                    new DataModel { id = 1, displayName = "TypeScript" },
                    new DataModel { id = 2, displayName = "Angular" },
                    new DataModel { id = 3, displayName = "ASP.NET Core" },
                    new DataModel { id = 4, displayName = "Material" },
                    new DataModel { id = 5, displayName = "Webpack" }
                };
            });
        }

        public static Task<List<ForcedDataModel>> GetForcedData()
        {
            return Task.Run(() =>
            {
                return new List<ForcedDataModel>()
                {
                    new ForcedDataModel { id = 1, displayName = "TypeScript" },
                    new ForcedDataModel { id = 2, displayName = "Angular" },
                    new ForcedDataModel { id = 3, displayName = "ASP.NET Core" },
                    new ForcedDataModel { id = 4, displayName = "Material" },
                    new ForcedDataModel { id = 5, displayName = "Webpack" }
                };
            });
        }
    }
}
