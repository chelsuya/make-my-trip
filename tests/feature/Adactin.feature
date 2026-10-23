Feature: Validate Adactin hotel booking application

Scenario: login with valid credentials 
Given Navigate to adactin application
When enter the username in username field
And enter the password in password field
Then click the login button


Scenario Outline: login with valid credentials 
Given Navigate to adactin application
When enter the "<username>" in username field
And enter the "<password>" in password field
Then click the login button

Examples:
|    username  |  password   |
| AlexChelsuya |  Ada_1997   |
|   harishr97  |    12345    |
|   manish121  |  manish@121 |
