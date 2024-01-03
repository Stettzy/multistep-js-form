export const populateSubCategories = (subCategories) => {
    const subCategorySelect = document.getElementById("sub-category");
    subCategorySelect.innerHTML = "";
    if (subCategories && subCategories.length > 0) {
        subCategories.forEach((subCategory) => {
            const option = document.createElement("option");
            option.value = subCategory.name;
            option.textContent = subCategory.name;
            subCategorySelect.appendChild(option);
        });
    }
};

export const populateTopCategories = (categories) => {
    const topCategorySelect = document.getElementById("top-category");
    if (categories && categories.length > 0) {
        categories.forEach((category) => {
            const option = document.createElement("option");
            option.value = category.name;
            option.textContent = category.name;
            topCategorySelect.appendChild(option);
        });
    }
};

export const bindCategoryChange = (categories) => {
    const topCategorySelect = document.getElementById("top-category");
    topCategorySelect.addEventListener("change", function () {
        const selectedCategory = categories.find(
            (category) => category.name === this.value
        );
        populateSubCategories(selectedCategory.children);
    });
};
