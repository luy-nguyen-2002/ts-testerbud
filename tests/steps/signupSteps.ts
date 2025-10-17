import { expect, Given, Then, When } from "../../fixtures/pageFixtures";
/**
 * 🔹 Background Steps
 */
When("I click on the register link", async ({ homePage, loginPage }) => {
    await homePage.clickLoginAutomationLink();
    await loginPage.clickRegisterLink();
});

Then("I should be on the registration page", async ({ signupPage }) => {
    await signupPage.waitForPageLoad();
    await expect(signupPage.getRegisterHeading()).toBeVisible();
    await expect(signupPage.getRegisterEmailInput()).toBeVisible();
    await expect(signupPage.getRegisterPasswordInput()).toBeVisible();
    await expect(signupPage.getRegisterConfirmPasswordInput()).toBeVisible();
    await expect(signupPage.getRegisterBtn()).toBeVisible();
});

/**
 * 🔹 Scenario: Verify successful user registration
 **/
Given(
    "I enter valid {string} and {string} and {string}",
    async ({ signupPage }, email: string, password: string, confirmPassword: string) => {
        await signupPage.enterRegisterEmailInput(email);
        await signupPage.enterRegisterPasswordInput(password);
        await signupPage.enterRegisterConfirmPasswordInput(confirmPassword);
    }
);

When(
    "I click the register button",
    async ({ signupPage }) => {
        await signupPage.clickRegisterBtn();
    }
);

Then(
    "I should see a successful registration message",
    async ({ signupPage }) => {
        await expect(signupPage.getSuccessMessage()).toBeVisible();
    }
);

//  Scenario Outline: Verify error message when email is empty
Given(
    "I leave email field empty and enter the password field {string} and confirm password field {string}",
    async ({ signupPage }, password: string, confirmPassword: string) => {
        await signupPage.enterRegisterPasswordInput(password);
        await signupPage.enterRegisterConfirmPasswordInput(confirmPassword);
    }
);

Then(
    "I should see the error message of email required",
    async ({ signupPage }) => {
        await expect(signupPage.getEmptyEmailErrorMessage()).toBeVisible();
    }
)

//scenario: Verify error message when password is empty
Given(
    "I leave password field empty and enter the email field {string} and confirm password field {string}",
    async ({ signupPage }, email: string, confirmPassword: string) => {
        await signupPage.enterRegisterEmailInput(email);
        await signupPage.enterRegisterConfirmPasswordInput(confirmPassword);
    }
)

Then(
    "I should see the error message of signup password required",
    async ({ signupPage }) => {
        await expect(signupPage.getEmptyPasswordErrorMessage()).toBeVisible();
    }
)

//Scenario: Verify error message when confirm password is empty
Given(
    "I leave confirm password field empty and enter the email field {string} and password field {string}",
    async ({ signupPage }, email: string, password: string) => {
        await signupPage.enterRegisterEmailInput(email);
        await signupPage.enterRegisterPasswordInput(password);
    }
);

Then(
    "I should see the error message of confirm password required",
    async ({ signupPage }) => {
        await expect(signupPage.getEmptyConfirmPasswordErrorMessage()).toBeVisible();
    }
)

//scenario: Verify error message when password and confirm password do not match
Given(
    "I enter the email field {string} and password field {string} and mismatched confirm password field {string}",
    async ({ signupPage }, email: string, password: string, confirmPassword: string) => {
        await signupPage.enterRegisterEmailInput(email);
        await signupPage.enterRegisterPasswordInput(password);
        await signupPage.enterRegisterConfirmPasswordInput(confirmPassword);
    }
)

Then(
    "I should see the error message of password and confirm password do not match",
    async ({ signupPage }) => {
        await expect(signupPage.getPasswordNotMatchErrorMessage()).toBeVisible();
    }
)

//scenario:Verify error message for invalid email format
Given(
    "I enter an invalid email format {string} to signup",
    async ({ signupPage }, email: string) => {
        await signupPage.enterRegisterEmailInput(email);
    }
)

