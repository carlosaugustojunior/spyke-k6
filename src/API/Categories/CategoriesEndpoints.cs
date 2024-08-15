using Carter;

namespace API.Categories;

public class CategoriesEndpoints : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("api/categories");

        group.MapGet("", GetCategories);
    }

    public static List<GetCategoryResponse> GetCategories()
    {
        return new List<GetCategoryResponse> { new(Guid.NewGuid(), "Category") };
    }
}
