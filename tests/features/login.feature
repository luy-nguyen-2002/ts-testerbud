Feature: Login Functionality
  As a registered user
  I want to log in to the system
  So that I can access my account and perform actions

  Background:
    Given I navigate to the homepage
    And I click on the login link
    Then I should be on the login page

  @smoke @positive
  Scenario Outline: Verify login with valid credentials
    Given I enter valid "<email>" and "<password>"
    When I click the sign in button
    Then I should see a successful login message        

    Examples:
      | email                  | password   |
      | user@premiumbank.com   | Bank@123   |

  @negative
  Scenario Outline: Verify login with invalid credentials
    Given I enter invalid "<email>" or "<password>"
    When I click the sign in button
    Then I should see an error message for invalid login

    Examples:
      | email             | password   |
      | invalid@mail.com  | wrongPass  |

  @ui
  Scenario: Verify UI elements of the login page
    Then I should see the Email Address input field
    And I should see the Password input field
    And I should see the Sign In button
    And I should see the Forgot Password link
    And I should see the Register Now link

  @validation
  Scenario: Verify login button is enabled and validate error when fields are empty
    Given I am on the login page
    When I leave the email and password fields empty
    And I click the sign in button
    Then the login button should be enabled
    And I should see the error message of email and password required

  @security
  Scenario: Verify password field is masked
    Given I am on the login page
    When I enter a password into the password field
    Then the password should be masked with dots or asterisks

  @negative
  Scenario: Verify error message when password is empty
    Given I am on the login page
    When I enter a valid email "<email>" and leave the password field empty "<password>"
    And I click the sign in button
    Then I should see the error message of login password required

    Examples:
    | email             | password |
    | user@mail.com     |          |

  @negative
  Scenario: Verify error message for invalid email format
    Given I am on the login page
    When I enter an invalid email format "<email>" to login
    And I click the sign in button
    Then I should see the error message of email login validation

    Examples:
    | email         |
    | abc123        |
    | testmail.com  |