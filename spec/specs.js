describe('bankAccount', function() {
  it("creates a bank account with an initial deposit amount", function() {
    var testAccount = new bankAccount("Kobe Bryant", 3000)
    expect(testAccount.holder).to.equal("Kobe Bryant");
    expect(testAccount.balance).to.equal(3000);
  });
});
describe('deposit', function(){
  it("allows an account holder to deposit ca$h money", function() {
    var testAccount = new bankAccount("Brent", 2000)
    testAccount.deposit(5000)
    expect(testAccount.balance).to.equal(7000)
  });
});

describe('withdraw', function(){
  it("allows an account holder to deposit ca$h money", function() {
    var testAccount = new bankAccount("Jess", 10)
    testAccount.withdraw(9)
    expect(testAccount.balance).to.equal(1)
  });
});
