'use strict';

describe('myApp.coins module', function() {

  beforeEach(module('myApp.coins'));

  describe('coins controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var coinsCtrl = $controller('CoinsCtrl');
      expect(coinsCtrl).toBeDefined();
    }));

  });
});