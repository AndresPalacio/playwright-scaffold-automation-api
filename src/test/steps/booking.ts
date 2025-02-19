import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect, request } from "@playwright/test";
import { ApiHelper } from "../../helper/util/api/apiHelper";  // Import actualizado

setDefaultTimeout(60 * 1000 * 2);

When('user get booking list', async function () {
    /* Test Flow
        1. Hit API endpoint
        2. Verify API status code
        3. Verify JSON Response
        4. Verify JSON Schema
    */
    console.log("This will make GET call to https://restful-booker.herokuapp.com/booking with no authentication");

    // Inicializa el contexto de solicitud
    const apiContext = await request.newContext();
    const apiHelper = new ApiHelper(apiContext);

    const responseMsg = await apiHelper.invokeGetApi("/booking");
    console.log(JSON.stringify(responseMsg));
    for (let index = 0; index < responseMsg.length; index++) {
        console.log(`BookingId : ${responseMsg[index].bookingid}`);
        expect(responseMsg[index].bookingid).not.toBeNull();
    }
});


When('user create new book with payload', async function (docString) {
    /* Test Flow
        1. Hit API endpoint
        2. Verify API status code
        3. Verify JSON Response
        4. Verify JSON Schema
    */
    console.log("This will make POST call to https://restful-booker.herokuapp.com/booking with no authentication");

    // Inicializa el contexto de solicitud
    const apiContext = await request.newContext();
    const apiHelper = new ApiHelper(apiContext);

    // Parse the payload from the feature file
    const payload = JSON.parse(docString);


    const responseMsg = await apiHelper.invokePostApi("/booking", payload , 200);
    console.log(JSON.stringify(responseMsg));
    for (let index = 0; index < responseMsg.length; index++) {
        console.log(`BookingId : ${responseMsg[index].bookingid}`);
        expect(responseMsg[index].bookingid).not.toBeNull();
    }
});



