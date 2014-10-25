define(['knockout', 'bindings/ui', 'plugins/router'], function (ko, ui, router) {
    var vm = {
        showObjectLiteral: ko.observable(false),
        showConstructorFunction: ko.observable(false)
    };

    vm.clickObj = function() {
        vm.showObjectLiteral(true);
    };

    vm.clickConst = function() {
        vm.showConstructorFunction(true);
    };

    vm.next = function() {
        router.navigate("solid");
    };

    return vm;
});