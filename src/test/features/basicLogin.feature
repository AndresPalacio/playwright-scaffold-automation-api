Feature: Login basic api 
    
    @login 
    Scenario Outline: Authenticated Users - Login
        Given User enter the username as "<username>" and password as "<password>"
        Then the user should be logged in

        Examples:
            | username | password  |
            | admin   | password123 |

