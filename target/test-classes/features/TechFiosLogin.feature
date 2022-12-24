
@LoginFeature @Regression
Feature: TechFios login functionality validation

@Scenario1 @Smoke
Scenario: User should be abele to login with valid credential
Given     User is on TechFios login page
When      User enters username as "demo@techfios.com"
When      User enters password as "abc123"
When      User cliks signin button
Then      User should land on dashboard page    
