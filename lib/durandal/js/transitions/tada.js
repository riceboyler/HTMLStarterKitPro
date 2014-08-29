define(['durandal/system', './transitionHelpers'], function(system, helper) {
    var settings = {
        inAnimation: 'tada',
        outAnimation: 'tada'
    };
    var tada = function(context) {
        system.extend(context, settings);
        return helper.create(context);
    };

    return tada;
});