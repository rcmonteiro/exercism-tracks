"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var isbn_verifier_ts_1 = require("./isbn-verifier.ts");
(0, globals_1.describe)('ISBN Verifier', function () {
    (0, globals_1.it)('valid isbn', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21508-8')).toBeTruthy();
    });
    (0, globals_1.xit)('invalid isbn check digit', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21508-9')).toBeFalsy();
    });
    (0, globals_1.xit)('valid isbn with a check digit of 10', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21507-X')).toBeTruthy();
    });
    (0, globals_1.xit)('check digit is a character other than X', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21507-A')).toBeFalsy();
    });
    (0, globals_1.xit)('invalid check digit in isbn is not treated as zero', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('4-598-21507-B')).toBeFalsy();
    });
    (0, globals_1.xit)('invalid character in isbn is not treated as zero', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-2K507-0')).toBeFalsy();
    });
    (0, globals_1.xit)('X is only valid as a check digit', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-2X507-9')).toBeFalsy();
    });
    (0, globals_1.xit)('valid isbn without separating dashes', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3598215088')).toBeTruthy();
    });
    (0, globals_1.xit)('isbn without separating dashes and X as check digit', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('359821507X')).toBeTruthy();
    });
    (0, globals_1.xit)('isbn without check digit and dashes', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('359821507')).toBeFalsy();
    });
    (0, globals_1.xit)('too long isbn', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21507-XX')).toBeFalsy();
    });
    (0, globals_1.xit)('too long isbn and no dashes', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3598215078X')).toBeFalsy();
    });
    (0, globals_1.xit)('too short isbn', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('00')).toBeFalsy();
    });
    (0, globals_1.xit)('isbn without check digit', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21507')).toBeFalsy();
    });
    (0, globals_1.xit)('check digit of X should not be used for 0', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3-598-21515-X')).toBeFalsy();
    });
    (0, globals_1.xit)('empty isbn', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('')).toBeFalsy();
    });
    (0, globals_1.xit)('input is 9 characters', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('134456729')).toBeFalsy();
    });
    (0, globals_1.xit)('invalid characters are not ignored after checking length', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3132P34035')).toBeFalsy();
    });
    (0, globals_1.xit)('invalid characters are not ignored before checking length', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('3598P215088')).toBeFalsy();
    });
    (0, globals_1.xit)('input is too long but contains a valid isbn', function () {
        (0, globals_1.expect)((0, isbn_verifier_ts_1.isValid)('98245726788')).toBeFalsy();
    });
});
