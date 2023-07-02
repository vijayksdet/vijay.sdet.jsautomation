Feature: API Tests -- Put feature

@Sanity @api
  Scenario: put user data
    When I put user data
    Then I validates user put data