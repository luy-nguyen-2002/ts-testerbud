import { Page } from '@playwright/test';

export default class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }
}
