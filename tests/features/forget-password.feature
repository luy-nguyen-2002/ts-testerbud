Feature: Forget Password Functionality
    As a registered user
    I want to reset my password securely
    So that I can regain access to my account if I forget my password
    Background:
        Given I navigate to the homepage
        When I click on the forget password link
        Then I should be on the forget password page

    @smoke @positive
    Scenario Outline: Validate successful password reset with a valid New Password
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter valid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        And I enter valid current password "<currentPassword" and valid new password "<newPassword>" and valid new confirm password "<confirmPassword>"
        When I click reset password button in the forget password page
        Then I should see a successful reset password message

        Examples:
            | email                | code     | currentPassword | newPassword | confirmPassword |
            | user@premiumbank.com | BANK1234 | Bank@123        | Bank@456    | Bank@456        |

    @negative @validation
    Scenario Outline: Validate Error message if Email address left blank
        Given I leave email input empty in forget password page
        When I click continue button in the forget password page
        Then I should see the error message of email required in the forget password page

    @negative @validation
    Scenario Outline: Validate Error message if wrong Email address entered
        Given I enter invalid email "<email>" in forget password page
        When I click continue button in the forget password page
        Then I should see the error message of invalid email required in the forget password page

        Examples:
            | email           |
            | fake@mail.com   |
            | notfound@xyz.io |
    @negative @validation
    Scenario Outline: Validate Error message if secret code left blank
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I leave secret code blank in forget password page
        When I click verify code button in the forget password page
        Then I should see the error message of secret code required in the forget password page

        Examples:
            | email                |
            | user@premiumbank.com |


    @negative @validation
    Scenario Outline: Validate Error message if wrong Secret Code entered
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter invalid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        Then I should see the error message of invalid secret code in the forget password page

        Examples:
            | email                | code   |
            | user@premiumbank.com | 000000 |


    @negative @validation
    Scenario Outline: Validate Error message if Current Password left blank
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter valid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        And I leave current password blank and valid new password "<newPassword>" and valid new confirm password "<confirmPassword>"
        When I click reset password button in the forget password page
        Then I should see the error message of current password required in the forget password page

        Examples:
            | email                | code     | newPassword | confirmPassword |
            | user@premiumbank.com | BANK1234 | Bank@456    | Bank@456        |

    @negative @validation
    Scenario Outline: Validate Error message if New Password left blank
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter valid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        And I enter valid current password "<currentPassword" and leave new password blank and enter valid new confirm password "<confirmPassword>"
        When I click reset password button in the forget password page
        Then I should see the error message of new password required in the forget password page

        Examples:
            | email                | code     | currentPassword | confirmPassword |
            | user@premiumbank.com | BANK1234 | Bank@123        | Bank@456        |

    @negative @validation
    Scenario Outline: Validate Error message if Confirm New Password left blank
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter valid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        And I enter valid current password "<currentPassword" and valid new password "<newPassword>" and leave new confirm password blank
        When I click reset password button in the forget password page
        Then I should see the error message of new confirm password required in the forget password page

        Examples:
            | email                | code     | currentPassword | newPassword |
            | user@premiumbank.com | BANK1234 | Bank@123        | Bank@456    |

    @negative @validation
    Scenario Outline: Validate error message if New and Confirm Password do not match
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter valid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        And I enter valid current password "<currentPassword" and valid new password "<newPassword>" and invalid new confirm password "<confirmPassword>"
        When I click reset password button in the forget password page
        Then I should see the error message of mismatched password in the forget password page

        Examples:
            | email                | code     | currentPassword | newPassword | confirmPassword |
            | user@premiumbank.com | BANK1234 | Bank@123        | Bank@456    | Bank@789        |

    @validation @security @ui
    Scenario Outline: Validate error message if New and Confirm Password do not meet password criteria
        Given I enter valid email "<email>" in forget password page
        When I click continue button in the forget password page
        And I enter valid secret code "<code>" in forget password page
        When I click verify code button in the forget password page
        And I enter valid current password "<currentPassword>" and invalid new password "<newPassword>" and invalid new confirm password "<confirmPassword>"
        Then I should see the color change of password criteria in the forget password page

        Examples:
            | email                | code     | currentPassword | newPassword | confirmPassword |
            | user@premiumbank.com | BANK1234 | Bank@123        | weakpass    | weakpass        |