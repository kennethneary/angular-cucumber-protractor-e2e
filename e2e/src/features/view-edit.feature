Feature: View/Edit

  Scenario: View/Edit Paste button
    Given I am on the home page
    And edit item is not displayed
    When I select edit item
    Then edit item is displayed
    When I select the close button
    Then edit item is not displayed

  Scenario: Edit data
    Given I am on the home page
    When I add new data
    And the newly added data is in the last row
    When I can edit the data
    Then edit data is updated

  Scenario: Delete
    Given I am on the home page
    When I select edit on the last item
    And I select the delete button
    Then the row is deleted
