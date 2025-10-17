import { expect, Locator, Page } from "playwright/test";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    // private readonly page: Page;
    //locators
    private readonly practiceSitesBtn: Locator;
    private readonly featuresHeading: Locator;
    private readonly demoSitesVarietyLink: Locator;
    private readonly demoRealScenariosLink: Locator;
    private readonly demoInteractiveElementsLink: Locator;
    private readonly demoFormValidationLink: Locator;
    private readonly whyTesterBudHeading: Locator;
    private readonly loginAutomationLink: Locator;
    private readonly formAutomationLink: Locator;
    private readonly forgetPasswordLink: Locator;
    private readonly registrationFormLink: Locator;
    private readonly ecommerceTestingLink: Locator;
    private readonly flightBookingLink: Locator;
    private readonly elementAutomationLink: Locator;
    //construtor
    constructor(page: Page) {
        super(page);
        this.practiceSitesBtn = this.page.getByRole('button', { name: 'Practice Sites' });
        this.featuresHeading = this.page.getByRole('heading', { name: 'Features' });
        this.demoSitesVarietyLink = this.page.getByRole('link', { name: 'Variety of Demo Sites Variety' });
        this.demoRealScenariosLink = this.page.getByRole('link', { name: 'Realistic Scenarios Realistic' });
        this.demoInteractiveElementsLink = this.page.getByRole('link', { name: 'Demo APIs Interactive UI' });
        this.demoFormValidationLink = this.page.getByRole('link', { name: 'Focused Practice' });
        this.whyTesterBudHeading = this.page.getByRole('heading', { name: 'Why TesterBud is the Ideal' });
        this.loginAutomationLink = this.page.getByRole('link', { name: '🔐 Login Automation' });
        this.formAutomationLink = this.page.getByRole('link', { name: '📋 Web Form Automation' });
        this.forgetPasswordLink = this.page.getByRole('link', { name: '🔑 Forget Password Page' });
        this.registrationFormLink = this.page.getByRole('link', { name: '📝 Registration Form' });
        this.ecommerceTestingLink = this.page.getByRole('link', { name: '🛒 E-commerce Testing' });
        this.flightBookingLink = this.page.getByRole('link', { name: '✈️ Flight Booking Practice' });
        this.elementAutomationLink = this.page.getByRole('link', { name: '🎛️ UI Element Automation' });
    }

    getFeaturesHeading(): Locator {
        return this.featuresHeading;
    }

    //navigate to homepage
    async navigateToHomePage(): Promise<void> {
        await this.page.goto(process.env.BASE_URL || 'No URL Found');
        await this.page.waitForURL(process.env.BASE_URL || 'No URL Found', { waitUntil: "load" });
        await this.verifyHomepageLoaded();
    }

    //verify homepage loaded
    async verifyHomepageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(process.env.BASE_URL || 'No URL Found'));
        await expect(this.featuresHeading).toBeVisible();
        await expect(this.whyTesterBudHeading).toBeVisible();
        await expect(this.practiceSitesBtn).toBeVisible();
        await expect(this.demoFormValidationLink).toBeVisible();
        await expect(this.demoInteractiveElementsLink).toBeVisible();
        await expect(this.demoRealScenariosLink).toBeVisible();
        await expect(this.demoSitesVarietyLink).toBeVisible();
    }

    async clickLoginAutomationLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.loginAutomationLink.click();
    }

    async clickFormAutomationLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.formAutomationLink.click();
    }

    async clickForgetPasswordLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.forgetPasswordLink.click();
    }

    async clickRegistrationFormLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.registrationFormLink.click();
    }

    async clickEcommerceTestingLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.ecommerceTestingLink.click();
    }

    async clickFlightBookingLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.flightBookingLink.click();
    }

    async clickElementAutomationLink(): Promise<void> {
        await this.practiceSitesBtn.click();
        await this.elementAutomationLink.click();
    }
}