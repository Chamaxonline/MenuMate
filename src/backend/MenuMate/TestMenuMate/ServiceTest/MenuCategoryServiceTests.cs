using Entity.Models;
using Moq;
using Repository.Interfaces;
using Services.Implementation;
using Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit.Sdk;

namespace TestMenuMate.ServiceTest
{
    public  class MenuCategoryServiceTests
    {
        [Theory]
        [InlineData("indian","system@gmail.com","indian", "system@gmail.com", true)]
        public async Task Add_ValidMenuCategory_ReturnsAddedMenuCategory(string name1, string createdUser1, string name2, string createdUser2,bool expected)
        {
            // Arrange
            var repositoryMock = new Mock<IMenuCategoryRepository>();
            var menuCategoryService = new MenuCategoryService(repositoryMock.Object);

            var menuCategoryToAdd = new MenuCategory
            {
                Name = name1,
                Active = true,
                CreatedDate = DateTime.Now,
                CreatedBy = createdUser1
            };

            var addedMenuCategory = new MenuCategory
            {
                Name = name2,
                Active = true,
                CreatedDate = DateTime.Now,
                CreatedBy = createdUser2
            };

            repositoryMock.Setup(x => x.Add(It.IsAny<MenuCategory>())).ReturnsAsync(addedMenuCategory);

            // Act
            var result = await menuCategoryService.Add(menuCategoryToAdd);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(addedMenuCategory, result);
            // Optionally, add more specific assertions based on your implementation
        }
    }
}
