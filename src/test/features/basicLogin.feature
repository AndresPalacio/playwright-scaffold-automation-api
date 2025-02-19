Feature: Login basic api 
    
    @login
    Scenario Outline: Authenticated Users - Login
        And User enter the username as "<username>"
        And User enter the password as "<password>"
        Then the user should be logged in

        Examples:
            | username | password  |
            | admin   | password123 |

