define(['bindings/ui', 'knockout'], function(ui, ko) {
    var vm = {
        step1Visible: ko.observable(false),
        step2: ko.observable(false),
        step3: ko.observable(false)
    };

    vm.showStep1 = function() {
        vm.step1Visible(true);
    };

    vm.showStep2 = function() {
        vm.step2(true);
    };

    vm.showStep3 = function() {
        vm.step3(true);
    };

    vm.activate = function() {
        return true;
    };

    return vm;
});