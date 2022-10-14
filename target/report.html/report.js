$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login into application using username \"john\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_Netbanking_Landing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 44
    },
    {
      "val": "1234",
      "offset": 64
    }
  ],
  "location": "stepDefinition.User_login__application(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Home_page_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User signup with following details",
  "rows": [
    {
      "cells": [
        "nitin",
        "password",
        "email@gmail.com",
        "India",
        "12345"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_Netbanking_Landing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.User_signup(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Home_page_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login in to application using username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "application-login;homepage-default-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "application-login;homepage-default-login;;1"
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 26,
      "id": "application-login;homepage-default-login;;2"
    },
    {
      "cells": [
        "username2",
        "password2"
      ],
      "line": 27,
      "id": "application-login;homepage-default-login;;3"
    },
    {
      "cells": [
        "username3",
        "password3"
      ],
      "line": 28,
      "id": "application-login;homepage-default-login;;4"
    },
    {
      "cells": [
        "username4",
        "password4"
      ],
      "line": 29,
      "id": "application-login;homepage-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login in to application using username username1 and password password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_Netbanking_Landing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    },
    {
      "val": "1",
      "offset": 75
    }
  ],
  "location": "stepDefinition.User_login_in_to_application(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Home_page_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login in to application using username username2 and password password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_Netbanking_Landing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 52
    },
    {
      "val": "2",
      "offset": 75
    }
  ],
  "location": "stepDefinition.User_login_in_to_application(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Home_page_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login in to application using username username3 and password password3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_Netbanking_Landing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 52
    },
    {
      "val": "3",
      "offset": 75
    }
  ],
  "location": "stepDefinition.User_login_in_to_application(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Home_page_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Homepage default login",
  "description": "",
  "id": "application-login;homepage-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login in to application using username username4 and password password4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_Netbanking_Landing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 52
    },
    {
      "val": "4",
      "offset": 75
    }
  ],
  "location": "stepDefinition.User_login_in_to_application(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Home_page_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.Cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
});