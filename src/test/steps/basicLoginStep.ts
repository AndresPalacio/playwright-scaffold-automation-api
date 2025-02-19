import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { ApiHelper } from "../../helper/util/api/apiHelper";

import { contextApi } from "../../helper/util/constants";


let responseApi: any;

Given('User enter the username as {string} and password as {string}', async function (username, password) {


  const apiHelper = await new ApiHelper(contextApi);
    const payload = {
        username: username,
        password: password
    }
    responseApi = await apiHelper.hitApiEndPoint("post", "/login", payload, 200);
    console.log(responseApi);
});


Then('the user should be logged in', async function () {
    // Write code here that turns the phrase above into concrete actions
    expect(responseApi).toHaveProperty("token");
  });