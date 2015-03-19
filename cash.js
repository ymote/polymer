var C = {};     // C Object simplifies exporting the module

// initialize the avaialable coins 
C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

/**
 * getChange returns and Array containing the values of notes & coins
 * equivalent to the change for a given transaction
 * @param {Number}  totalPayable the amount payable for a transaction
 * @param {Number}  cashPaid  the amount the customer hands over to pay
 * @returns {Array} [500,20,5] the array equivalent of the change
 */

C.getChange = function (totalPayable, cashPaid) {
    'use strict';

    var change = [], length = C.coins.length,
    remaining = cashPaid - totalPayable; // we reduce this below
    for(var i=0; i<length; i++)
    {
      var coin = C.coins[i];
      if(remaining/coin >= 1)
      {
        var time = Math.floor(remaining/coin)
        console.log("number of coins needed", time);
        for(var j=0; j<time; j++)
        {
          remaining = remaining - coin;
          change.push(coin);
          console.log("reduced remaining", j, remaining);
        }
      }
    }
 
    return change
};


console.log("the change is ", C.getChange(256, 300));

module.exports = C;  