import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class FormPage extends BasePage {
    // Locators
    private readonly formPageHeading: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly selectCountryDropdown: Locator;
    private readonly selectTitleDropdown: Locator;
    private readonly selectDateOfBirthInput: Locator;
    private readonly dateOfJoiningInput: Locator;
    private readonly emailInput: Locator;
    private readonly selectPhoneCodeDropdown: Locator;
    private readonly phoneNumberInput: Locator;
    private readonly emailCommunicationRadioBtn: Locator;
    private readonly phoneCommunicationRadioBtn: Locator;
    private readonly submitBtn: Locator;
    private readonly clearBtn: Locator;
    private readonly countryFieldBlankError: Locator;
    private readonly titleFieldBlankError: Locator;
    private readonly dobFieldBlankError: Locator;
    private readonly dojFieldBlankError: Locator;
    private readonly dojFieldFormatError: Locator;
    private readonly emailFieldBlankError: Locator;
    private readonly phoneFieldBlankError: Locator;
    private readonly firstNameFieldBlankError: Locator;
    private readonly lastNameFieldBlankError: Locator;
    private readonly communicationFieldBlankError: Locator;
    private readonly successMessage: Locator;
    private readonly goBackToFormLink: Locator;

    constructor(page: Page) {
        super(page);

        // Initializing locators
        this.formPageHeading = this.page.getByRole("heading", { name: "Automate Web Forms" });
        this.selectCountryDropdown = this.page.getByRole("combobox").first();
        this.selectTitleDropdown = this.page.getByRole("combobox").nth(1);
        this.firstNameInput = this.page.getByRole("textbox").first();
        this.lastNameInput = this.page.getByRole("textbox").nth(1);
        this.selectDateOfBirthInput = this.page.getByRole("textbox", { name: "YYYY-MM-DD" });
        this.dateOfJoiningInput = this.page.getByRole("textbox", { name: "dd/mm/yyyy" });
        this.emailInput = this.page.locator('input[type="email"]');
        this.selectPhoneCodeDropdown = this.page.getByRole("combobox").nth(2);
        this.phoneNumberInput = this.page.locator('input[type="tel"]');
        this.emailCommunicationRadioBtn = this.page.getByRole("radio").first();
        this.phoneCommunicationRadioBtn = this.page.getByRole("radio").nth(1);
        this.submitBtn = this.page.getByRole("button", { name: "Submit" });
        this.clearBtn = this.page.getByRole("button", { name: "Clear" });

        // Error messages
        this.countryFieldBlankError = this.page.getByText("Country of Residence is");
        this.titleFieldBlankError = this.page.getByText("Title is required");
        this.firstNameFieldBlankError = this.page.getByText("First Name is required");
        this.lastNameFieldBlankError = this.page.getByText("Last Name is required");
        this.dobFieldBlankError = this.page.getByText("Date of Birth is required");
        this.dojFieldBlankError = this.page.getByText("Date of Joining is required (");
        this.emailFieldBlankError = this.page.getByText("Email Address is required");
        this.phoneFieldBlankError = this.page.getByText("Phone Number is required");
        this.communicationFieldBlankError = this.page.getByText("Please select a Communication");
        this.dojFieldFormatError = this.page.getByText("Date of Joining format should");

        // Success message and navigation
        this.successMessage = this.page.getByText("Details Successfully Added!");
        this.goBackToFormLink = this.page.getByRole("button", { name: "Go Back to Form" });
    }

    // ✅ Getter Methods
    getFormPageHeading() { return this.formPageHeading; }
    getFirstNameInput() { return this.firstNameInput; }
    getLastNameInput() { return this.lastNameInput; }
    getSelectCountryDropdown() { return this.selectCountryDropdown; }
    getSelectTitleDropdown() { return this.selectTitleDropdown; }
    getSelectDateOfBirthInput() { return this.selectDateOfBirthInput; }
    getDateOfJoiningInput() { return this.dateOfJoiningInput; }
    getEmailInput() { return this.emailInput; }
    getSelectPhoneCodeDropdown() { return this.selectPhoneCodeDropdown; }
    getPhoneNumberInput() { return this.phoneNumberInput; }
    getEmailCommunicationRadioBtn() { return this.emailCommunicationRadioBtn; }
    getPhoneCommunicationRadioBtn() { return this.phoneCommunicationRadioBtn; }
    getSubmitBtn() { return this.submitBtn; }
    getClearBtn() { return this.clearBtn; }
    getCountryFieldBlankError() { return this.countryFieldBlankError; }
    getTitleFieldBlankError() { return this.titleFieldBlankError; }
    getDobFieldBlankError() { return this.dobFieldBlankError; }
    getDojFieldBlankError() { return this.dojFieldBlankError; }
    getDojFieldFormatError() { return this.dojFieldFormatError; }
    getEmailFieldBlankError() { return this.emailFieldBlankError; }
    getPhoneFieldBlankError() { return this.phoneFieldBlankError; }
    getFirstNameFieldBlankError() { return this.firstNameFieldBlankError; }
    getLastNameFieldBlankError() { return this.lastNameFieldBlankError; }
    getCommunicationFieldBlankError() { return this.communicationFieldBlankError; }
    getSuccessMessage() { return this.successMessage; }
    getGoBackToFormLink() { return this.goBackToFormLink; }

    // ✅ Action Methods
    async selectCountry(country: string) {
        await this.selectCountryDropdown.selectOption({ label: country });
    }

    async selectTitle(title: string) {
        await this.selectTitleDropdown.selectOption({ label: title });
    }
    async enterFirstName(firstname: string) {
        await this.firstNameInput.fill(firstname);
    }
    async enterLastName(lastname: string) {
        await this.lastNameInput.fill(lastname);
    }
    async enterDateOfBirth(dob: string) {
        await this.selectDateOfBirthInput.fill(dob);
    }
    async enterDateOfJoining(doj: string) {
        await this.dateOfJoiningInput.fill(doj);
    }
    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }
    async selectPhoneCode(phoneCode: string) {
        await this.selectPhoneCodeDropdown.selectOption({ label: phoneCode });
    }
    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneNumberInput.fill(phoneNumber);
    }
    async selectCommunicationRadio(radioTitle: string) {
        if (radioTitle.toLowerCase() === 'email') {
            await this.emailCommunicationRadioBtn.check();
        } else if (radioTitle.toLowerCase() === 'phone') {
            await this.phoneCommunicationRadioBtn.check();
        }
    }
    async clickSubmitButton() {
        await this.submitBtn.click();
    }
    async clickClearButton() {
        await this.clearBtn.click();
    }
    async clickGoBackToFormLink() {
        await this.goBackToFormLink.click();
    }

    async getEmailValidationMessage(): Promise<string> {
        // Try to locate by name or aria-label — adjust according to your actual HTML
        const emailInput = this.emailInput;

        // Evaluate the browser’s native validation message
        const message = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
        return message;
    }
}
