import { expect, Locator, Page } from "playwright/test";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    // private readonly page: Page;
    //Locators
    private readonly loginHeading: Locator;
    private readonly loginEmailInput: Locator;
    private readonly loginPasswordInput: Locator;
    private readonly loginRememberMeCheckbox: Locator;
    private readonly forgetPasswordLink: Locator;
    private readonly signinBtn: Locator;
    private readonly registerLink: Locator;
    private readonly successfulLoginMessage: Locator;
    private readonly loginErrorMessage: Locator;
    private readonly emailRequiredErrorMessage: Locator;
    private readonly passwordRequiredErrorMessage: Locator;
    private readonly emailAndPasswordErrorMessage: Locator;
    constructor(page: Page) {
        super(page);
        this.loginHeading = this.page.getByRole('heading', { name: 'Login to Your Practice Account' });
        this.loginEmailInput = this.page.getByRole('textbox', { name: 'Email Address' });
        this.loginPasswordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginRememberMeCheckbox = this.page.getByRole('checkbox', { name: 'Remember me' });
        this.forgetPasswordLink = this.page.getByRole('link', { name: 'Forgot password?' });
        this.signinBtn = this.page.getByRole('button', { name: 'Sign in' });
        this.registerLink = this.page.getByRole('link', { name: 'Register now' });
        this.successfulLoginMessage = this.page.getByText('Login Successful! Welcome to');
        this.emailRequiredErrorMessage = this.page.getByText('Email is required');
        this.passwordRequiredErrorMessage = this.page.getByText('Password is required');
        this.emailAndPasswordErrorMessage = this.page.getByText('Email and Password are');
        this.loginErrorMessage = this.page.getByText('Invalid email id and password');
    }

    //verify login heading
    async isLoginHeadingVisible(): Promise<void> {
        await expect(this.loginHeading).toBeVisible();
    }

    async isLoginEmailInputVisible(): Promise<void> {
        await expect(this.loginEmailInput).toBeVisible();
    }

    async isLoginPasswordInputVisible(): Promise<void> {
        await expect(this.loginPasswordInput).toBeVisible();
    }

    async isLoginRememberMeCheckboxVisible(): Promise<void> {
        await expect(this.loginRememberMeCheckbox).toBeVisible();
    }

    async isForgetPasswordLinkVisble(): Promise<void> {
        await expect(this.forgetPasswordLink).toBeVisible();
    }

    async isSigninBtnVisible(): Promise<void> {
        await expect(this.signinBtn).toBeVisible();
    }

    async isRegisterLinkVisble(): Promise<void> {
        await expect(this.registerLink).toBeVisible();
    }

    async isSuccessfulLoginMessageVisible(): Promise<void> {
        await expect(this.successfulLoginMessage).toBeVisible();
    }

    //enter information
    async enterLoginEmailInput(email: string): Promise<void> {
        await this.loginEmailInput.fill(email);
    }

    async enterLoginPasswordInput(password: string): Promise<void> {
        await this.loginPasswordInput.fill(password);
    }

    // ✅ Checkbox actions
    async selectLoginRememberMeCheckbox(): Promise<void> {
        await this.loginRememberMeCheckbox.check();
    }

    async verifyLoginRememberMeChecked(): Promise<void> {
        await expect(this.loginRememberMeCheckbox).toBeChecked();
    }

    //click actions
    async clickForgetPasswordLink(): Promise<void> {
        await this.forgetPasswordLink.click();
    }

    async clickSigninBtn(): Promise<void> {
        await this.signinBtn.click();
    }

    async clickRegisterLink(): Promise<void> {
        await this.registerLink.click();
    }

    async isPasswordFieldMasked(): Promise<boolean> {
        const inputType = await this.loginPasswordInput.getAttribute("type");
        return inputType === "password";
    }

    async reloadLoginPage(): Promise<void> {
        this.page.reload({ waitUntil: "load" })
    }

    //sign in button enable
    async isSigninButtonEnabled(): Promise<void> {
        this.signinBtn.isEnabled();
    }

    async isEmailAndPasswordErrorMessageVisible(): Promise<void> {
        this.emailAndPasswordErrorMessage.isVisible();
    }

    async isPasswordRequiredErrorMessageVisible(): Promise<void> {
        this.passwordRequiredErrorMessage.isVisible();
    }

    getSigninBtn(): Locator {
        return this.signinBtn;
    }

    getEmailAndPasswordErrorMessage(): Locator {
        return this.emailAndPasswordErrorMessage;
    }

    getPasswordRequiredErrorMessage(): Locator {
        return this.passwordRequiredErrorMessage;
    }

    getLoginErrorMessage(): Locator {
        return this.loginErrorMessage;
    }

    // In LoginPage class
    async getEmailValidationMessage(): Promise<string> {
        // Try to locate by name or aria-label — adjust according to your actual HTML
        const emailInput = this.loginEmailInput;

        // Evaluate the browser’s native validation message
        const message = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
        return message;
    }

}