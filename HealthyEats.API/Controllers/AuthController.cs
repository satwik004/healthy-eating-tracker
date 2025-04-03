using Microsoft.AspNetCore.Mvc;
using HealthyEats.API.Models;
using HealthyEats.API.Services;

namespace HealthyEats.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("signup")]
        public async Task<ActionResult<AuthResponse>> Signup(SignupRequest request)
        {
            var response = await _authService.SignupAsync(request);
            if (!response.Success)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login(LoginRequest request)
        {
            var response = await _authService.LoginAsync(request);
            if (!response.Success)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            var user = await _authService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPut("user")]
        public async Task<ActionResult<bool>> UpdateUser(User user)
        {
            var result = await _authService.UpdateUserAsync(user);
            if (!result)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpDelete("user/{id}")]
        public async Task<ActionResult<bool>> DeleteUser(string id)
        {
            var result = await _authService.DeleteUserAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return Ok(result);
        }
    }
} 