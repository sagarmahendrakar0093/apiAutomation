const { defineConfig } = require("cypress");
const allureWriter= require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://access.qa.redhat.com",
    env:{
    getCaseApi_Ext:"/hydra/rest/v1/cases/02878741",
    getCaseApi_Int:"/hydra/rest/v1/cases/02879295",
    createCaseAPI_Ext:"/hydra/rest/v1/cases",
    externalOrgAdminKey: "Basic YmR1Y2ExMDE6cmVkaGF0",
    internalKey:"Basic cmhuLXN1cHBvcnQtYmt1bmFsOnJlZGhhdA==",

    },
    setupNodeEvents(on, config) {
      {allureWriter(on, config);
        return config;
        } 
      // implement node event listeners here
      
    },
    
    
  },
});
