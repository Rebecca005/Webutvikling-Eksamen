// context for hele databasen
namespace Formula1API.Contexts;


using Formula1API.Models;
using Microsoft.EntityFrameworkCore;

public class FormulaContext : DbContext
{
    public FormulaContext(DbContextOptions<FormulaContext> options): base(options){}
    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Team> Teams {get; set;}
    public DbSet<Race> Races {get; set;}
}