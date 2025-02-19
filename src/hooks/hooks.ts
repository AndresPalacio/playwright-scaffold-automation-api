import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");


BeforeAll(async function () {
    getEnv();
});

// It will trigger for not auth scenarios
Before({ tags: "not @auth and not @api" }, async function ({ pickle }) {
     const scenarioName = pickle.name + pickle.id;

     fixture.logger = createLogger(options(scenarioName));
    
});

// It will trigger for auth scenarios
Before({ tags: "@auth and not @api" }, async function ({ pickle }) {
        const scenarioName = pickle.name + pickle.id;
        fixture.logger = createLogger(options(scenarioName));
});




