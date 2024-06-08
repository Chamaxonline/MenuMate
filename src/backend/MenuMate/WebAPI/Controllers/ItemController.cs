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
    public class ItemController : ControllerBase
    {
        private readonly IItemService _service;
        private readonly IMapper _mapper;
        public ItemController(IItemService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;

        }
        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add(ItemVM modelVM)
        {
            var model = _mapper.Map<Item>(modelVM);
            model.CreatedBy = "system@gmail.com";
            return Ok(await _service.Add(model));
        }

        [HttpGet]
        [Route("Get")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(_mapper.Map<ItemVM>(await _service.Get(id)));
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(_mapper.Map<List<ItemVM>>(await _service.GetAll()));
        }

        [HttpGet]
        [Route("GetLastId")]
        public async Task<IActionResult> GetLastId()
        {
            return Ok(await _service.GetLastId());
        }
    }
}
