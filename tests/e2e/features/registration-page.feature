Feature: Providing registration for users
  As a website user
  I want to be able to register
  So that I can access all restricted services

  Scenario: Registration form is available for visitor
    Given I am on the registration page
    Then registration form appears on the page

  Scenario Outline: Form fields empty value validation
    Given I am on the registration page
    And I click on "<field_name>" field
    When I leave "<field_name>" field after entered "<entered_value>"
    Then "<field_name>" field indicates "<status>"

    Examples:
      | field_name                         | entered_value    | status      |
      | [name='register-fullname']         |                  | error-field |
      | [name='register-fullname']         | Test User        |             |
      | [name='register-username']         |                  | error-field |
      | [name='register-username']         | testuser         |             |
      | [name='register-password']         |                  | error-field |
      | [name='register-password']         | testpass!        |             |
      | [name='register-password-confirm'] |                  | error-field |
      | [name='register-password-confirm'] | testpass!        |             |
      | [name='register-email']            |                  | error-field |
      | [name='register-email']            | test@example.com |             |
