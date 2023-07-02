Feature: API Tests -- User Get feature

  @Sanity @api
  Scenario: Get valid user data
    When I get user data for id "2"
    Then I validates the users data

  @Sanity @api
  Scenario: Get in-valid user data
    When I get user data for id "23"
    Then I validates the users data

  @Sanity @api
  Scenario Outline: Get users data
    When I get user data for id "<id>"
    Then I validates the users data
    Examples:
      | id |
      | 2  |
      | 23 |