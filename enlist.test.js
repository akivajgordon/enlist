/*jslint es6, node: true */

"use strict";

const describe = global.describe;
const it = global.it;
const expect = global.expect;

const enlist = require('./index.js');

describe("enlist", function () {
    describe("a single value", function () {
        it("should return that value", function () {
            expect(enlist(['apples'])).toBe('apples');
        });
    });

    describe("another single value", function () {
        it("should return that value", function () {
            expect(enlist(['oranges'])).toBe('oranges');
        });
    });

    describe("no items", function () {
        it("should return an empty string", function () {
            expect(enlist([])).toBe('');
        });
    });

    describe("2 items", function () {
        it("should separate items by 'and'", function () {
            expect(enlist(['apples', 'oranges'])).toBe('apples and oranges');
        });
    });

    describe("2 other items", function () {
        it("should separate items by 'and'", function () {
            expect(enlist(['cake', 'ice cream'])).toBe('cake and ice cream');
        });
    });

    describe("3 items", function () {
        it("should separate items by commas and 'and'", function () {
            expect(enlist(['apples', 'bananas', 'oranges'])).toBe('apples, bananas, and oranges');
        });
    });

    describe("3 other items", function () {
        it("should separate items by commas and 'and'", function () {
            expect(enlist(['cake', 'ice cream', 'fruit'])).toBe('cake, ice cream, and fruit');
        });
    });

    describe("4 items", function () {
        it("should separate items by commas and 'and'", function () {
            expect(enlist(['apples', 'bananas', 'oranges', 'cherries'])).toBe('apples, bananas, oranges, and cherries');
        });
    });
});
