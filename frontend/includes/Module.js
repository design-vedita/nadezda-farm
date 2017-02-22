export default class Module {
    constructor() {
        this.options = {
            name: 'Module',
        }

        if (this.options.self) {
            this.$root = $(this.options.self);
            this.init();
        }

        console.log($(this.options.self));
    }

    init() {}
}