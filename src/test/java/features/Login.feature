Feature: Application Login

  Scenario: Homepage default login
    Given User is on Netbanking landing page
    When User login into application using username "john" and password "1234"
    Then Home page is populated
    And Cards are displayed


  Scenario: Homepage default login
    Given User is on Netbanking landing page
    When User signup with following details
    | nitin | password | email@gmail.com | India | 12345 |

    Then Home page is populated
    And Cards are displayed

  Scenario Outline: Homepage default login
    Given User is on Netbanking landing page
    When User login in to application using username <username> and password <password>
    Then Home page is populated
    And Cards are displayed

    Examples:
    |username|password|
    |username1|password1|
    |username2|password2|
    |username3|password3|
    |username4|password4|
