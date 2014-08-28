define(['bindings/ui', 'knockout'], function(ui, ko) {
    var vm = {
        jsUsers: ko.observable(),
        koUsers: ko.observable(),
        durandalUsers: ko.observable(),
        ngUsers: ko.observable(),
        showJSInput: ko.observable(true),
        showKOInput: ko.observable(true),
        showDurandalInput: ko.observable(true),
        showNgInput: ko.observable(true)
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

    return vm;
});