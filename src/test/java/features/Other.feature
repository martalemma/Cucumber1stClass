# Negative test Wrong username and password
@OtherLoginFeature @Regression
Feature: TechFios login validation

Background:
Given     User is on TechFios login page

@OtherScenario1
Scenario: User should not be abele to login with valid credential
When      User enters username as "demo2@techfios.com" 
When      User enters password as "abc123"
When      User cliks signin button
Then      User should land on dashboard page    

@OtherScenario2 @Smoke
Scenario: User should not be abele to login with valid credential
When      User enters username as "demo2@techfios.com"
When      User enters password as "abc124"
When      User cliks signin button
Then      User should land on dashboard page    
