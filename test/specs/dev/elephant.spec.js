describe('viewmodels/elephant', function () {
    "use strict";
    var Elephant = require('viewmodels/elephant');
    var router = require('plugins/router');

    it ('should be an object literal', function () {
            var a = Elephant;
            expect(a).toEqual(Elephant);
        });

    describe('switchPic', function() {
        it('should be a property of type function', function() {
            expect(Elephant.switchPic).toBeDefined();
            expect(typeof Elephant.switchPic === "function").toBeTruthy();
        });

        it('should set demiseVis to true', function() {
            Elephant.switchPic();
            expect(Elephant.demiseVis).toBeTruthy();
        });
    });

    describe('next', function() {
        it('should be a property of type function', function() {
            expect(Elephant.next).toBeDefined();
            expect(typeof Elephant.next === "function").toBeTruthy();
        });

        it('should navigate to first things', function() {
            Elephant.next();
            expect(router.activeInstruction()).toEqual("firstThings");
        })
    })
});