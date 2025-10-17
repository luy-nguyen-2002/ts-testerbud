Feature: Signup Functionality
  As an unregistered user
  I want to register an account
  So that I can access my account and perform specialized actions

  Background:
    Given I navigate to the homepage
    When I click on the register link
    Then I should be on the registration page

  @smoke @positive
  Scenario Outline: Verify successful user registration
    Given I enter valid "<email>" and "<password>" and "<confirmPassword>"
    When I click the register button
    Then I should see a successful registration message

    Examples:
      | email                 | password | confirmPassword |
      | user@premiumbank.com  | Bank@123 | Bank@123        |
      | user1@premiumbank.com | Bank@456 | Bank@456        |

  @negative @validation
  Scenario Outline: Verify error message when email is empty
    Given I leave email field empty and enter the password field "<password>" and confirm password field "<confirmPassword>"
    When I click the register button
    Then I should see the error message of email required

    Examples:
      | password | confirmPassword |
      | Bank@123 | Bank@123        |
      | Bank@456 | Bank@456        |

  @negative @validation
  Scenario Outline: Verify error message when password is empty
    Given I leave password field empty and enter the email field "<email>" and confirm password field "<confirmPassword>"
    When I click the register button
    Then I should see the error message of signup password required

    Examples:
      | email                | confirmPassword |
      | user@premiumbank.com | Bank@123        |
      | use2@premiumbank.com | Bank@456        |

  @negative @validation
  Scenario Outline: Verify error message when confirm password is empty
    Given I leave confirm password field empty and enter the email field "<email>" and password field "<password>"
    When I click the register button
    Then I should see the error message of confirm password required

    Examples:
      | email                | password |
      | user@premiumbank.com | Bank@123 |
      | use2@premiumbank.com | Bank@456 |

  @negative @validation
  Scenario Outline: Verify error message when password and confirm password do not match
    Given I enter the email field "<email>" and password field "<password>" and mismatched confirm password field "<confirmPassword>"
    When I click the register button
    Then I should see the error message of password and confirm password do not match

    Examples:
      | email                | password | confirmPassword |
      | user@premiumbank.com | Bank@123 | Bank@321        |
      | use2@premiumbank.com | Bank@456 | Bank@654        |

  @negative @validation
  Scenario Outline: Verify error message for invalid email format
    Given I enter an invalid email format "<email>" to signup
    When I click the register button
    Then I should see the error message of email signup validation

    Examples:
      | email        |
      | abc123       |
      | testmail.com |

  @validation @security @ui
  Scenario Outline: Validate password strength indicators when weak password is entered
    Given I enter a weak password "<password>"
    Then The system should mark green line for criteria that are met
    And All criteria lines should not be green

    Examples:
      | password |
      | test123  |
      | test940  |

  @validation @security
  Scenario Outline: Validate error message when password is weak
    Given I enter a valid email "<email>" and enter a weak password "<password>" and enter a weak confirm password "<confirmPassword>"
    When I click the register button
    Then I should see the error message of missing password requirements

    Examples:
      | email                | password | confirmPassword |
      | user@premiumbank.com | test123  | test123         |
      | use2@premiumbank.com | test940  | test940         |

  @validation @security @ui
  Scenario Outline: Verify all password validation lines turn green for a strong password
    Given I enter a strong password "<password>"
    Then All password strength validation lines should be green

    Examples:
      | email                | password  |
      | user@premiumbank.com | Bank@1234 |
      | use2@premiumbank.com | Bank@1234 |

  @ui
  Scenario: Validate clicking "Sign in" link successfully navigates user to Login Page
    Given I click on the sign in link
    Then I should be navigated to the login page
