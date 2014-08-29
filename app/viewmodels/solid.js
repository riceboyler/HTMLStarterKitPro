define(['knockout', 'plugins/router', 'bindings/ui'], function(ko, router, ui) {
    var vm = {
        focused: ko.observable(false)
    };

    vm.focus = function() {
        vm.focused(true);
    };

    vm.next = function() {
        router.navigate("di");
    };

    return vm;
});