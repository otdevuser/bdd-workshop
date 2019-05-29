Feature: Front page
  As a website user
  I want to get to the front page
  So that I can login to my account or register

  Scenario: Login form loading
    Given I am on the front page
    When page loading is finished
    Then I can see a login form
