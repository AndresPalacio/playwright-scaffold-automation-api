import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import { ApiHelper } from "../../helper/util/api/apiHelper";

import { contextApi } from "../../helper/util/constants";

setDefaultTimeout(60 * 1000 * 2)


Given('User enter the username as {string} and password as {string}', async function (username, password) {


  const apiHelper = await new ApiHelper(contextApi);
    const payload = {
        username: username,
        password: password
    }
    await apiHelper.hitApiEndPoint("post", "/login", payload, 200);
    
});
