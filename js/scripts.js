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

  $("#create_account").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("#first_name").val();
    var inputtedLastName = $("#last_name").val();
    var inputtedBalance = $("#balance").val();
    var newAccount = new bankAccount(inputtedFirstName + " " + inputtedLastName, inputtedBalance);
    $("#account_list").append("<li class='account'>" + newAccount.holder + "</li>");
    $(".account").last().click(function() {
      $("#show_account").show();
      $(".holder_name").text(newAccount.holder);
      $(".account_balance").text(newAccount.balance);
    });


  });
});
