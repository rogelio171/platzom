'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
/**
 * Here will be used a new language called platzom that use the following rules:
 *
 * 1.- If the word ends with 'ar', those characters will be removed. Eg. Programar -> Program.
 * 2.- If the word starts with 'z', 'pe' will be added. Eg. zorro -> zorrope | zarpar -> zarp(by the first rule) -> zarppe.
 * 3.- If the translated word has 10 or more letters, it should be split in the middle using a hyphen. Eg. abecedario -> abece-dario.
 * 4.- If the word is a palindrome, none of the rules will be applied and the same word with intercalated uppercase and lowercase is returned.
 *     Eg. sometemos -> SoMeTeMoS
 */
function platzom(str) {
    var translation = str;

    //Rule 1
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    //Rule 2
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //Rule 3
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));

        translation = firstHalf + '-' + secondHalf;
    }

    //Rule 4
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    var minMay = function minMay(str) {
        return str.split('').map(function (value, key) {
            return key % 2 == 0 ? value.toUpperCase() : value.toLowerCase();
        }).join('');
    };

    return str == reverse(str) ? minMay(str) : translation;
}