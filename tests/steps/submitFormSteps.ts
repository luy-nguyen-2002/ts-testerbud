import { expect, Given, Then, When } from "../../fixtures/pageFixtures";

When(
    "I click on the web automation form link",
    async ({ homePage, formPage }) => {
        await homePage.clickFormAutomationLink();
        await formPage.waitForPageLoad();
    }
)
Then(
    "I should be on the web automation form page",
    async ({ formPage }) => {
        await expect(formPage.getFormPageHeading()).toBeVisible();
        await expect(formPage.getSelectCountryDropdown()).toBeVisible();
        await expect(formPage.getFirstNameInput()).toBeVisible();
        await expect(formPage.getLastNameInput()).toBeVisible();
        await expect(formPage.getSelectTitleDropdown()).toBeVisible();
        await expect(formPage.getSelectDateOfBirthInput()).toBeVisible();
        await expect(formPage.getDateOfJoiningInput()).toBeVisible();
        await expect(formPage.getEmailInput()).toBeVisible();
        await expect(formPage.getSelectPhoneCodeDropdown()).toBeVisible();
        await expect(formPage.getPhoneNumberInput()).toBeVisible();
        await expect(formPage.getEmailCommunicationRadioBtn()).toBeVisible();
        await expect(formPage.getPhoneCommunicationRadioBtn()).toBeVisible();
        await expect(formPage.getSubmitBtn()).toBeVisible();
        await expect(formPage.getClearBtn()).toBeVisible();
    }
)

//scenario: Validate successful form submission with valid data
Given(
    "I select valid country {string} in the web automation form page",
    async ({ formPage }, country: string) => {
        await formPage.selectCountry(country);
    }
)
Given(
    "I select valid title {string} in the web automation form page",
    async ({ formPage }, title: string) => {
        await formPage.selectTitle(title);
    }
)
Given(
    "I enter valid first name {string} in the web automation form page",
    async ({ formPage }, firstname: string) => {
        await formPage.enterFirstName(firstname);
    }
)
Given(
    "I enter valid last name {string} in the web automation form page",
    async ({ formPage }, lastname: string) => {
        await formPage.enterLastName(lastname);
    }
)
Given(
    "I select valid date of birth {string} in the web automation form page",
    async ({ formPage }, dob: string) => {
        await formPage.enterDateOfBirth(dob);
    }
)
Given(
    "I enter valid date of joining {string} in the web automation form page",
    async ({ formPage }, doj: string) => {
        await formPage.enterDateOfJoining(doj);
    }
)
Given(
    "I enter valid email {string} in the web automation form page",
    async ({ formPage }, email: string) => {
        await formPage.enterEmail(email);
    }
)
Given(
    "I select valid phone code {string} in the web automation form page",
    async ({ formPage }, phoneCode: string) => {
        await formPage.selectPhoneCode(phoneCode);
    }
)
Given(
    "I enter valid phone number {string} in the web automation form page",
    async ({ formPage }, phoneNumber: string) => {
        await formPage.enterPhoneNumber(phoneNumber);
    }
)
Given(
    "I select valid radio button {string} in the web automation form page",
    async ({ formPage }, radioTitle: string) => {
        await formPage.selectCommunicationRadio(radioTitle);
    }
)
When(
    "I click submit button in the web automation form page",
    async ({ formPage }) => {
        await formPage.clickSubmitButton();
    }
)
Then(
    "I should see a successful form submission message",
    async ({ formPage }) => {
        await expect(formPage.getSuccessMessage()).toBeVisible();
        await expect(formPage.getGoBackToFormLink()).toBeVisible();
        await expect(formPage.getGoBackToFormLink()).toBeEnabled();
        // await expect(formPage.getSuccessMessage()).toHaveText("Form submitted successfully!");
        // await expect(formPage.getGoBackToFormLink()).toHaveText("Go back to form");
    }
)

// ✅ Negative Scenarios
Given(
    "I enter invalid email {string} in the web automation form page",
    async ({ formPage }, email: string) => {
        await formPage.enterEmail(email);
    }
)
Then(
    "I should see the error message of invalid email format in the web automation form page",
    async ({ formPage }) => {
        const validationMessage = await formPage.getEmailValidationMessage();
        expect(validationMessage).toContain("Please include an '@' in the email address");
    }
)

Given(
    "I enter invalid date of joining {string} in the web automation form page",
    async ({ formPage }, doj: string) => {
        await formPage.enterDateOfJoining(doj);
    }
)
Then(
    "I should see the error message of invalid date of joining format in the web automation form page",
    async ({ formPage }) => {
        await expect(formPage.getDojFieldFormatError()).toBeVisible();
        // await expect(formPage.getDojFieldFormatError()).toHaveText("Please enter date in YYYY-MM-DD format");
    }
)

Given(
    "I leave all input fields empty in the web automation form page",
    async ({ formPage }) => {
        // Intentionally left blank to simulate empty fields
    }
)

Then(
    "I should see the error message of all required fields in the web automation form page",
    async ({ formPage }) => {
        await expect(formPage.getCommunicationFieldBlankError()).toBeVisible();
        // await expect(formPage.getCommunicationFieldBlankError()).toHaveText("Please select a communication method");
        await expect(formPage.getTitleFieldBlankError()).toBeVisible();
        await expect(formPage.getFirstNameFieldBlankError()).toBeVisible();
        await expect(formPage.getLastNameFieldBlankError()).toBeVisible();
        await expect(formPage.getDobFieldBlankError()).toBeVisible();
        await expect(formPage.getDojFieldBlankError()).toBeVisible();
        await expect(formPage.getEmailFieldBlankError()).toBeVisible();
        await expect(formPage.getPhoneFieldBlankError()).toBeVisible();
        await expect(formPage.getCountryFieldBlankError()).toBeVisible();
        await expect(formPage.getTitleFieldBlankError()).toBeVisible();        
    }
)

When(
    "I click clear button in the web automation form page",
    async ({ formPage }) => {
        await formPage.clickClearButton();
    }
)
Then(
    "All input fields should be cleared in the web automation form page",
    async ({ formPage }) => {
        await expect(formPage.getFirstNameInput()).toHaveValue("");
        await expect(formPage.getLastNameInput()).toHaveValue("");
        await expect(formPage.getSelectDateOfBirthInput()).toHaveValue("");
        await expect(formPage.getDateOfJoiningInput()).toHaveValue("");
        await expect(formPage.getEmailInput()).toHaveValue("");
        await expect(formPage.getPhoneNumberInput()).toHaveValue("");
        await expect(formPage.getSelectCountryDropdown()).toHaveValue("");
        await expect(formPage.getSelectTitleDropdown()).toHaveValue("");
        await expect(formPage.getEmailCommunicationRadioBtn()).not.toBeChecked();
        await expect(formPage.getPhoneCommunicationRadioBtn()).not.toBeChecked();
    }
)
