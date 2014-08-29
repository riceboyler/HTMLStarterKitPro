define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'elephant', title: 'Mammoths', moduleId: 'viewmodels/elephant', nav: false},
                { route: 'whoAmI', title: 'Who Am I?', moduleId: 'viewmodels/whoAmI', nav: true },
                { route: 'tresta', title: 'What I Do (Now)', moduleId: 'viewmodels/tresta', nav: true },
                { route: 'solid', title: 'SOLID, Man', moduleId: 'viewmodels/solid', nav: true},
                { route: 'di', title: 'DI or Die', moduleId: 'viewmodels/di', nav: true },
                { route: 'auth', title: 'Who Are You?', moduleId: 'viewmodels/auth', nav: true },
                { route: 'hotness', title: 'Make It Hot', moduleId: 'viewmodels/hotness', nav: true },
                { route: 'widgets', title: 'Widgetize', moduleId: 'viewmodels/widgets', nav: true },
                { route: 'routing', title: 'I-75', moduled: 'viewmodels/routing', nav: true}
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});