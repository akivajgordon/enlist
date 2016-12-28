/*jslint es6, node: true */

"use strict";

module.exports = function enlist(items) {
    if (items.length <= 2) {
        return items.join(' and ');
    }

    const last = items.pop();

    return enlist([`${items.join(', ')},`, last]);
};
