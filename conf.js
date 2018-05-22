let SpecReporter = require('jasmine-spec-reporter').SpecReporter;


// A reference configuration file.

exports.config = {
  
  // ----- How to setup Selenium -----

  // There are three ways to specify how to use Selenium. Specify one of the following:
  
  // 1. seleniumServerJar - to start Selenium Standalone locally.
  // 2. seleniumAddress - to connect to a Selenium server which is already running.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.
  // The location of the selenium standalone server .jar file.
  
  //seleniumServerJar: '/usr/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.12.0.jar',
  
  // The port to start the selenium server on, or null if the server should find its own unused port.
  
  seleniumPort: null,
  
  // Chromedriver location is used to help the selenium standalone server
  // find chromedriver. This will be passed to the selenium jar as
  // the system property webdriver.chrome.driver. If null, selenium will
  // attempt to find chromedriver using PATH.
  
  //geckoDriver: '/usr/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.20.1',

  // Additional command line options to pass to selenium. For example,
  // if you need to change the browser timeout, use
  // seleniumArgs: ['-browserTimeout=60'],
  
  seleniumArgs: [],
  
  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  
  sauceUser: null,
  sauceKey: null,
  
  // ----- What tests to run -----
  // Spec patterns are relative to the location of this config.
  
//   specs: [
//     './tests/AllevaLoginTest2.js'
//   ],
//getPageTimeout: 30000,

  suites:{

    UsingJsonDataProvider: './tests/LoginTestWithJsonData.js',
    UsingJasmineDataProvider: './tests/LoginTestWithJasmineDataProvider.js'
  },
  
  // ----- Capabilities to be passed to the webdriver instance ----
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
  
  capabilities: {
    'browserName': 'chrome'
  },
  
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  
  baseUrl: 'http://localhost:9999',
  
  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>  
  
  rootElement: 'body',
  framework: 'jasmine2',

  onPrepare: function() {
  
	  jasmine.getEnv().addReporter(new SpecReporter({
	      displayFailuresSummary: true,
	      displayFailuredSpec: false,
	      displaySuiteNumber: true,
	      displaySpecDuration: true
	    }));
        
    // Add a screenshot reporter:
      var AllureReporter = require('jasmine-allure-reporter');
	  jasmine.getEnv().addReporter(new AllureReporter({
	      resultsDir: 'allure-results'
      }));
    
	  jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    }); 
  },
  

  // ----- Options to be passed to minijasminenode -----
  
  jasmineNodeOpts: {
  
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: false,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 2500000
  }
};
