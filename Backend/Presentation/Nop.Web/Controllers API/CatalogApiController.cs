using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nop.Core.Domain.Catalog;
using Nop.Services.Catalog;
using Nop.Services.Security;
using Nop.Services.Stores;
using Nop.Web.Areas.Admin.Models.Catalog;
using Nop.Web.Factories;
using Nop.Web.Models.Catalog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Nop.Web.Controllers_API
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogApiController : ControllerBase
    {
        private readonly ICatalogModelFactory _catalogModelFactory;
        private readonly ICategoryService _categoryService;
        private readonly IAclService _aclService;
        private readonly IStoreMappingService _storeMappingService;
        private readonly IPermissionService _permissionService;

        public CatalogApiController(ICatalogModelFactory catalogModelFactory, ICategoryService categoryService,
                                    IAclService aclService,
                                      IStoreMappingService storeMappingService,
                                      IPermissionService permissionService)
        {
            _catalogModelFactory = catalogModelFactory;
            _categoryService = categoryService;
            _aclService = aclService;
              _storeMappingService = storeMappingService;
            _permissionService = permissionService;
        }

        #region Categories

        [HttpGet]
        [Route("GetCatalogs")]
        [ProducesResponseType(typeof(IEnumerable<CategorySimpleModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetCatalogRoot()
        {
            var model = await _catalogModelFactory.PrepareTopMenuModelAsync();

            return Ok(model);
        }

        [HttpGet]
        [Route("GetSubCatalogs/{catalogId:int}")]
        [ProducesResponseType(typeof(IEnumerable<CategorySimpleModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetCatalogSubRoot(int catalogId)
        {
            var model = await _catalogModelFactory.PrepareSubCategoriesAsync(catalogId);

            return Ok(model);
        }

        [HttpGet]
        [Route("GetProductByCatalogId")]
        [ProducesResponseType(typeof(IEnumerable<CategoryProductModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> GetProductByCatalogId(int categoryId, [FromQuery] CatalogProductsCommand command)
        {
            var category = await _categoryService.GetCategoryByIdAsync(categoryId);

            if (!await CheckCategoryAvailabilityAsync(category))
                return NotFound();

            var model = await _catalogModelFactory.PrepareCategoryProductsModelAsync(category, command);

            return Ok(model);
        }

        #endregion

        private async Task<bool> CheckCategoryAvailabilityAsync(Category category)
        {
            var isAvailable = true;

            if (category == null || category.Deleted)
                isAvailable = false;

            var notAvailable =
                //published?
                !category.Published ||
                //ACL (access control list) 
                !await _aclService.AuthorizeAsync(category) ||
                //Store mapping
                !await _storeMappingService.AuthorizeAsync(category);
            //Check whether the current user has a "Manage categories" permission (usually a store owner)
            //We should allows him (her) to use "Preview" functionality
            var hasAdminAccess = await _permissionService.AuthorizeAsync(StandardPermissionProvider.AccessAdminPanel) && await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageCategories);
            if (notAvailable && !hasAdminAccess)
                isAvailable = false;

            return isAvailable;
        }
    }
}
