namespace Formula1API.Controller;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;

[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{
    private readonly FormulaContext formulaContext;

    public RacesController(FormulaContext _formulaContext)
    {
        formulaContext = _formulaContext;
    }

    [HttpGet]
    public async Task<ActionResult<Race>> Get()
    {
        try
        {
            List<Race> races = await formulaContext.Races.ToListAsync();
            if(races != null)
            {
                return Ok(races);
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