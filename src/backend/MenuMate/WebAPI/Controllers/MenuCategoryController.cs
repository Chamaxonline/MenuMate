using Entity.Models;
using Entity.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Interface;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuCategoryController : ControllerBase
    {
        private readonly IMenuCategoryService _service;
        public MenuCategoryController(IMenuCategoryService service)
        {
            _service = service;
        }
        [HttpPost]
        public async Task<IActionResult> Add(MenuCategory model)
        {
            return Ok(await _service.Add(model));
        }
    }
}
