import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect,request } from "@playwright/test";
import { ApiHelper } from "../../helper/util/api/apiHelper";
import { fixture } from "../../hooks/pageFixture";
import { contextApi } from "../../helper/util/constants";


let responseApi: any;

Given('User enter the username as {string} and password as {string}', async function (username, password) {
    const apiContext = await request.newContext();
    const apiHelper = await new ApiHelper(apiContext);
    const payload = {
        username: username,
        password: password
    }
    responseApi = await apiHelper.invokePostApi("/auth", payload,200);
    fixture.logger.info("Searching for a book: " + JSON.stringify(responseApi));
   
    console.log("data example" + responseApi);
});


Then('the user should be logged in', async function () {
    // Write code here that turns the phrase above into concrete actions
    expect(responseApi).toHaveProperty("token");
});