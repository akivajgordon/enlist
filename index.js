/*jslint es6, node: true */

"use strict";

module.exports = function (items) {
    if (items.length > 2) {
        const last = items.pop();

        return `${items.join(', ')}, and ${last}`;
    }

    if (items.length === 2) {
        return items.join(' and ');
    }

    return items[0] || '';
};
