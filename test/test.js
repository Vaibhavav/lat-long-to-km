'use strict';

var expect = require('chai').expect;
var latLongToKM = require('../index');

describe('#latLongToKM', function() {
    it('should convert single digits', function() {
        var result = latLongToKM(53.339428, -6.257664,53.339428, -6.257664);
        expect(result).to.equal(0);
    });
});