define(['plugins/router', 'knockout'], function(router, ko) {
    var vm = function() {
        var self = this;
        self.next = function() {
            router.navigate("routing");
        };
    };

    return vm;
});