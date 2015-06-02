function bankAccount(holder, balance){
  this.holder = holder
  this.balance = balance
  btnId = ""
};


bankAccount.prototype.deposit = function(amount){
  this.balance += amount
};

bankAccount.prototype.withdraw = function(amount){
  this.balance -= amount
};

var findButton = function(id){
    btnId = id
};


"use strict";


//jQuery
$( document ).ready(function() {


  $("#create_account").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("#first_name").val();
    var inputtedLastName = $("#last_name").val();
    var inputtedBalance = parseInt($("#balance").val());
    var newAccount = new bankAccount(inputtedFirstName + " " + inputtedLastName, inputtedBalance);

    // $("#account_list").append("<li class='account'>" + newAccount.holder + "</li>");

    var clearForm = function(){
      $("#first_name").val("");
      $("#last_name").val("");
      $("#balance").val("");
    }

    var showAccount = function(){
      // $(".account").last().click(function(){
        $(".change-balance-header").show();
        $(".holder_name").text(newAccount.holder);
        $(".account_balance").text(newAccount.balance);
        $("#show_account").show();
      // });
    }

    var changeBalance = function(){
      $("#change-balance").submit(function(event) {
        event.preventDefault();

        var amt = parseInt($("#amt").val());

        if (btnId === "withdraw") {
          newAccount.withdraw(amt);
          $(".account_balance").text(newAccount.balance);
          btnId = "";
          amt = 0;
        } else if (btnId === "deposit"){
          newAccount.deposit(amt);
          $(".account_balance").text(newAccount.balance);
          btnId = "";
          amt = 0;
        };
      });
      };

      clearForm();
      showAccount();
      changeBalance();


  });

});
