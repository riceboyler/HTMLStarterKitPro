define(['durandal/system', './transitionHelpers'], function(system, helper) {
    var settings = {
        inAnimation: 'zoomIn',
        outAnimation: 'zoomOut'
    };
    var zoomIn = function(context) {
        system.extend(context, settings);
        return helper.create(context);
    };

    return zoomIn;
});
