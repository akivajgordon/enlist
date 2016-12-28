/*jslint es6, node: true */

"use strict";

function enlistWithFinalConjuction(items, conjunction) {
    if (items.length <= 2) {
        return items.join(` ${conjunction} `);
    }

    const last = items.pop();

    return enlistWithFinalConjuction([`${items.join(', ')},`, last], conjunction);
}

const enlist = (items) => enlistWithFinalConjuction(items, 'and');

enlist.or = (items) => enlistWithFinalConjuction(items, 'or');

module.exports = enlist;
