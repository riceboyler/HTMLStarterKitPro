define(['bindings/ui', 'knockout', '../app'], function(ui, ko, appVar) {
    var vm = {
        jsUsers: appVar.jsUsers,
        koUsers: appVar.koUsers,
        durandalUsers: appVar.durUsers,
        ngUsers: appVar.ngUsers,
        showJSInput: ko.observable(true),
        showKOInput: ko.observable(true),
        showDurandalInput: ko.observable(true),
        showNgInput: ko.observable(true),
        activeStep: ko.observable(1),
        wernerVisible: ko.observable(false)
    };

    vm.blurJS = function() {
        vm.showJSInput(false);
    };

    vm.blurKO = function() {
        vm.showKOInput(false);
    };

    vm.blurDurandal = function() {
        vm.showDurandalInput(false);
    };

    vm.blurNg = function() {
        vm.showNgInput(false);
    };

    vm.nextStep = function() {
        vm.activeStep(vm.activeStep() + 1);
    };

    vm.showWerner = function() {
        vm.wernerVisible(true);
    };

    vm.hideWerner = function() {
        vm.wernerVisible(false);
    };

    return vm;
});