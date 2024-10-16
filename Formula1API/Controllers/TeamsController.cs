namespace Formula1API.Controller;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;

[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly FormulaContext formulaContext;

    public TeamsController(FormulaContext _formulaContext)
    {
        formulaContext = _formulaContext;
    }

    [HttpGet]
    public async Task<ActionResult<Team>> Get()
    {
        try
        {
            List<Team> teams = await formulaContext.Teams.ToListAsync();
            if(teams != null)
            {
                return Ok(teams);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

}