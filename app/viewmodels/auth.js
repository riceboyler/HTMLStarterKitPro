define(['bindings/ui', 'knockout', 'plugins/router'], function(ui, ko, router) {
    var vm = {
        activeStep: ko.observable(1),
        wernerVisible: ko.observable(false)
    };

    vm.nextStep = function() {
        vm.activeStep(vm.activeStep() + 1);
        if(vm.activeStep() > 3) {
            router.navigate("hotness");
        }
    };

    vm.showWerner = function() {
        vm.wernerVisible(true);
    };

    vm.hideWerner = function() {
        vm.wernerVisible(false);
    };

    return vm;
});