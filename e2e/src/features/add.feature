Feature: Add

  Scenario: Create Paste button and modal window
    Given I am on the home page
    And The button should exist
    And The modal window is not present
    When I click the add button
    Then The modal window should appear

  Scenario: Accept and save input values
    Given I am on the home page
    When I add new data and save
    Then The modal window is not present
    And the added data is in the last row

  Scenario: Close button should work
    Given I am on the home page
    When I click the add button
    Then The modal window should appear
    When I click the close button
    Then The modal window is not present
