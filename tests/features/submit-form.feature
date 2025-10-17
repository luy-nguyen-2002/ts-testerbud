Feature: Submit Web Form Functionality
  As a user
  I want to submit a web form successfully
  So that my information is recorded and validated properly

  Background:
    Given I navigate to the homepage
    When I click on the web automation form link
    Then I should be on the web automation form page

  @smoke @positive
  Scenario Outline: Validate successful form submission with valid data
    Given I select valid country "<country>" in the web automation form page
    And I select valid title "<title>" in the web automation form page
    And I enter valid first name "<firstname>" in the web automation form page
    And I enter valid last name "<lastname>" in the web automation form page
    And I select valid date of birth "<dob>" in the web automation form page
    And I enter valid date of joining "<doj>" in the web automation form page
    And I enter valid email "<email>" in the web automation form page
    And I select valid phone code "<phoneCode>" in the web automation form page
    And I enter valid phone number "<phoneNumber>" in the web automation form page
    And I select valid radio button "<radioTitle>" in the web automation form page
    When I click submit button in the web automation form page
    Then I should see a successful form submission message

    Examples:
      | country     | title | firstname | lastname | dob        | doj         | email                | phoneCode | phoneNumber | radioTitle |
      | Australia   | Mr.   | John      | Doe       | 1990-01-01 | 10/10/2020  | john.doe@mail.com    | +1       | 91234567    | Email      |
      | Australia | Ms.   | Maria     | Santos    | 1985-05-05 | 15/03/2015  | maria.s@mail.com     | +61       | 9876543210  | Phone      |

  @negative @validation
  Scenario: Verify all fields are empty
    Given I leave all input fields empty in the web automation form page
    When I click submit button in the web automation form page
    Then I should see the error message of all required fields in the web automation form page

  @negative @validation
  Scenario Outline: Verify invalid date of joining field format
    Given I select valid country "<country>" in the web automation form page
    And I select valid title "<title>" in the web automation form page
    And I enter valid first name "<firstname>" in the web automation form page
    And I enter valid last name "<lastname>" in the web automation form page
    And I select valid date of birth "<dob>" in the web automation form page
    And I enter invalid date of joining "<doj>" in the web automation form page
    And I enter valid email "<email>" in the web automation form page
    And I select valid phone code "<phoneCode>" in the web automation form page
    And I enter valid phone number "<phoneNumber>" in the web automation form page
    And I select valid radio button "<radioTitle>" in the web automation form page
    When I click submit button in the web automation form page
    Then I should see the error message of invalid date of joining format in the web automation form page

    Examples:
      | country   | title | firstname | lastname | dob        | doj       | email             | phoneCode | phoneNumber | radioTitle |
      | Australia  | Mr.   | Adam      | Lee       | 1992-07-07 | 2020-10-10 | adam.lee@mail.com | +61       | 9988776655  | Email      |

  @negative @validation
  Scenario Outline: Verify invalid email format
    Given I select valid country "<country>" in the web automation form page
    And I select valid title "<title>" in the web automation form page
    And I enter valid first name "<firstname>" in the web automation form page
    And I enter valid last name "<lastname>" in the web automation form page
    And I select valid date of birth "<dob>" in the web automation form page
    And I enter valid date of joining "<doj>" in the web automation form page
    And I enter invalid email "<email>" in the web automation form page
    And I select valid phone code "<phoneCode>" in the web automation form page
    And I enter valid phone number "<phoneNumber>" in the web automation form page
    And I select valid radio button "<radioTitle>" in the web automation form page
    When I click submit button in the web automation form page
    Then I should see the error message of invalid email format in the web automation form page

    Examples:
      | country   | title | firstname | lastname | dob        | doj        | email            | phoneCode | phoneNumber | radioTitle |
      | Australia | Mrs.  | Lina      | Putri     | 1995-09-09 | 05/05/2021 | lina.putri.com | +61       | 8123456789  | Email      |

  @ui
  Scenario Outline: Verify clear button functionality
    Given I select valid country "<country>" in the web automation form page
    And I select valid title "<title>" in the web automation form page
    And I enter valid first name "<firstname>" in the web automation form page
    And I enter valid last name "<lastname>" in the web automation form page
    And I select valid date of birth "<dob>" in the web automation form page
    And I enter valid date of joining "<doj>" in the web automation form page
    And I enter valid email "<email>" in the web automation form page
    And I select valid phone code "<phoneCode>" in the web automation form page
    And I enter valid phone number "<phoneNumber>" in the web automation form page
    And I select valid radio button "<radioTitle>" in the web automation form page
    When I click clear button in the web automation form page
    Then All input fields should be cleared in the web automation form page

    Examples:
      | country   | title | firstname | lastname | dob        | doj         | email                | phoneCode | phoneNumber | radioTitle |
      | Australia | Mr.   | Mark      | Tan       | 1991-12-12 | 01/01/2022  | mark.tan@mail.com    | +Other       | 99881122    | Phone      |
