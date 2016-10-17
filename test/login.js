var assert = require("assert")

describe("The login test", function () {
  it("should not log you in if credentials are wrong", function () {
    browser.url('http://localhost:8081')
    browser.setValue('[name="email"]', 'vasdfaalid@user.com')
    browser.setValue('[name="password"]', 'not')
    browser.submitForm('form')

    var title = browser.getTitle()
    assert.equal(title, "Login Page")
  })
  it("should log you in if credentials are right", function () {
    browser.url('http://localhost:8081')
    browser.setValue('[name="email"]', 'valid@user.com')
    browser.setValue('[name="password"]', 'gunter2')
    browser.submitForm('form')

    var title = browser.getTitle()
    assert.equal(title, "Logged in Page")
  })
})