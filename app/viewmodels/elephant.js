define(['knockout', 'plugins/router'], function(ko, router) {
    var vm = {
        demiseVis: ko.observable(false)
    };

    vm.switchPic = function() {
        vm.demiseVis(true);
    };

    vm.next = function() {
        router.navigate("auth");
    };

    return vm;
});