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
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;
        private readonly IMapper _mapper;
        private readonly ILogger<OrderController> _logger;
        public OrderController(IOrderService service, IMapper mapper, ILogger<OrderController> logger)
        {
            _service = service;
            _mapper = mapper;
            _logger = logger;
        }
        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add(OrderVM modelVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var model = _mapper.Map<Order>(modelVM);
            model.CreatedBy = "system@gmail.com";
            _logger.LogInformation("Order Add method Starting.");
            return Ok(await _service.Add(model));
        }

        [HttpGet]
        [Route("Get")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(_mapper.Map<OrderVM>(await _service.Get(id)));
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(_mapper.Map<List<OrderVM>>(await _service.GetAll()));
        }
    }
}
