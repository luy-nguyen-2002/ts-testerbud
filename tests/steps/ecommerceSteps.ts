import { expect, Given, Then, When } from "../../fixtures/pageFixtures"

When('I click on the ecommerce link', async ({ homePage, ecommercePage }) => {
    await homePage.clickEcommerceTestingLink();
    await ecommercePage.waitForPageLoad();
});

Then('I should be on the ecommerce page', async ({ ecommercePage }) => {
    await expect(ecommercePage.getEcommerceLink()).toBeVisible();
    await expect(ecommercePage.getSearchInput()).toBeVisible();
    await expect(ecommercePage.getCartButton()).toBeVisible();
});

// ✅ Product Search Scenario
Given('I enter product name {string} in the search input', async ({ ecommercePage }, productName: string) => {
    await ecommercePage.enterSearch(productName);
});

Then('I should see the searched products contain {string} in the product listing', async ({ ecommercePage }, productName: string) => {
    const results = ecommercePage.getProductCardItem(productName);
    const count = await results.count();
    expect(count).toBeGreaterThan(0);
});

// ✅ Add Products and Checkout Scenario
When(
    'I add product name {string} and product name {string} to cart in the product listing',
    async ({ ecommercePage }, productName1: string, productName2: string) => {
        const product1 = ecommercePage.getProductCardItem(productName1);
        const product2 = ecommercePage.getProductCardItem(productName2);

        const addButton1 = product1.getByRole('button', { name: 'Add to Cart' }).first();
        const addButton2 = product2.getByRole('button', { name: 'Add to Cart' }).first();

        await addButton1.click();
        await addButton2.click();
    }
);

Then('I should see the cart button label with expected number {string}', async ({ ecommercePage }, numberOfProducts: string) => {
    const cartBtn = ecommercePage.getNumberOfProductsInCart(Number(numberOfProducts));
    await expect(cartBtn).toBeVisible();
});

When('I click on the cart button', async ({ ecommercePage }) => {
    await ecommercePage.clickCartButton();
});

Then('I should be in the cart', async ({ ecommercePage }) => {
    await expect(ecommercePage.getCartHeading()).toBeVisible();
});

Then(
    'I should see the product name {string} and product name {string} in the cart',
    async ({ ecommercePage }, productName1: string, productName2: string) => {
        await expect(ecommercePage.getItemInCart(productName1)).toBeVisible();
        await expect(ecommercePage.getItemInCart(productName2)).toBeVisible();
    }
);

When('I click on the proceed to buy button', async ({ ecommercePage }) => {
    await ecommercePage.clickProceedToBuy();
});

Then('I should see the shipping details form', async ({ ecommercePage }) => {
    await expect(ecommercePage.getShippingAddressHeading()).toBeVisible();
    await expect(ecommercePage.getFullNameInput()).toBeVisible();
    await expect(ecommercePage.getStreetAddressInput()).toBeVisible();
    await expect(ecommercePage.getCityInput()).toBeVisible();
    await expect(ecommercePage.getStateInput()).toBeVisible();
    await expect(ecommercePage.getZipCodeInput()).toBeVisible();
});

When(
    'I fill in the shipping details form with fullname {string}, address {string}, city {string}, state {string}, zip {string}',
    async (
        { ecommercePage },
        fullname: string,
        address: string,
        city: string,
        state: string,
        zip: string
    ) => {
        await ecommercePage.enterFullName(fullname);
        await ecommercePage.enterStreetAddress(address);
        await ecommercePage.enterCity(city);
        await ecommercePage.enterState(state);
        await ecommercePage.enterZipCode(zip);
    }
);

When('I click on the save and continue button', async ({ ecommercePage }) => {
    await ecommercePage.clickSaveAndContinue();
});

Then('I should see the payment details form', async ({ ecommercePage }) => {
    await expect(ecommercePage.getPaymentMethodHeading()).toBeVisible();
    await expect(ecommercePage.getCreditCardNumber()).toBeVisible();
    await expect(ecommercePage.getCreditCardExpiryDate()).toBeVisible();
    await expect(ecommercePage.getCreditCardCVV()).toBeVisible();
    await expect(ecommercePage.getPayNowButton()).toBeVisible();
});

When(
    'I fill in the payment details form with card number {string}, expiry date {string}, CVV {string}',
    async ({ ecommercePage }, cardNumber: string, expiryDate: string, cvv: string) => {
        await ecommercePage.enterCardDetails(cardNumber, expiryDate, cvv);
    }
);

When('I click on the pay now button', async ({ ecommercePage }) => {
    await ecommercePage.clickPayNow();
});

Then('I should see the successful order confirmation message', async ({ ecommercePage }) => {
    await expect(ecommercePage.getSuccessfulOrderMessage()).toBeVisible();
    await expect(ecommercePage.getDoneButton()).toBeVisible();
});

When('I click on the done button', async ({ ecommercePage }) => {
    await ecommercePage.clickDoneButton();
});

Then('I should be back on the homepage', async ({ homePage }) => {
    await expect(homePage.getFeaturesHeading()).toBeVisible();
});


// ✅ Negative Scenario
When('I leave the payment details form fields empty', async ({ ecommercePage }) => {
    await ecommercePage.getCreditCardNumber().clear();
    await ecommercePage.getCreditCardExpiryDate().clear();
    await ecommercePage.getCreditCardCVV().clear();
});

Then('I should see the error message indicating invalid payment details', async ({ ecommercePage }) => {
    await expect(ecommercePage.getEmptyCardNumberError()).toBeVisible();
    await expect(ecommercePage.getEmptyCardExpiryError()).toBeVisible();
    await expect(ecommercePage.getEmptyCardCVVError()).toBeVisible();
});


// ✅ UI Scenario
Then('I should see the product listing with at least 1 product', async ({ ecommercePage }) => {
    const products = ecommercePage.getProductList();
    await expect(products.first()).toBeVisible();
    //    await expect(products.count()).toHaveCountGreaterThan(0);
});


// ✅ Quantity Update Scenario
When(
    'I change the quantity {string} with quantity id {string} of product name {string}',
    async ({ ecommercePage }, quantity: string, quantityId: string, productName: string) => {
        const product = ecommercePage.getProductCardItem(productName);
        const qtyInput = product.locator(`#quantity-${quantityId}`);
        await qtyInput.fill(quantity);
    }
);

When('I add product name {string} to cart', async ({ ecommercePage }, productName: string) => {
    const product = ecommercePage.getProductCardItem(productName);
    await product.getByRole('button', { name: 'Add to Cart' }).click();
});

Then('I should see the product name {string} in the cart', async ({ ecommercePage }, productName: string) => {
    await expect(ecommercePage.getItemInCart(productName)).toBeVisible();
});