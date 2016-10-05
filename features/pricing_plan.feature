@PricingPlan

Feature: Pricing Plan

As a potential Sauce Labs customer
I want to find the price each plan
So I can know how much it will cost me

Scenario Outline:
	Given I am on the Sauce Labs home page
	When I choose "Pricing" from the menu
	Then I should see the pricing page
	And I should see <price> for <plan>

	Examples: 
	| price | plan       |
	| 49    | Individual |
	