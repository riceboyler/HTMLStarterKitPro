define(['knockout', 'jquery', 'app'], function (ko, $, app) {
    var widget = function () {
        var self = this;

        self.jsUsers = app.jsUsers;
        self.koUsers = app.koUsers;
        self.durUsers = app.durUsers;
        self.ngUsers = app.ngUsers;
        self.silverlightUsers = app.silverlightUsers;
        self.wpfUsers = app.wpfUsers;
        self.bbUsers = app.bbUsers;
        self.emberUsers = app.emberUsers;
        self.dotnet = ko.observable(true);
        self.javascript = ko.observable(false);

        self.activate = function(settings) {
            self.dotnet(settings.dotnet);
            self.javascript(settings.javascript);
            return;
        };
    };

    return widget;
});
