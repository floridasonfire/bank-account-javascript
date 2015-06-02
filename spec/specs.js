describe('bankAccount', function() {
  it("creates a bank account with an initial deposit amount", function() {
    var testAccount = new bankAccount("Kobe Bryant", 3000)
    expect(testAccount.holder).to.equal("Kobe Bryant");
    expect(testAccount.balance).to.equal(3000);
  });
});
