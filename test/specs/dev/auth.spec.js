describe('viewmodels/auth', function() {
    "use strict";
    var auth = require('viewmodels/auth');

    it('should have a jsUsers property', function() {
        expect(auth.jsUsers).toBeDefined();
    });

    it("should have a koUsers property", function() {
        expect(auth.koUsers).toBeDefined();
    });

    it("should have a durandalUsers property", function() {
        expect(auth.durandalUsers).toBeDefined();
    });

    it("should have an ngUsers property", function() {
        expect(auth.ngUsers).toBeDefined();
    });

    it("should have a showJSInput property", function() {
        expect(auth.showJSInput).toBeDefined();
    });

    it("should have a showKOInput property", function() {
        expect(auth.showKOInput).toBeDefined();
    });

    it("should have a showDurandalInput property", function() {
        expect(auth.showDurandalInput).toBeDefined();
    });

    it("should have a showNgInput property", function() {
        expect(auth.showNgInput).toBeDefined();
    });

    it("should have an activeStep property", function() {
        expect(auth.activeStep).toBeDefined();
    });

    it("should have a wernerVisible property", function() {
        expect(auth.wernerVisible).toBeDefined();
    });

    describe("blurJS", function() {
        it("should be a property of type function", function() {
            expect(auth.blurJS).toBeDefined();
            expect(typeof auth.blurJS === "function").toBeTruthy();
        });

        it("should set showJSInput false", function() {
            auth.blurJS();
            expect(auth.showJSInput()).toBeFalsy();
        });
    });

    describe("blurKO", function() {
        it("should be a property of type function", function() {
            expect(auth.blurKO).toBeDefined();
            expect(typeof auth.blurKO === "function").toBeTruthy();
        });

        it("should set showKOInput to false", function() {
            auth.blurKO();
            expect(auth.showKOInput()).toBeFalsy();
        });
    });

    describe("blurDurandal", function() {
        it("should be a property of type function", function() {
            expect(auth.blurDurandal).toBeDefined();
            expect(typeof auth.blurDurandal === "function").toBeTruthy();
        });

        it("should set showDurandalInput to be false", function() {
            auth.blurDurandal();
            expect(auth.showDurandalInput()).toBeFalsy();
        });
    });

    describe("blurNg", function() {
        it("should be a property of type function", function() {
            expect(auth.blurNg).toBeDefined();
            expect(typeof auth.blurNg === "function").toBeTruthy();
        });

        it("should set showNgInput to be false", function() {
            auth.blurNg();
            expect(auth.showNgInput()).toBeFalsy();
        });
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