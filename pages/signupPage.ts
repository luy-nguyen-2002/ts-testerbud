import { Locator, Page } from "playwright/test";
import BasePage from "./basePage";

export default class SignupPage extends BasePage {
    // private readonly page: Page;
    //Locators
    private readonly registerHeading: Locator;
    private readonly registerEmailInput: Locator;
    private readonly registerPasswordInput: Locator;
    private readonly registerConfirmPasswordInput: Locator;
    private readonly registerBtn: Locator;
    private readonly signInLink: Locator;
    private readonly backToLogInPageBtn: Locator;
    private readonly emptyEmailErrorMessage: Locator;
    private readonly emptyPasswordErrorMessage: Locator;
    private readonly emptyConfirmPasswordErrorMessage: Locator;
    private readonly passwordNotMatchErrorMessage: Locator;
    private readonly passwordConstraintCharacters: Locator;
    private readonly passwordConstraintUppercase: Locator;
    private readonly passwordConstraintLowercase: Locator;
    private readonly passwordConstraintNumber: Locator;
    private readonly passwordConstraintSpecialCharacter: Locator;
    private readonly passwordConstraintErrorMessage: Locator;
    private readonly successMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.registerHeading = this.page.getByRole('heading', { name: 'Create a New Account' });
        this.registerEmailInput = this.page.getByRole('textbox', { name: 'Email Address' });
        this.registerPasswordInput = this.page.getByRole('textbox', { name: 'Password', exact: true });
        this.registerConfirmPasswordInput = this.page.getByRole('textbox', { name: 'Confirm Password' });
        this.registerBtn = this.page.getByRole('button', { name: 'Register' });
        this.signInLink = this.page.getByRole('link', { name: 'Sign in' });
        this.backToLogInPageBtn = this.page.getByRole('button', { name: 'Back To Login Page ➡️' });
        this.emptyEmailErrorMessage = this.page.getByText('Email is required');
        this.emptyPasswordErrorMessage = this.page.getByText('Password is required');
        this.emptyConfirmPasswordErrorMessage = this.page.getByText('Please confirm your password');
        this.passwordNotMatchErrorMessage = this.page.getByText('Passwords do not match');
        this.passwordConstraintCharacters = this.page.getByText('At least 8 characters');
        this.passwordConstraintUppercase = this.page.getByText('At least one uppercase letter');
        this.passwordConstraintLowercase = this.page.getByText('At least one lowercase letter');
        this.passwordConstraintNumber = this.page.getByText('At least one number (0-9)');
        this.passwordConstraintSpecialCharacter = this.page.getByText('At least one special');
        this.passwordConstraintErrorMessage = this.page.getByText('Password does not meet the');
        this.successMessage = this.page.getByText('Registration SuccessfulYour');

    }

    async getEmailValidationMessage(): Promise<string> {
        // Try to locate by name or aria-label — adjust according to your actual HTML
        const emailInput = this.registerEmailInput;

        // Evaluate the browser’s native validation message
        const message = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
        return message;
    }

    // 🔹 Getter methods for all elements
    getRegisterHeading(): Locator {
        return this.registerHeading;
    }

    getRegisterEmailInput(): Locator {
        return this.registerEmailInput;
    }

    getRegisterPasswordInput(): Locator {
        return this.registerPasswordInput;
    }

    getRegisterConfirmPasswordInput(): Locator {
        return this.registerConfirmPasswordInput;
    }

    getRegisterBtn(): Locator {
        return this.registerBtn;
    }

    getSignInLink(): Locator {
        return this.signInLink;
    }

    getBackToLogInPageBtn(): Locator {
        return this.backToLogInPageBtn;
    }

    getEmptyEmailErrorMessage(): Locator {
        return this.emptyEmailErrorMessage;
    }

    getEmptyPasswordErrorMessage(): Locator {
        return this.emptyPasswordErrorMessage;
    }

    getEmptyConfirmPasswordErrorMessage(): Locator {
        return this.emptyConfirmPasswordErrorMessage;
    }

    getPasswordNotMatchErrorMessage(): Locator {
        return this.passwordNotMatchErrorMessage;
    }

    getPasswordConstraintCharacters(): Locator {
        return this.passwordConstraintCharacters;
    }

    getPasswordConstraintUppercase(): Locator {
        return this.passwordConstraintUppercase;
    }

    getPasswordConstraintLowercase(): Locator {
        return this.passwordConstraintLowercase;
    }

    getPasswordConstraintNumber(): Locator {
        return this.passwordConstraintNumber;
    }

    getPasswordConstraintSpecialCharacter(): Locator {
        return this.passwordConstraintSpecialCharacter;
    }

    getPasswordConstraintErrorMessage(): Locator {
        return this.passwordConstraintErrorMessage;
    }

    getSuccessMessage(): Locator {
        return this.successMessage;
    }

    //enter
    async enterRegisterEmailInput(email: string): Promise<void> {
        await this.registerEmailInput.fill(email);
    }

    async enterRegisterPasswordInput(password: string): Promise<void> {
        await this.registerPasswordInput.fill(password);
    }

    async enterRegisterConfirmPasswordInput(confirmPassword: string): Promise<void> {
        await this.registerConfirmPasswordInput.fill(confirmPassword);
    }

    //click 
    async clickRegisterBtn(): Promise<void> {
        await this.registerBtn.click();
    }

    async clickSignInLink(): Promise<void> {
        await this.signInLink.click();
    }
}
