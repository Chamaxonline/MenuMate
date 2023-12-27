using AutoMapper;
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
        private readonly IMapper _mapper;
        public MenuCategoryController(IMenuCategoryService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;

        }
        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add(MenuCategoryVM modelVM)
        {
            var model = _mapper.Map<MenuCategory>(modelVM);
            model.CreatedBy = "system@gmail.com";
            return Ok(await _service.Add(model));
        }

        [HttpGet]
        [Route("Get")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(_mapper.Map<MenuCategoryVM>(await _service.Get(id)));
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(_mapper.Map<List<MenuCategoryVM>>(await _service.GetAll()));
        }
    }
}
