describe("viewmodels/di", function() {
    "use strict";
    var di = require('viewmodels/di');

    it("should have an activeStep property", function() {
        expect(di.activeStep).toBeDefined();
    });

    describe("forward", function() {
        it("should be a property of type function", function() {
            expect(di.forward).toBeDefined();
            expect(typeof di.forward === "function").toBeTruthy();
        });

        it("should set active step + 1", function() {
            var preRun = di.activeStep();
            di.forward();
            expect(di.activeStep()).toBeGreaterThan(preRun);
        });
    });
});