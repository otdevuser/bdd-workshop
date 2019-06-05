Feature: Front page login form
  As a registered website user
  I want to be able to login
  So that I can access website restricted services

  Scenario: Login form fields
    Given I am on the front page
    When page loading is finished
    Then in login form there are username and password fields

  Scenario: Login form buttons
    Given I am on the front page
    When page loading is finished
    Then in login form there are login and register buttons

  Scenario: Login form forgot password link
    Given I am on the front page
    When page loading is finished
    Then in login form there is forgot password link

  Scenario: Login form username validation: fail
    Given I am on the front page
    When page loading is finished
    And I entered a non-email text value into username field
    Then username field indicates the error

  Scenario: Login form username validation: success
    Given I am on the front page
    When page loading is finished
    And I entered an email text value into username field
    Then username field validates as correct

  Scenario: Login form password validation: fail
    Given I am on the front page
    When page loading is finished
    And I left a password field empty
    Then password field indicates the error

  Scenario: Login form password validation: success
    Given I am on the front page
    When page loading is finished
    And I entered a correct password
    Then password field validates as correct
