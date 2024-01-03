import form from "./modules/form.js";
import { bindCategoryChange } from "./utilities.js";

export function nextStep(form) {
    if (form.currentStep < form.steps.length - 1) {
        form.currentStep++;
        form.renderForm("#form");
        if (form.currentStep === 1) {
            form.steps[form.currentStep].init(form);
        }
        bindEvents(form);
    } else {
        // form.submit();
    }
}

export function previousStep(form) {
    if (form.currentStep > 0) {
        form.currentStep--;
        form.renderForm("#form");
        if (form.currentStep === 1) {
            form.steps[form.currentStep].init(form);
            bindCategoryChange(form.categories);
        }
        bindEvents(form);
    }
}

export function bindEvents(form) {
    const next = document.querySelector("#next");
    const previous = document.querySelector("#previous");

    if (previous) {
        previous.removeEventListener("click", () => previousStep(form));
        previous.addEventListener("click", () => previousStep(form));
    }
    if (next) {
        next.removeEventListener("click", () => nextStep(form));
        next.addEventListener("click", () => nextStep(form));
    }
}
