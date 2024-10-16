namespace Formula1API.Controller;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{
    private readonly FormulaContext formulaContext;



    public DriversController(FormulaContext _formulaContext)
    {
        formulaContext = _formulaContext;
        
    }
    
    [HttpGet]
    public async Task <ActionResult<Driver>> GetAll()
    {
        try
        {
            List<Driver> drivers = await formulaContext.Drivers.ToListAsync();
            if (drivers != null)
            {
                return Ok (drivers);
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

   [HttpGet("{id}")] //for å søke med id
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? driver = await formulaContext.Drivers.FindAsync(id);
            if (driver != null)
            {
                return Ok(driver);
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


    [HttpGet]//For å søke med navn
    [Route("[action]/{name}")]
    public async Task<ActionResult<Driver>> GetByName(string name)
    {
       try
        {
            List<Driver> drivers = await formulaContext.Drivers.ToListAsync();
            List<Driver> driversFound = new List<Driver>();
            foreach(var driver in drivers)
            {
                if(driver.Name?.ToLower().Contains(name.ToLower()) ?? false)
                {
                    driversFound.Add(driver);
                }
            }
            if(driversFound.Count > 0){
            return Ok(driversFound.First());
            }
            return NotFound();
        }
        catch
        {
            return StatusCode(500);
        }
    }


    [HttpPost]
    public async Task<IActionResult> Post(Driver newDriver)
    {
        try{
        formulaContext.Drivers.Add(newDriver);
        await formulaContext.SaveChangesAsync();
        return Ok();
        } catch{
            return StatusCode(500);
        }
    }

    // TODO PUT-metode
    [HttpPut]
    public async Task<IActionResult> Put(Driver driverUpdate)
    {
        try{ 
            formulaContext.Entry(driverUpdate).State = EntityState.Modified;
            await formulaContext.SaveChangesAsync();
            return NoContent();

        } catch{
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try{
            Driver? driver = await formulaContext.Drivers.FindAsync(id);
            if (driver != null)
            {
                formulaContext.Drivers.Remove(driver);
                await formulaContext.SaveChangesAsync(); 
                return NoContent();
            } else {
                return NotFound();
            }
        }
        catch{
            return StatusCode(500);
        }
    } 
    } 





