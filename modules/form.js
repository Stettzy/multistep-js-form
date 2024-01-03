import { bindEvents } from "../handlers.js";
import { steps } from "./steps.js";

const form = {
    categories: [],
    steps: steps,
    currentStep: 0,

    formTemplate: `
        <form>
            <div>{{ stepTemplate }}</div>
            <div>{{ stepOptions }}</div>
        </form>`,
    stepOptions: `
        <div class="step-options">
            <button type="button" class="btn btn-primary" id="next">Next</button>
        </div>`,

    init() {
        fetch("../data.json")
            .then((response) => response.json())
            .then((data) => {
                this.categories = data;
                this.renderForm("#form");
                bindEvents(this);
            });
    },

    renderForm(element) {
        const stepTemplate = this.steps[this.currentStep].template;
        const stepOptions = this.steps[this.currentStep].options;

        const formContent = this.formTemplate
            .replace("{{ stepTemplate }}", stepTemplate)
            .replace("{{ stepOptions }}", stepOptions);

        document.querySelector(element).innerHTML = formContent;

        console.log("inside form currentStep", this.currentStep);
        console.log("inside form", this.categories);

        if (
            this.steps[this.currentStep].init &&
            Array.isArray(this.categories)
        ) {
            console.log("inside form", this.categories);
            this.steps[this.currentStep].init(this.categories);
        }

        bindEvents(this);
    },
};

export default form;
