import {
    populateTopCategories,
    populateSubCategories,
    bindCategoryChange,
} from "../utilities.js";

import { brands, categories } from "./stepTemplates.js";

export const steps = [
    {
        template: brands,
        options: `
            <div class="step-options">
                <button type="button" class="btn btn-primary" id="next">Next</button>
            </div>`,
    },
    {
        template: categories,
        options: `
            <div class="step-options">
                <button type="button" class="btn btn-primary" id="previous">Previous</button>
                <button type="button" class="btn btn-primary" id="next">Next</button>
            </div>
        `,
        init: function (categories) {
            console.log("init", categories);
            populateTopCategories(categories);
            if (categories.length > 0) {
                populateSubCategories(categories[0].children);
            }
            bindCategoryChange(categories);
        },
    },
];
