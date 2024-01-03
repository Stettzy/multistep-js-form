import form from "./modules/form.js";

const app = {
    mount() {
        document.addEventListener("DOMContentLoaded", function () {
            form.init();
        });
    },
};

export default app;
