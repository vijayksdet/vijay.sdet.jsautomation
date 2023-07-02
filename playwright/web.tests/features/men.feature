Feature: UI Tests -- Mens feature

  Background:
    Given User navigates to ajio web site
 
  @Sanity @ui
  Scenario: Navigate to Mens Page
    Given User clicks "men" hyperlink
    Then User navigates to mens page