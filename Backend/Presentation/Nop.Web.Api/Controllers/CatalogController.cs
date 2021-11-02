using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nop.Services.Catalog;
using Nop.Web.Factories;
using Nop.Web.Models.Catalog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Nop.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        #region Field
        private readonly ICatalogModelFactory _catalogModelFactory;
        private readonly ICategoryService _categoryService;

        public CatalogController(ICategoryService categoryService,
                                 ICatalogModelFactory catalogModelFactory)
        {
            this._categoryService = categoryService;
            this._catalogModelFactory = catalogModelFactory;
        }
        #endregion

        #region Categories

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<CategorySimpleModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public  async Task<IActionResult> GetCatalogRoot()
        {
            var model = await _catalogModelFactory.PrepareRootCategoriesAsync();

            return Ok(model);
        }

        #endregion
    }
}
