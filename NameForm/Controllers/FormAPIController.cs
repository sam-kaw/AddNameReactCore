using Microsoft.AspNetCore.Mvc;
using NameForm.Models;
using NameForm.Repository;

namespace NameForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormAPIController : ControllerBase
    {
        // Context creation to align with the Repository
        private readonly INameRepository _context;

        public FormAPIController(INameRepository context)
        {
            _context = context;
        }

        // POST: api/FormAPI

        [HttpPost("addName")]
        public void Post(Name firstNameSub)
        {
            _context.InsertName(firstNameSub);
        }
    }
}
