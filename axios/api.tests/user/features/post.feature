Feature: API Tests -- Post feature

@Sanity @api
  Scenario: post user data
    When I post user data
    Then I validates user post data
