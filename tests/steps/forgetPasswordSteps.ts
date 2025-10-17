import { expect, Given, Then, When } from "../../fixtures/pageFixtures"

When(
    "I click on the forget password link",
    async ({ homePage, loginPage }) => {
        await homePage.clickLoginAutomationLink();
        await loginPage.clickForgetPasswordLink();
    }
)

Then(
    "I should be on the forget password page",
    async ({ forgetPasswordPage }) => {
        await expect(forgetPasswordPage.getForgetPasswordHeading()).toBeVisible();
        await expect(forgetPasswordPage.getEmailInput()).toBeVisible();
        await expect(forgetPasswordPage.getBackToLoginBtn()).toBeVisible();
        await expect(forgetPasswordPage.getContinueBtn()).toBeVisible();
    }
)

//Scenario: Validate successful password reset with a valid New Password
Given(
    "I enter valid email {string} in forget password page",
    async ({ forgetPasswordPage }, email: string) => {
        await forgetPasswordPage.enterEmailInput(email);
    }
)

When(
    "I click continue button in the forget password page",
    async ({ forgetPasswordPage }) => {
        await forgetPasswordPage.clickContinueBtn();
    }
)

When(
    "I enter valid secret code {string} in forget password page",
    async ({ forgetPasswordPage }, secretCode: string) => {
        await forgetPasswordPage.enterSecretCodeInput(secretCode);
    }
)

When(
    "I click verify code button in the forget password page",
    async ({ forgetPasswordPage }) => {
        await forgetPasswordPage.clickVerifyCodeBtn();
    }
)

When(
    "I enter valid current password {string} and valid new password {string} and valid new confirm password {string}",
    async ({ forgetPasswordPage }, currentPassword: string, newPassword: string, confirmPassword: string) => {
        await forgetPasswordPage.enterCurrentPasswordInput(currentPassword);
        await forgetPasswordPage.enterNewPasswordInput(newPassword);
        await forgetPasswordPage.enterNewConfirmPasswordInput(confirmPassword);
    }
)

When(
    "I click reset password button in the forget password page",
    async ({ forgetPasswordPage }) => {
        await forgetPasswordPage.clickPasswordResetBtn();
    }
)
Then(
    "I should see a successful reset password message",
    async ({ forgetPasswordPage }) => {
        await expect(forgetPasswordPage.getResetPasswordSuccessMessage()).toBeVisible();
    }
)

// ✅ Negative Scenarios
Given('I leave email input empty in forget password page', async ({ forgetPasswordPage }) => {
    await forgetPasswordPage.getEmailInput().fill('');
});

Then('I should see the error message of email required in the forget password page', async ({ forgetPasswordPage }) => {
    await expect(forgetPasswordPage.getEmailBlankErrorMessage()).toBeVisible();
});


Given('I enter invalid email {string} in forget password page', async ({ forgetPasswordPage }, email: string) => {
    await forgetPasswordPage.getEmailInput().fill(email);
});

Then('I should see the error message of invalid email required in the forget password page', async ({ forgetPasswordPage }) => {
    await expect(forgetPasswordPage.getNonExistedEmailErrorMessage()).toBeVisible();
});

Given('I leave secret code blank in forget password page', async ({ forgetPasswordPage }) => {
    await forgetPasswordPage.enterSecretCodeInput('');
});

Then('I should see the error message of secret code required in the forget password page', async ({ forgetPasswordPage }) => {
    await expect(forgetPasswordPage.getSecretCodeBlankErrorMessage()).toBeVisible();
});

Given('I enter invalid secret code {string} in forget password page', async ({ forgetPasswordPage }, code: string) => {
    await forgetPasswordPage.enterSecretCodeInput(code);
});

Then('I should see the error message of invalid secret code in the forget password page', async ({ forgetPasswordPage }) => {
    await expect(forgetPasswordPage.getInvalidSecretCodeErrorMessage()).toBeVisible();
});

