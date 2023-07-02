Feature: UI Tests -- Women feature

  Background:
    Given User navigates to ajio web site
 
  @Sanity @ui
  Scenario: Navigate to Womens Page
    Given User clicks "women" hyperlink
    Then User navigates to womens page
