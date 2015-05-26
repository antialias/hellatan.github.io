/**
 * User: daletan
 * Date: 5/25/15
 * Time: 7:22 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

// TODO: publish bunsen module to npm for usage

/**
 * Finds the value of any given namespace
 * @param {String} targetNamespace Period delimited string representing the object/property to search for (ie. "dibs.isMobile.iPhone")
 * @param {Object} [parent] defaults to the window object as the object to iterate over
 * @param {*} [fallback] Any value to return if no property is found
 * @returns {object}
 */
module.exports = function findNamespaceValue(targetNamespace, parent, fallback) {
    var ns = targetNamespace.split('.');
    var firstNS = ns[0];
    var target = parent;

    if (!parent || !parent[firstNS]) {
        return fallback;
    }

    while (ns.length) {
        var currentNs = ns.shift();
        if (target[currentNs]) {
            target = target[currentNs];
        } else {
            // since false and null are falsy values, doing fallback || undefined will always return undefined
            target = fallback === false ? false : fallback === null ? null : (fallback || undefined);
            break;
        }
    }

    return target;

};