Given(
    'I leave current password blank and valid new password {string} and valid new confirm password {string}',
    async ({ forgetPasswordPage }, newPassword: string, confirmPassword: string) => {
        await forgetPasswordPage.enterNewPasswordInput(newPassword);
        await forgetPasswordPage.enterNewConfirmPasswordInput(confirmPassword);
    }
);

Then('I should see the error message of current password required in the forget password page', async ({ forgetPasswordPage }) => {
    await expect(forgetPasswordPage.getFieldMissingErrorMessage()).toBeVisible();
});

Given(
  'I enter valid current password {string} and leave new password blank and enter valid new confirm password {string}',
    async ({ forgetPasswordPage }, currentPassword: string, confirmPassword: string) => {
        await forgetPasswordPage.enterCurrentPasswordInput(currentPassword);
        await forgetPasswordPage.enterNewConfirmPasswordInput(confirmPassword);
    }
);

Then('I should see the error message of new password required in the forget password page', async ({forgetPasswordPage}) => {
  await expect(forgetPasswordPage.getFieldMissingErrorMessage()).toBeVisible();
});

Given(
  'I enter valid current password {string} and valid new password {string} and leave new confirm password blank',
    async ({ forgetPasswordPage }, currentPassword: string, newPassword: string) => {
        await forgetPasswordPage.enterCurrentPasswordInput(currentPassword);
        await forgetPasswordPage.enterNewPasswordInput(newPassword);
    }
);

Then('I should see the error message of new confirm password required in the forget password page', async ({forgetPasswordPage}) => {
  await expect(forgetPasswordPage.getFieldMissingErrorMessage()).toBeVisible();
});

Given(
  'I enter valid current password {string} and valid new password {string} and invalid new confirm password {string}',
  async ({forgetPasswordPage}, currentPassword: string, newPassword: string, confirmPassword: string) => {
    await forgetPasswordPage.enterCurrentPasswordInput(currentPassword);
    await forgetPasswordPage.enterNewPasswordInput(newPassword);
        await forgetPasswordPage.enterNewConfirmPasswordInput(confirmPassword);
  }
);

Then('I should see the error message of mismatched password in the forget password page', async ({forgetPasswordPage}) => {
  await expect(forgetPasswordPage.getMisMatchedPasswordErrorMessage()).toBeVisible();
});

Given(
  'I enter valid current password {string} and invalid new password {string} and invalid new confirm password {string}',
  async ({forgetPasswordPage},currentPassword: string, newPassword: string, confirmPassword: string) => {
    await forgetPasswordPage.enterCurrentPasswordInput(currentPassword);
    await forgetPasswordPage.enterNewPasswordInput(newPassword);
        await forgetPasswordPage.enterNewConfirmPasswordInput(confirmPassword);
  }
);

Then(
  'I should see the color change of password criteria in the forget password page',
  async ({ forgetPasswordPage }) => {
    // ✅ Check that some password criteria lines are green (#198754) and some remain red (#DC3545)

    const criteria = [
      forgetPasswordPage.getPasswordLengthConstraint(),
      forgetPasswordPage.getPasswordUpperCaseConstraint(),
      forgetPasswordPage.getPasswordLowerCaseConstraint(),
      forgetPasswordPage.getPasswordNumberConstraint(),
      forgetPasswordPage.getPasswordSpecialCharacterConstraint(),
    ];

    let greenCount = 0;
    const GREEN = 'rgb(25, 135, 84)'; // #198754
    const RED = 'rgb(220, 53, 69)';   // #DC3545

    // Evaluate all criteria colors
    for (const item of criteria) {
      const color = await item.evaluate((el) => globalThis.window.getComputedStyle(el).color);
      console.log(`Criteria color: ${color}`); // optional debug log

      if (color === GREEN) {
        greenCount++;
      } else {
        expect(color).toBe(RED);
      }
    }

    // Expect at least one green (some criteria met) but not all
    expect(greenCount).toBeGreaterThan(0);
    expect(greenCount).toBeLessThan(criteria.length);
  }
);
