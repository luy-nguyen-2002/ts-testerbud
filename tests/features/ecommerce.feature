Feature: Ecommerce Functionality
  As a user
  I want to be able to search for products, add them to my cart, and proceed to checkout
  So that I can complete my purchase efficiently

  Background:
    Given I navigate to the homepage
    When I click on the ecommerce link
    Then I should be on the ecommerce page

  @smoke @positive
  Scenario Outline: Validate successful product search
    Given I enter product name "<productName>" in the search input
    Then I should see the searched products contain "<productName>" in the product listing

    Examples:
      | productName      |
      | Laptop Pro       |
      | Wireless         |
      | Keyboard RGB     |
      | Headphones       |

  @smoke @positive
  Scenario Outline: Validate successful buying products
    When I add product name "<productName1>" and product name "<productName2>" to cart in the product listing
    Then I should see the cart button label with expected number "<numberOfProducts>"
    When I click on the cart button
    Then I should be in the cart
    And I should see the product name "<productName1>" and product name "<productName2>" in the cart
    When I click on the proceed to buy button
    Then I should see the shipping details form
    When I fill in the shipping details form with fullname "<fullname>", address "<address>", city "<city>", state "<state>", zip "<zip>"
    And I click on the save and continue button
    Then I should see the payment details form
    When I fill in the payment details form with card number "<cardNumber>", expiry date "<expiryDate>", CVV "<cvv>"
    And I click on the pay now button
    Then I should see the successful order confirmation message
    When I click on the done button
    Then I should be back on the homepage

    Examples:
      | productName1        | productName2       | numberOfProducts | fullname      | address            | city     | state  | zip    | cardNumber       | expiryDate | cvv |
      | Laptop Pro          | Wireless Mouse     | 2                | John Doe      | 123 Main St        | New York | NY     | 10001  | 4111111111111111 | 12/28      | 123 |
    #   | Iphone 14 pro       | Keyboard RGB       | 2                | Emma Watson   | 55 Park Ave        | Boston   | MA     | 02110  | 5555444433331111 | 11/29      | 456 |

  @validation @negative
  Scenario Outline: Validate unsuccessful buying products with empty card details
    When I add product name "<productName1>" and product name "<productName2>" to cart in the product listing
    Then I should see the cart button label with expected number "<numberOfProducts>"
    When I click on the cart button
    Then I should be in the cart
    And I should see the product name "<productName1>" and product name "<productName2>" in the cart
    When I click on the proceed to buy button
    Then I should see the shipping details form
    When I fill in the shipping details form with fullname "<fullname>", address "<address>", city "<city>", state "<state>", zip "<zip>"
    And I click on the save and continue button
    Then I should see the payment details form
    When I leave the payment details form fields empty
    And I click on the pay now button
    Then I should see the error message indicating invalid payment details

    Examples:
      | productName1  | productName2     | numberOfProducts | fullname   | address        | city      | state | zip   |
      | Laptop Pro    | Wireless Mouse   | 2                | John Smith | 789 Elm Street | Chicago   | IL    | 60601 |

  @ui
  Scenario: Verify products in the ecommerce page
    Then I should see the product listing with at least 1 product

  @smoke @positive
  Scenario Outline: Validate update product quantity
    When I change the quantity "<quantity>" with quantity id "<quantityId>" of product name "<productName>"
    And I add product name "<productName>" to cart
    Then I should see the cart button label with expected number "<numberOfProducts>"
    When I click on the cart button
    Then I should be in the cart
    And I should see the product name "<productName>" in the cart

    Examples:
      | productName      | quantity | quantityId | numberOfProducts |
      | Keyboard RGB      |3        |3        | 3                |
      | Wireless Mouse   | 2        | 2        | 2                |
