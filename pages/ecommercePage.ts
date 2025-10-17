import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class EcommercePage extends BasePage {
    //Locators
    private readonly ecommerceLink: Locator;
    private readonly searchInput: Locator;
    private readonly cartButton: Locator;
    // private readonly productCardItem: Locator;
    private readonly cartHeading: Locator;
    private readonly emptyCartMessage: Locator;
    private readonly totalAmount: Locator;
    private readonly proceedToBuyButton: Locator;
    private readonly shippingAddressHeading: Locator;
    private readonly fullNameInput: Locator;
    private readonly streetAddressInput: Locator;
    private readonly cityInput: Locator;
    private readonly stateInput: Locator;
    private readonly zipCodeInput: Locator;
    private readonly saveAndContinueButton: Locator;
    private readonly paymentMethodHeading: Locator;
    private readonly creditCardNumber: Locator;
    private readonly creditCardExpiryDate: Locator;
    private readonly creditCardCVV: Locator;
    private readonly payNowButton: Locator;
    private readonly emptyCardNumberError: Locator;
    private readonly emptyCardExpiryError: Locator;
    private readonly emptyCardCVVError: Locator;
    private readonly successfulOrderMessage: Locator;
    private readonly doneButton: Locator;
    private readonly productList: Locator;

    constructor(page: Page) {
        super(page);
        this.ecommerceLink = this.page.getByRole('link', { name: 'TesterBud: Premium Ecommerce' });
        this.searchInput = this.page.getByRole('searchbox', { name: 'Search' });
        this.cartButton = this.page.locator('.d-flex').first();
        // this.productCardItem = this.page.locator('div').filter({ hasText: 'Laptop ProPrice: $1200Qty:Add' }).nth(5)
        this.cartHeading = this.page.getByText('Your Cart', { exact: true });
        this.emptyCartMessage = this.page.getByText('Your cart is empty.');
        this.totalAmount = this.page.getByText('Total: $');
        this.proceedToBuyButton = this.page.getByRole('button', { name: 'Proceed to Buy' });
        this.shippingAddressHeading = this.page.getByRole('heading', { name: 'Shipping Address' });
        this.fullNameInput = this.page.getByRole('textbox', { name: 'Full Name:' });
        this.streetAddressInput = this.page.getByRole('textbox', { name: 'Street Address:' });
        this.cityInput = this.page.getByRole('textbox', { name: 'City:' });
        this.stateInput = this.page.getByRole('textbox', { name: 'State:' });
        this.zipCodeInput = this.page.getByRole('textbox', { name: 'ZIP Code:' });
        this.saveAndContinueButton = this.page.getByRole('button', { name: 'Save Address & Continue to' });
        this.paymentMethodHeading = this.page.getByRole('heading', { name: 'Payment Details' });
        this.creditCardNumber = this.page.getByRole('textbox', { name: 'Card Number:' });
        this.creditCardExpiryDate = this.page.getByRole('textbox', { name: 'Expiry Date:' });
        this.creditCardCVV = this.page.getByRole('textbox', { name: 'CVV:' });
        this.payNowButton = this.page.getByRole('button', { name: 'Buy Now' });
        this.emptyCardNumberError = this.page.getByText('Please enter card number.');
        this.emptyCardExpiryError = this.page.getByText('Please enter expiry date.');
        this.emptyCardCVVError = this.page.getByText('Please enter CVV.');
        this.successfulOrderMessage = this.page.getByRole('heading', { name: 'Order Successful!' });
        this.doneButton = this.page.getByRole('button', { name: 'Done' });
        this.productList= this.page.getByText('Laptop ProPrice: $1200Qty:Add to CartWireless MousePrice: $25Qty:Add to');
    }

    // ✅ Getters
    getProductList() { return this.productList; }
    getEcommerceLink() { return this.ecommerceLink; }
    getSearchInput() { return this.searchInput; }
    getCartButton() { return this.cartButton; }
    getProductCardItem(productName: string): Locator {
        return this.page.locator('div').filter({ hasText: new RegExp(`^${productName}`, 'i') });
    }
    getNumberOfProductsInCart(num: number) {
        return this.page.getByRole('button', { name: `${num}` });
    }
    getItemInCart(productName: string): Locator {
        return this.page.getByText(new RegExp(`${productName}\\s*-`, 'i'));
    }
    getCartHeading() { return this.cartHeading; }
    getEmptyCartMessage() { return this.emptyCartMessage; }
    getTotalAmount() { return this.totalAmount; }
    getProceedToBuyButton() { return this.proceedToBuyButton; }
    getShippingAddressHeading() { return this.shippingAddressHeading; }
    getFullNameInput() { return this.fullNameInput; }
    getStreetAddressInput() { return this.streetAddressInput; }
    getCityInput() { return this.cityInput; }
    getStateInput() { return this.stateInput; }
    getZipCodeInput() { return this.zipCodeInput; }
    getSaveAndContinueButton() { return this.saveAndContinueButton; }
    getPaymentMethodHeading() { return this.paymentMethodHeading; }
    getCreditCardNumber() { return this.creditCardNumber; }
    getCreditCardExpiryDate() { return this.creditCardExpiryDate; }
    getCreditCardCVV() { return this.creditCardCVV; }
    getPayNowButton() { return this.payNowButton; }
    getEmptyCardNumberError() { return this.emptyCardNumberError; }
    getEmptyCardExpiryError() { return this.emptyCardExpiryError; }
    getEmptyCardCVVError() { return this.emptyCardCVVError; }
    getSuccessfulOrderMessage() { return this.successfulOrderMessage; }
    getDoneButton() { return this.doneButton; }

    // ✅ Click actions
    async clickEcommerceLink() { await this.ecommerceLink.click(); }
    async clickCartButton() { await this.cartButton.click(); }
    // async clickProductCardItem() { await this.productCardItem.click(); }
    async clickProceedToBuy() { await this.proceedToBuyButton.click(); }
    async clickSaveAndContinue() { await this.saveAndContinueButton.click(); }
    async clickPayNow() { await this.payNowButton.click(); }
    async clickDoneButton() { await this.doneButton.click(); }

    // ✅ Input actions (fill + press Enter)
    async enterSearch(keyword: string) {
        await this.searchInput.fill(keyword);
    }

    async enterFullName(name: string) { await this.fullNameInput.fill(name); }
    async enterStreetAddress(address: string) { await this.streetAddressInput.fill(address); }
    async enterCity(city: string) { await this.cityInput.fill(city); }
    async enterState(state: string) { await this.stateInput.fill(state); }
    async enterZipCode(zip: string) { await this.zipCodeInput.fill(zip); }

    async enterCardDetails(cardNumber: string, expiry: string, cvv: string) {
        await this.creditCardNumber.fill(cardNumber);
        await this.creditCardExpiryDate.fill(expiry);
        await this.creditCardCVV.fill(cvv);
    }

}