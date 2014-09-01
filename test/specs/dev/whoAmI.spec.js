describe('viewmodels/whoAmI', function() {
    "use strict";
    var whoAmI = require('viewmodels/whoAmI');

    it('should have a step1Visible property', function() {
        expect(whoAmI.step1Visible).toBeDefined();
    });

    it('should have a step2 property', function() {
        expect(whoAmI.step2).toBeDefined();
    });

    it('should have a step3 property', function() {
        expect(whoAmI.step3).toBeDefined();
    });

    describe('showStep1', function() {
        it('should be a propety of type function', function() {
            expect(whoAmI.showStep1).toBeDefined();
            expect(typeof whoAmI.showStep1 === "function").toBeTruthy();
        });

        it('should set step1 to true', function() {
            whoAmI.showStep1();
            expect(whoAmI.step1Visible).toBeTruthy();
        });
    });

    describe('showStep2', function() {
        it('should be a property of type function', function() {
            expect(whoAmI.showStep2).toBeDefined();
            expect(typeof whoAmI.showStep2 === "function").toBeTruthy();
        });

        it('should set step2 to true', function() {
            whoAmI.showStep2();
            expect(whoAmI.step2).toBeTruthy();
        });
    });

    describe('showStep3', function() {
        it('should be a property of type function', function() {
            expect(whoAmI.showStep3).toBeDefined();
            expect(typeof whoAmI.showStep3 === "function").toBeTruthy();
        });

        it('should set step3 to true', function() {
            whoAmI.showStep3();
            expect(whoAmI.step3).toBeTruthy();
        });
    });

});