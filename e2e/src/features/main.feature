Feature: Go the the home

  Scenario: Home Page should have tabs and table present
    Given I am on the home page
    Then all tabs are present
    And the table header should contain "Id Title Language Code"
    And table first row contains "Hello world Ruby"
    And there is an add new button
