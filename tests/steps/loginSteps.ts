import { Given, When, Then, expect } from "../../fixtures/pageFixtures";

/**
 * 🔹 Background Steps
 */

Given("I click on the login link", async ({ homePage }) => {
  await homePage.clickLoginAutomationLink();
});

Then("I should be on the login page", async ({ loginPage }) => {
  await loginPage.waitForPageLoad();
  await loginPage.isLoginHeadingVisible();
});

/**
 * 🔹 Scenario: Verify login with valid credentials
 */
Given(
  "I enter valid {string} and {string}",
  async ({ loginPage }, email: string, password: string) => {
    await loginPage.enterLoginEmailInput(email);
    await loginPage.enterLoginPasswordInput(password);
  }
);

When("I click the sign in button", async ({ loginPage }) => {
  await loginPage.clickSigninBtn();
});

Then("I should see a successful login message", async ({ loginPage }) => {
  await loginPage.isSuccessfulLoginMessageVisible();
});

/**
 * 🔹 Scenario: Verify login with invalid credentials
 */
Given(
  "I enter invalid {string} or {string}",
  async ({ loginPage }, email: string, password: string) => {
    await loginPage.enterLoginEmailInput(email);
    await loginPage.enterLoginPasswordInput(password);
  }
);

Then("I should see an error message for invalid login", async ({ loginPage }) => {
  // Replace with your app’s actual invalid login message
  await expect(loginPage.getLoginErrorMessage()).toBeVisible();
});

/**
 * 🔹 Scenario: Verify UI elements
 */
Then("I should see the Email Address input field", async ({ loginPage }) => {
  await loginPage.isLoginEmailInputVisible();
});

Then("I should see the Password input field", async ({ loginPage }) => {
  await loginPage.isLoginPasswordInputVisible();
});

Then("I should see the Sign In button", async ({ loginPage }) => {
  await loginPage.isSigninBtnVisible();
});

Then("I should see the Forgot Password link", async ({ loginPage }) => {
  await loginPage.isForgetPasswordLinkVisble();
});

Then("I should see the Register Now link", async ({ loginPage }) => {
  await loginPage.isRegisterLinkVisble();
});

/**
 * 🔹 Scenario: Verify empty fields validation
 */
Given("I am on the login page", async ({ homePage, loginPage }) => {
  await homePage.navigateToHomePage();
  await homePage.clickLoginAutomationLink();
  await loginPage.isLoginHeadingVisible();
});

When("I leave the email and password fields empty", async () => {
  // No input needed
});

Then("the login button should be enabled", async ({ loginPage }) => {
  await expect(loginPage.getSigninBtn()).toBeEnabled();
});

Then("I should see the error message of email and password required", async ({ loginPage }) => {
  await expect(loginPage.getEmailAndPasswordErrorMessage()).toBeVisible();
});

/**
 * 🔹 Scenario: Verify password field masking
 */
When("I enter a password into the password field", async ({ loginPage }) => {
  await loginPage.enterLoginPasswordInput("MySecret123");
});

Then(
  "the password should be masked with dots or asterisks",
  async ({ loginPage }) => {
    const isMasked = await loginPage.isPasswordFieldMasked();
    expect(isMasked).toBeTruthy();
  }
);

/**
 * 🔹 Scenario: Verify missing password error
 */
When(
  "I enter a valid email {string} and leave the password field empty {string}",
  async ({ loginPage }, email: string) => {
    await loginPage.enterLoginEmailInput(email);
    // Intentionally do not fill password
  }
);

Then("I should see the error message of login password required", async ({ loginPage }) => {
  await expect(loginPage.getPasswordRequiredErrorMessage()).toBeVisible();
});

/**
 * 🔹 Scenario: Verify invalid email format
 */
When(
  "I enter an invalid email format {string} to login",
  async ({ loginPage }, email: string) => {
    await loginPage.enterLoginEmailInput(email);
  }
);

Then(
  "I should see the error message of email login validation",
  async ({ loginPage }) => {
    // Browser-native validation message check
    const validationMessage = await loginPage.getEmailValidationMessage();
    expect(validationMessage).toContain("Please include an '@' in the email address");
  }
);
