import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
export default class ForgetPasswordPage extends BasePage {
    // private readonly page: Page;

    //Locators
    private readonly forgetPasswordHeading: Locator;
    private readonly emailInput: Locator;
    private readonly continueBtn: Locator;
    private readonly secretCodeInput: Locator;
    private readonly backToLoginBtn: Locator;
    private readonly emailBlankErrorMessage: Locator;
    private readonly nonExistedEmailErrorMessage: Locator;
    private readonly secretCodeBlankErrorMessage: Locator;
    private readonly invalidSecretCodeErrorMessage: Locator;
    private readonly FieldMissingErrorMessage: Locator;
    // private readonly blankNewPasswordErrorMessage: Locator;
    // private readonly blankNewConfirmPasswordErrorMessage: Locator; //missing one of them gonna return all fields are required
    private readonly misMatchedPasswordErrorMessage: Locator;
    private readonly passwordLengthConstraint: Locator;
    private readonly passwordUpperCaseConstraint: Locator;
    private readonly passwordLowerCaseConstraint: Locator;
    private readonly passwordNumberConstraint: Locator;
    private readonly passwordSpecialCharacterConstraint: Locator;
    private readonly passwordResetBtn: Locator;
    private readonly verifyCodeBtn: Locator;
    private readonly resetPasswordSuccessMessage: Locator;
    private readonly returnToLoginLink: Locator;
    private readonly currentPasswordInput: Locator;
    private readonly newPasswordInput: Locator;
    private readonly newConfirmPasswordInput: Locator;


    constructor(page: Page) {
        super(page);

        this.forgetPasswordHeading = this.page.getByRole('heading', { name: 'Forgot Password' });
        this.emailInput = this.page.getByRole('textbox', { name: 'Enter your registered email' });
        this.continueBtn = this.page.getByRole('button', { name: 'Continue' });
        this.backToLoginBtn = this.page.getByRole('link', { name: 'Back to Login' });
        this.emailBlankErrorMessage = this.page.getByText('Email is required');
        this.nonExistedEmailErrorMessage = this.page.getByText('Email not found in our records');
        this.secretCodeBlankErrorMessage = this.page.getByText('Secret code is required');
        this.invalidSecretCodeErrorMessage = this.page.getByText('Invalid secret code');
        this.verifyCodeBtn = this.page.getByRole('button', { name: 'Verify Code' });
        this.FieldMissingErrorMessage = this.page.getByText('All fields are required');
        this.misMatchedPasswordErrorMessage = this.page.getByText('Passwords do not match');
        this.passwordLengthConstraint = this.page.getByText('Minimum 8 characters');
        this.passwordUpperCaseConstraint = this.page.getByText('At least one uppercase letter');
        this.passwordLowerCaseConstraint = this.page.getByText('At least one lowercase letter');
        this.passwordNumberConstraint = this.page.getByText('At least one number');
        this.passwordSpecialCharacterConstraint = this.page.getByText('At least one special character');
        this.passwordResetBtn = this.page.getByRole('button', { name: 'Reset Password' });
        this.resetPasswordSuccessMessage = this.page.getByRole('heading', { name: 'Password Changed Successfully!' });
        this.returnToLoginLink = this.page.getByRole('link', { name: 'Return to Login' });
        this.secretCodeInput = this.page.getByRole('textbox', { name: 'Enter security code' });
        this.currentPasswordInput = this.page.getByRole('textbox', { name: 'Current password' });
        this.newPasswordInput = this.page.getByRole('textbox', { name: 'New password', exact: true });
        this.newConfirmPasswordInput = this.page.getByRole('textbox', { name: 'Confirm new password' });
    }

    //getter methods
    // 🔹 Getter Methods
    getForgetPasswordHeading(): Locator {
        return this.forgetPasswordHeading;
    }

    getEmailInput(): Locator {
        return this.emailInput;
    }

    getContinueBtn(): Locator {
        return this.continueBtn;
    }

    getBackToLoginBtn(): Locator {
        return this.backToLoginBtn;
    }

    getEmailBlankErrorMessage(): Locator {
        return this.emailBlankErrorMessage;
    }

    getNonExistedEmailErrorMessage(): Locator {
        return this.nonExistedEmailErrorMessage;
    }

    getSecretCodeBlankErrorMessage(): Locator {
        return this.secretCodeBlankErrorMessage;
    }

    getInvalidSecretCodeErrorMessage(): Locator {
        return this.invalidSecretCodeErrorMessage;
    }

    getFieldMissingErrorMessage(): Locator {
        return this.FieldMissingErrorMessage;
    }

    getMisMatchedPasswordErrorMessage(): Locator {
        return this.misMatchedPasswordErrorMessage;
    }

    getPasswordLengthConstraint(): Locator {
        return this.passwordLengthConstraint;
    }

    getPasswordUpperCaseConstraint(): Locator {
        return this.passwordUpperCaseConstraint;
    }

    getPasswordLowerCaseConstraint(): Locator {
        return this.passwordLowerCaseConstraint;
    }

    getPasswordNumberConstraint(): Locator {
        return this.passwordNumberConstraint;
    }

    getPasswordSpecialCharacterConstraint(): Locator {
        return this.passwordSpecialCharacterConstraint;
    }

    getPasswordResetBtn(): Locator {
        return this.passwordResetBtn;
    }

    getVerifyCodeBtn(): Locator {
        return this.verifyCodeBtn;
    }

    getResetPasswordSuccessMessage(): Locator {
        return this.resetPasswordSuccessMessage;
    }

    getReturnToLoginLink(): Locator{
        return this.returnToLoginLink;
    }

    //enter email
    async enterEmailInput(email: string):Promise<void>{
        await this.emailInput.fill(email);
    }

    async enterSecretCodeInput(secretCode: string): Promise<void>{
        await this.secretCodeInput.fill(secretCode);
    }

    async enterCurrentPasswordInput(current:string): Promise<void>{
        await this.currentPasswordInput.fill(current);
    }

    async enterNewPasswordInput(newPassword: string):Promise<void>{
        await this.newPasswordInput.fill(newPassword);
    }

    async enterNewConfirmPasswordInput(confirm: string):Promise<void>{
        await this.newConfirmPasswordInput.fill(confirm);
    }

    //click
    async clickContinueBtn():Promise<void>{
        await this.continueBtn.click();
    }
    async clickVerifyCodeBtn():Promise<void>{
        await this.verifyCodeBtn.click();
    }
    async clickPasswordResetBtn(): Promise<void>{
        await this.passwordResetBtn.click();
    }


}