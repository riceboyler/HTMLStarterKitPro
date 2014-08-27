/*global jasmine, describe, beforeEach, it, expect, require */
describe('viewmodels/welcome', function() {
    "use strict";
    var Welcome = require('viewmodels/welcome');

    it('should be a constructor function', function() {
        var a = new Welcome();
        expect(a.constructor).toEqual(Welcome);
    });

    describe('instance', function() {
        var a = new Welcome();

        it('should have a "displayName" property', function() {
            expect(a.displayName).toBeDefined();
        });
    });
});
