import { expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import { test as base, createBdd } from "playwright-bdd";
import SignupPage from "../pages/signupPage";
import ForgetPasswordPage from "../pages/forgetPasswordPage";
import FormPage from "../pages/formPage";
import EcommercePage from "../pages/ecommercePage";

/**
 * 🔹 Interface định nghĩa các fixture (page objects)
 */
type PageFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    forgetPasswordPage: ForgetPasswordPage;
    formPage: FormPage;
    ecommercePage: EcommercePage;
};

/**
 * 🔹 Extend test fixture gốc để thêm các page object
 */
export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    signupPage: async ({ page }, use) => {
        const signupPage = new SignupPage(page);
        await use(signupPage);
    },

    forgetPasswordPage: async ({ page }, use) => {
        const forgetPasswordPage = new ForgetPasswordPage(page);
        await use(forgetPasswordPage);
    },
    formPage: async ({ page }, use) => {
        const formPage = new FormPage(page);
        await use(formPage);
    },
    ecommercePage: async ({ page }, use) => {
        const ecommercePage = new EcommercePage(page);
        await use(ecommercePage);
    },
});

/**
 * 🔹 Re-export expect để dùng chung
 */
export { expect };
export const { Given, When, Then } = createBdd(test);
