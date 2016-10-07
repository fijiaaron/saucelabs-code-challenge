@GuineaPig

Feature: Guinea Pig

As a Sauce Labs users
I want to fill out the Guinea Pig page
So that I can do something 

@GuineaPig1
Scenario Outline: Check unchecked checkbox and fill out email 

	Given I am on the Guinea Pig page
	When I click the first checkbox
	Then the first checkbox should be checked
	When I enter <email> in the email address field
	Then I should see <email> in the email address field

	Examples:
	| email              |
	| aarone@example.com |


@GuineaPig2
Scenario: Click a link
	
	Given I am on the "Guinea Pig" page
	When I click on the "i am a link" link
	Then I should be on the "Guinea Pig 2" page
	And I should see text "I am some other page content"