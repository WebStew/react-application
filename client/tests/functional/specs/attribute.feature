
Feature: Test the attributes of a given element
	As a developer
	I want to be able to test the attributes of a given element

	Background:
		Given I open the "url" "/"

	Scenario: 	The attribute "id" of a element should be "view-application"
		Then 	the attribute "id" from element "#view-application" is "view-application"
