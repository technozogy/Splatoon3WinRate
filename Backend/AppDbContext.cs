using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) //: baseは親クラス(DbContext)のコンストラクタにoptionsを渡すという意味
    {
        
    }

    public DbSet<Match> Matches { get; set; }
}