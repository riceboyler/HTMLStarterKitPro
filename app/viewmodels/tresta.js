define(['bindings/ui', 'knockout'], function(ui, ko) {
    var vm = {
        tresta: ko.observable(false),
        avatar: ko.observable(false),
        iTeres: ko.observable(false)
    };

    vm.showTresta = function() {
        vm.tresta(true);
    };

    vm.showAvatar = function() {
        vm.avatar(true);
    };

    vm.showiTeres = function() {
        vm.iTeres(true);
    };

    vm.next = function() {
        router.navigate("auth");
    }

    return vm;
});