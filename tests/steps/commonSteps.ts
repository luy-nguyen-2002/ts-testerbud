import { Given } from "../../fixtures/pageFixtures";

Given("I navigate to the homepage", async ({ homePage }) => {
  await homePage.navigateToHomePage();
  await homePage.waitForPageLoad();
  await homePage.verifyHomepageLoaded();
});