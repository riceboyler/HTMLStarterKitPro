define(['knockout', 'plugins/router', 'bindings/ui'], function(ko, router, ui) {
    var vm = {
        focused: ko.observable(false),
        singleVM: ko.observable(),
        diVM: ko.observable(),
        stinkCloud: ko.observable(false),
        activeStep: ko.observable(1)
    };

    vm.focus = function() {
        vm.focused(true);
        vm.singleVM("viewmodels/singleResp");
    };

    vm.loadDI = function() {
        vm.diVM("viewmodels/di");
    };

    vm.showStink = function() {
        vm.stinkCloud(true);
    };

    vm.next = function() {
        router.navigate("auth");
    };

    vm.forward = function() {
        vm.activeStep(vm.activeStep() + 1);
    };

    return vm;
});