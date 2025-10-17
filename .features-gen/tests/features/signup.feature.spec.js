// Generated from: tests\features\signup.feature
import { test } from "../../../fixtures/pageFixtures.ts";

test.describe('Signup Functionality', () => {

  test.beforeEach('Background', async ({ Given, When, Then, homePage, loginPage, signupPage }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the homepage', null, { homePage }); 
    await When('I click on the register link', null, { homePage, loginPage }); 
    await Then('I should be on the registration page', null, { signupPage }); 
  });
  
  test.describe('Verify successful user registration', () => {

    test('Example #1', { tag: ['@smoke', '@positive'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter valid "user@premiumbank.com" and "Bank@123" and "Bank@123"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see a successful registration message', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@smoke', '@positive'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter valid "user1@premiumbank.com" and "Bank@456" and "Bank@456"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see a successful registration message', null, { signupPage }); 
    });

  });

  test.describe('Verify error message when email is empty', () => {

    test('Example #1', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I leave email field empty and enter the password field "Bank@123" and confirm password field "Bank@123"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of email required', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I leave email field empty and enter the password field "Bank@456" and confirm password field "Bank@456"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of email required', null, { signupPage }); 
    });

  });

  test.describe('Verify error message when password is empty', () => {

    test('Example #1', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I leave password field empty and enter the email field "user@premiumbank.com" and confirm password field "Bank@123"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of signup password required', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I leave password field empty and enter the email field "use2@premiumbank.com" and confirm password field "Bank@456"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of signup password required', null, { signupPage }); 
    });

  });

  test.describe('Verify error message when confirm password is empty', () => {

    test('Example #1', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I leave confirm password field empty and enter the email field "user@premiumbank.com" and password field "Bank@123"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of confirm password required', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I leave confirm password field empty and enter the email field "use2@premiumbank.com" and password field "Bank@456"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of confirm password required', null, { signupPage }); 
    });

  });

  test.describe('Verify error message when password and confirm password do not match', () => {

    test('Example #1', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter the email field "user@premiumbank.com" and password field "Bank@123" and mismatched confirm password field "Bank@321"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of password and confirm password do not match', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter the email field "use2@premiumbank.com" and password field "Bank@456" and mismatched confirm password field "Bank@654"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of password and confirm password do not match', null, { signupPage }); 
    });

  });

  test.describe('Verify error message for invalid email format', () => {

    test('Example #1', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter an invalid email format "abc123" to signup', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of email signup validation', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@negative', '@validation'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter an invalid email format "testmail.com" to signup', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of email signup validation', null, { signupPage }); 
    });

  });

  test.describe('Validate password strength indicators when weak password is entered', () => {

    test('Example #1', { tag: ['@validation', '@security', '@ui'] }, async ({ Given, Then, And, signupPage }) => { 
      await Given('I enter a weak password "test123"', null, { signupPage }); 
      await Then('The system should mark green line for criteria that are met', null, { signupPage }); 
      await And('All criteria lines should not be green', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@validation', '@security', '@ui'] }, async ({ Given, Then, And, signupPage }) => { 
      await Given('I enter a weak password "test940"', null, { signupPage }); 
      await Then('The system should mark green line for criteria that are met', null, { signupPage }); 
      await And('All criteria lines should not be green', null, { signupPage }); 
    });

  });

  test.describe('Validate error message when password is weak', () => {

    test('Example #1', { tag: ['@validation', '@security'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter a valid email "user@premiumbank.com" and enter a weak password "test123" and enter a weak confirm password "test123"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of missing password requirements', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@validation', '@security'] }, async ({ Given, When, Then, signupPage }) => { 
      await Given('I enter a valid email "use2@premiumbank.com" and enter a weak password "test940" and enter a weak confirm password "test940"', null, { signupPage }); 
      await When('I click the register button', null, { signupPage }); 
      await Then('I should see the error message of missing password requirements', null, { signupPage }); 
    });

  });

  test.describe('Verify all password validation lines turn green for a strong password', () => {

    test('Example #1', { tag: ['@validation', '@security', '@ui'] }, async ({ Given, Then, signupPage }) => { 
      await Given('I enter a strong password "Bank@1234"', null, { signupPage }); 
      await Then('All password strength validation lines should be green', null, { signupPage }); 
    });

    test('Example #2', { tag: ['@validation', '@security', '@ui'] }, async ({ Given, Then, signupPage }) => { 
      await Given('I enter a strong password "Bank@1234"', null, { signupPage }); 
      await Then('All password strength validation lines should be green', null, { signupPage }); 
    });

  });

  test('Validate clicking "Sign in" link successfully navigates user to Login Page', { tag: ['@ui'] }, async ({ Given, Then, loginPage, signupPage }) => { 
    await Given('I click on the sign in link', null, { signupPage }); 
    await Then('I should be navigated to the login page', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\signup.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":14,"pickleLine":19,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I enter valid \"user@premiumbank.com\" and \"Bank@123\" and \"Bank@123\"","stepMatchArguments":[{"group":{"start":14,"value":"\"user@premiumbank.com\"","children":[{"start":15,"value":"user@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Bank@123\"","children":[{"start":42,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"Bank@123\"","children":[{"start":57,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see a successful registration message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":20,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I enter valid \"user1@premiumbank.com\" and \"Bank@456\" and \"Bank@456\"","stepMatchArguments":[{"group":{"start":14,"value":"\"user1@premiumbank.com\"","children":[{"start":15,"value":"user1@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"Bank@456\"","children":[{"start":43,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":57,"value":"\"Bank@456\"","children":[{"start":58,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see a successful registration message","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":30,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I leave email field empty and enter the password field \"Bank@123\" and confirm password field \"Bank@123\"","stepMatchArguments":[{"group":{"start":55,"value":"\"Bank@123\"","children":[{"start":56,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":93,"value":"\"Bank@123\"","children":[{"start":94,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of email required","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":31,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I leave email field empty and enter the password field \"Bank@456\" and confirm password field \"Bank@456\"","stepMatchArguments":[{"group":{"start":55,"value":"\"Bank@456\"","children":[{"start":56,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":93,"value":"\"Bank@456\"","children":[{"start":94,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of email required","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":41,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I leave password field empty and enter the email field \"user@premiumbank.com\" and confirm password field \"Bank@123\"","stepMatchArguments":[{"group":{"start":55,"value":"\"user@premiumbank.com\"","children":[{"start":56,"value":"user@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":105,"value":"\"Bank@123\"","children":[{"start":106,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of signup password required","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":42,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I leave password field empty and enter the email field \"use2@premiumbank.com\" and confirm password field \"Bank@456\"","stepMatchArguments":[{"group":{"start":55,"value":"\"use2@premiumbank.com\"","children":[{"start":56,"value":"use2@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":105,"value":"\"Bank@456\"","children":[{"start":106,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of signup password required","stepMatchArguments":[]}]},
  {"pwTestLine":62,"pickleLine":52,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given I leave confirm password field empty and enter the email field \"user@premiumbank.com\" and password field \"Bank@123\"","stepMatchArguments":[{"group":{"start":63,"value":"\"user@premiumbank.com\"","children":[{"start":64,"value":"user@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":105,"value":"\"Bank@123\"","children":[{"start":106,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of confirm password required","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":53,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given I leave confirm password field empty and enter the email field \"use2@premiumbank.com\" and password field \"Bank@456\"","stepMatchArguments":[{"group":{"start":63,"value":"\"use2@premiumbank.com\"","children":[{"start":64,"value":"use2@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":105,"value":"\"Bank@456\"","children":[{"start":106,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":70,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of confirm password required","stepMatchArguments":[]}]},
  {"pwTestLine":78,"pickleLine":63,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given I enter the email field \"user@premiumbank.com\" and password field \"Bank@123\" and mismatched confirm password field \"Bank@321\"","stepMatchArguments":[{"group":{"start":24,"value":"\"user@premiumbank.com\"","children":[{"start":25,"value":"user@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":66,"value":"\"Bank@123\"","children":[{"start":67,"value":"Bank@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":115,"value":"\"Bank@321\"","children":[{"start":116,"value":"Bank@321","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":80,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of password and confirm password do not match","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":64,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given I enter the email field \"use2@premiumbank.com\" and password field \"Bank@456\" and mismatched confirm password field \"Bank@654\"","stepMatchArguments":[{"group":{"start":24,"value":"\"use2@premiumbank.com\"","children":[{"start":25,"value":"use2@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":66,"value":"\"Bank@456\"","children":[{"start":67,"value":"Bank@456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":115,"value":"\"Bank@654\"","children":[{"start":116,"value":"Bank@654","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":86,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of password and confirm password do not match","stepMatchArguments":[]}]},
  {"pwTestLine":94,"pickleLine":74,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":68,"keywordType":"Context","textWithKeyword":"Given I enter an invalid email format \"abc123\" to signup","stepMatchArguments":[{"group":{"start":32,"value":"\"abc123\"","children":[{"start":33,"value":"abc123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":96,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of email signup validation","stepMatchArguments":[]}]},
  {"pwTestLine":100,"pickleLine":75,"tags":["@negative","@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":68,"keywordType":"Context","textWithKeyword":"Given I enter an invalid email format \"testmail.com\" to signup","stepMatchArguments":[{"group":{"start":32,"value":"\"testmail.com\"","children":[{"start":33,"value":"testmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":102,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of email signup validation","stepMatchArguments":[]}]},
  {"pwTestLine":110,"pickleLine":85,"tags":["@validation","@security","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"Given I enter a weak password \"test123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"test123\"","children":[{"start":25,"value":"test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":112,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then The system should mark green line for criteria that are met","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"And All criteria lines should not be green","stepMatchArguments":[]}]},
  {"pwTestLine":116,"pickleLine":86,"tags":["@validation","@security","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"Given I enter a weak password \"test940\"","stepMatchArguments":[{"group":{"start":24,"value":"\"test940\"","children":[{"start":25,"value":"test940","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":118,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then The system should mark green line for criteria that are met","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"And All criteria lines should not be green","stepMatchArguments":[]}]},
  {"pwTestLine":126,"pickleLine":96,"tags":["@validation","@security"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given I enter a valid email \"user@premiumbank.com\" and enter a weak password \"test123\" and enter a weak confirm password \"test123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"user@premiumbank.com\"","children":[{"start":23,"value":"user@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":71,"value":"\"test123\"","children":[{"start":72,"value":"test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":115,"value":"\"test123\"","children":[{"start":116,"value":"test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":128,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of missing password requirements","stepMatchArguments":[]}]},
  {"pwTestLine":132,"pickleLine":97,"tags":["@validation","@security"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given I enter a valid email \"use2@premiumbank.com\" and enter a weak password \"test940\" and enter a weak confirm password \"test940\"","stepMatchArguments":[{"group":{"start":22,"value":"\"use2@premiumbank.com\"","children":[{"start":23,"value":"use2@premiumbank.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":71,"value":"\"test940\"","children":[{"start":72,"value":"test940","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":115,"value":"\"test940\"","children":[{"start":116,"value":"test940","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When I click the register button","stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message of missing password requirements","stepMatchArguments":[]}]},
  {"pwTestLine":142,"pickleLine":106,"tags":["@validation","@security","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"Given I enter a strong password \"Bank@1234\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Bank@1234\"","children":[{"start":27,"value":"Bank@1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then All password strength validation lines should be green","stepMatchArguments":[]}]},
  {"pwTestLine":147,"pickleLine":107,"tags":["@validation","@security","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"Given I enter a strong password \"Bank@1234\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Bank@1234\"","children":[{"start":27,"value":"Bank@1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":149,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then All password strength validation lines should be green","stepMatchArguments":[]}]},
  {"pwTestLine":154,"pickleLine":110,"tags":["@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the register link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be on the registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":111,"keywordType":"Context","textWithKeyword":"Given I click on the sign in link","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the login page","stepMatchArguments":[]}]},
]; // bdd-data-end