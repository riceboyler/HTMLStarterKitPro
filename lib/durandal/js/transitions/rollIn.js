define(['durandal/system', './transitionHelpers'], function(system, helper) {
    var settings = {
        inAnimation: 'rollIn',
        outAnimation: 'rollOut'
    };
    var rollIn = function(context) {
        system.extend(context, settings);
        return helper.create(context);
    };

    return rollIn;
});