Feature: Get booking list

@api
  Scenario: Booking list should be success
    When user get booking list

@api
  Scenario: Create new booking should be success
   When user create new book with payload
      """
      {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
      }
      """