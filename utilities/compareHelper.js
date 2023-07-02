const { assert } = require("chai");

compareText = function (actual, expected, message) {
    assert.equal(actual, expected, `current ${message} '${actual}' is not matching with expected ${message} '${expected}'`)
    loggers(`current ${message} '${actual}' is matching with expected ${message} '${expected}'`)
}

module.exports = {};