Then(
    "I should see the error message of email signup validation",
    async ({ signupPage }) => {
        const validationMessage = await signupPage.getEmailValidationMessage();
        expect(validationMessage).toContain("Please include an '@' in the email address");
    }
)

//scenario: Validate error message when password is weak
Given(
    "I enter a valid email {string} and enter a weak password {string} and enter a weak confirm password {string}",
    async ({ signupPage }, email: string, password: string, confirmPassword: string) => {
        await signupPage.enterRegisterEmailInput(email);
        await signupPage.enterRegisterPasswordInput(password);
        await signupPage.enterRegisterConfirmPasswordInput(confirmPassword);
    }
)
Then(
    "I should see the error message of missing password requirements",
    async ({ signupPage }) => {
        await expect(signupPage.getPasswordConstraintErrorMessage()).toBeVisible();
    }
)


//scenario: Validate password strength indicators when weak password is entered
Given(
    "I enter a weak password {string}",
    async ({ signupPage }, password: string) => {
        await signupPage.enterRegisterPasswordInput(password);
    }
)

Then(
    "The system should mark green line for criteria that are met",
    async ({ signupPage }) => {
        // For example: weak password "test123" meets lowercase + number
        const lowercaseColor = await signupPage
            .getPasswordConstraintLowercase()
            .evaluate((el) => globalThis.window.getComputedStyle(el).color);
        const numberColor = await signupPage
            .getPasswordConstraintNumber()
            .evaluate((el) => globalThis.window.getComputedStyle(el).color);

        // Expect that these 2 criteria are green (not red)
        expect(lowercaseColor).toBe("rgb(25, 135, 84)");
        expect(numberColor).toBe("rgb(25, 135, 84)");
    }
);

Then(
    "All criteria lines should not be green",
    async ({ signupPage }) => {
        const criteria = [
            signupPage.getPasswordConstraintCharacters(),
            signupPage.getPasswordConstraintUppercase(),
            signupPage.getPasswordConstraintLowercase(),
            signupPage.getPasswordConstraintNumber(),
            signupPage.getPasswordConstraintSpecialCharacter(),
        ];

        let greenCount = 0;

        for (const item of criteria) {
            const color = await item.evaluate(
                (el) => globalThis.window.getComputedStyle(el).color
            );
            if (color !== "rgb(220, 53, 69)") {
                // Anything not red is considered green/met
                greenCount++;
            }
        }

        // Assert that not all criteria lines are green (since password is weak)
        expect(greenCount).toBeLessThan(criteria.length);
    }
)

//scenario: Verify all password validation lines turn green for a strong password
Given(
    "I enter a strong password {string}",
    async ({ signupPage }, password: string) => {
        await signupPage.enterRegisterPasswordInput(password);
    }
)

Then(
    "All password strength validation lines should be green",
    async ({ signupPage }) => {
        // Collect all password constraint elements
        const criteria = [
            signupPage.getPasswordConstraintCharacters(),
            signupPage.getPasswordConstraintUppercase(),
            signupPage.getPasswordConstraintLowercase(),
            signupPage.getPasswordConstraintNumber(),
            signupPage.getPasswordConstraintSpecialCharacter(),
        ];

        // Define the green RGB value from your design (#198754)
        const expectedGreen = "rgb(25, 135, 84)";

        // Loop through all criteria and assert they are all green
        for (const item of criteria) {
            const color = await item.evaluate(
                (el) => globalThis.window.getComputedStyle(el).color
            );
            expect(color).toBe(
                expectedGreen,
            );
        }
    }
)


//scenario: Validate clicking "Sign in" link successfully navigates user to Login Page
Given(
    "I click on the sign in link",
    async ({ signupPage }) => {
        await signupPage.clickSignInLink();
    }
)
Then(
    "I should be navigated to the login page",
    async ({ loginPage }) => {
        await loginPage.isLoginHeadingVisible();
    }
)