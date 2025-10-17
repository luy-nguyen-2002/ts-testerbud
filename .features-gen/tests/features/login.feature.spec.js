// Generated from: tests\features\login.feature
import { test } from "../../../fixtures/pageFixtures.ts";

test.describe('Login Functionality', () => {

  test.beforeEach('Background', async ({ Given, Then, And, homePage, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the homepage', null, { homePage }); 
    await And('I click on the login link', null, { homePage }); 
    await Then('I should be on the login page', null, { loginPage }); 
  });
  
  test.describe('Verify login with valid credentials', () => {

    test('Example #1', { tag: ['@smoke', '@positive'] }, async ({ Given, When, Then, loginPage }) => { 
      await Given('I enter valid "user@premiumbank.com" and "Bank@123"', null, { loginPage }); 
      await When('I click the sign in button', null, { loginPage }); 
      await Then('I should see a successful login message', null, { loginPage }); 
    });

  });

  test.describe('Verify login with invalid credentials', () => {

    test('Example #1', { tag: ['@negative'] }, async ({ Given, When, Then, loginPage }) => { 
      await Given('I enter invalid "invalid@mail.com" or "wrongPass"', null, { loginPage }); 
      await When('I click the sign in button', null, { loginPage }); 
      await Then('I should see an error message for invalid login', null, { loginPage }); 
    });

  });

  test('Verify UI elements of the login page', { tag: ['@ui'] }, async ({ Then, And, loginPage }) => { 
    await Then('I should see the Email Address input field', null, { loginPage }); 
    await And('I should see the Password input field', null, { loginPage }); 
    await And('I should see the Sign In button', null, { loginPage }); 
    await And('I should see the Forgot Password link', null, { loginPage }); 
    await And('I should see the Register Now link', null, { loginPage }); 
  });

  test('Verify login button is enabled and validate error when fields are empty', { tag: ['@validation'] }, async ({ Given, When, Then, And, homePage, loginPage }) => { 
    await Given('I am on the login page', null, { homePage, loginPage }); 
    await When('I leave the email and password fields empty'); 
    await And('I click the sign in button', null, { loginPage }); 
    await Then('the login button should be enabled', null, { loginPage }); 
    await And('I should see the error message of email and password required', null, { loginPage }); 
  });

  test('Verify password field is masked', { tag: ['@security'] }, async ({ Given, When, Then, homePage, loginPage }) => { 
    await Given('I am on the login page', null, { homePage, loginPage }); 
    await When('I enter a password into the password field', null, { loginPage }); 
    await Then('the password should be masked with dots or asterisks', null, { loginPage }); 
  });

  test.describe('Verify error message when password is empty', () => {

    test('Example #1', { tag: ['@negative'] }, async ({ Given, When, Then, And, homePage, loginPage }) => { 
      await Given('I am on the login page', null, { homePage, loginPage }); 
      await When('I enter a valid email "user@mail.com" and leave the password field empty ""', null, { loginPage }); 
      await And('I click the sign in button', null, { loginPage }); 
      await Then('I should see the error message of login password required', null, { loginPage }); 
    });

  });

  test.describe('Verify error message for invalid email format', () => {

    test('Example #1', { tag: ['@negative'] }, async ({ Given, When, Then, And, homePage, loginPage }) => { 
      await Given('I am on the login page', null, { homePage, loginPage }); 
      await When('I enter an invalid email format "abc123" to login', null, { loginPage }); 
      await And('I click the sign in button', null, { loginPage }); 
      await Then('I should see the error message of email login validation', null, { loginPage }); 
    });

    test('Example #2', { tag: ['@negative'] }, async ({ Given, When, Then, And, homePage, loginPage }) => { 
      await Given('I am on the login page', null, { homePage, loginPage }); 
      await When('I enter an invalid email format "testmail.com" to login', null, { loginPage }); 
      await And('I click the sign in button', null, { loginPage }); 
      await Then('I should see the error message of email login validation', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":14,"pickleLine":19,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I enter valid \"user@premiumbank.com\" and \"Bank@123\"","stepMatchArguments":[{"group":{"start":14,"value":"\"user@premiumbank.com\"","children":[{"start":15,"value":"user@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Bank@123\"","children":[{"start":42,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click the sign in button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see a successful login message","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":29,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I enter invalid \"invalid@mail.com\" or \"wrongPass\"","stepMatchArguments":[{"group":{"start":16,"value":"\"invalid@mail.com\"","children":[{"start":17,"value":"invalid@mail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"wrongPass\"","children":[{"start":39,"value":"wrongPass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click the sign in button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message for invalid login","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":32,"tags":["@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I should see the Email Address input field","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And I should see the Password input field","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And I should see the Sign In button","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And I should see the Forgot Password link","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And I should see the Register Now link","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":40,"tags":["@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I leave the email and password fields empty","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"And I click the sign in button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then the login button should be enabled","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"And I should see the error message of email and password required","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":48,"tags":["@security"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When I enter a password into the password field","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then the password should be masked with dots or asterisks","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":62,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When I enter a valid email \"user@mail.com\" and leave the password field empty \"\"","stepMatchArguments":[{"group":{"start":22,"value":"\"user@mail.com\"","children":[{"start":23,"value":"user@mail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":73,"value":"\"\"","children":[{"start":74,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"And I click the sign in button","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of login password required","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":73,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When I enter an invalid email format \"abc123\" to login","stepMatchArguments":[{"group":{"start":32,"value":"\"abc123\"","children":[{"start":33,"value":"abc123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":70,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"And I click the sign in button","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of email login validation","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":74,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the login link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When I enter an invalid email format \"testmail.com\" to login","stepMatchArguments":[{"group":{"start":32,"value":"\"testmail.com\"","children":[{"start":33,"value":"testmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"And I click the sign in button","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of email login validation","stepMatchArguments":[]}]},
]; // bdd-data-end