define(['knockout'], function(ko) {
    var vm = {
        activeStep: ko.observable(1)
    };

    vm.forward = function() {
        vm.activeStep(vm.activeStep() + 1);
    };

    return vm;
});