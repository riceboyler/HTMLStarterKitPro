describe('viewmodels/auth', function() {
    "use strict";
    var auth = require('viewmodels/auth');

    it("should have an activeStep property", function() {
        expect(auth.activeStep).toBeDefined();
    });

    it("should have a wernerVisible property", function() {
        expect(auth.wernerVisible).toBeDefined();
    });

    describe("nextStep", function() {
        it("should be a property of type function", function() {
            expect(auth.nextStep).toBeDefined();
            expect(typeof auth.nextStep === "function").toBeTruthy();
        });

        it("should set active step + 1", function() {
            var activeStep = auth.activeStep();
            auth.nextStep();
            expect(auth.activeStep()).toBeGreaterThan(activeStep);
        });
    });

    describe("werner", function() {
        it("showWerner should be a property of type function", function() {
            expect(auth.showWerner).toBeDefined();
            expect(typeof auth.showWerner === "function").toBeTruthy();
        });

        it("showWerner should set wernerVisible to true", function() {
            auth.showWerner();
            expect(auth.wernerVisible()).toBeTruthy();
        });

        it("hideWerner should be a property of type function", function() {
            expect(auth.hideWerner).toBeDefined();
            expect(typeof auth.hideWerner === "function").toBeTruthy();
        });

        it("hideWerner should set wernerVisible to false", function() {
            auth.hideWerner();
            expect(auth.wernerVisible()).toBeFalsy();
        });
    });

});