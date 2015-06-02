function bankAccount(holder, balance){
  this.holder = holder
  this.balance = balance
};


bankAccount.prototype.deposit = function(amount){
  this.balance += amount
};

bankAccount.prototype.withdraw = function(amount){
  this.balance -= amount
};

"use strict";


//jQuery
$( document ).ready(function() {

});
