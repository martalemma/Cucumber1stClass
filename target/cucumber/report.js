$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Other.feature");
formatter.feature({
  "line": 3,
  "name": "TechFios login validation",
  "description": "",
  "id": "techfios-login-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@OtherLoginFeature"
    }
  ]
});
formatter.before({
  "duration": 2456350200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1504956200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not be abele to login with valid credential",
  "description": "",
  "id": "techfios-login-validation;user-should-not-be-abele-to-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@OtherScenario2"
    },
    {
      "line": 15,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"demo2@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password as \"abc124\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User cliks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 100758700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc124",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 71339300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_cliks_signin_button()"
});
formatter.result({
  "duration": 556665400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 8171300,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.LoginStepDefinition.user_should_land_on_dashboard_page(LoginStepDefinition.java:47)\r\n\tat ✽.Then User should land on dashboard page(features/Other.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 650900300,
  "status": "passed"
});
formatter.uri("features/TechFiosLogin.feature");
formatter.feature({
  "line": 3,
  "name": "TechFios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "duration": 1321949600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be abele to login with valid credential",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-abele-to-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    },
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User cliks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1411886000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 91358200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 79903700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_cliks_signin_button()"
});
formatter.result({
  "duration": 1925003700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 13867700,
  "status": "passed"
});
formatter.after({
  "duration": 706100500,
  "status": "passed"
});
});