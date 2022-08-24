const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

     //baseUrl:'https://www.way2automation.com/angularjs-protractor/banking/#/login',
     baseUrl:'https://mail.rediff.com/cgi-bin/login.cgi',
     watchForFileChanges:false,
     chromeWebSecurity: false,
     defaultCommandTimeout:5000,

     reporter:"mochawesome",
     reporterOptions: {
       reportDir:"cypress/reports",
       reportFilename:"testresults",
       overwrite:true,
       html:true,
       json:true,
       charts:true,

    }
  },
});


