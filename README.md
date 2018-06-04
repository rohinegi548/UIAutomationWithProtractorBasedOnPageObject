<pre>
<b>#protractor_practice</b>
<h2>UI Automation with Protractor</h2><br>
Sample protractor based UI automation with page object pattern
<hr>
<b>Introduction</b><br>
Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would. It plays an important role in the Testing of AngularJS applications and works as a Solution integrator combining powerful technologies like Selenium, Jasmine, Web driver, etc. It is intended not only to test AngularJS application but also for writing automated regression tests for normal Web Applications as well. 

<br><b>Why needed:</b>
Angular JS applications have some extra HTML attributes like ng-repeater, ng-controller, ng-model.., etc. which are not included in Selenium locators. Selenium is not able to identify those web elements using Selenium code. So, Protractor on the top of Selenium can handle and controls those attributes in Web Applications. 
<ul>Installation: You would need these before you jump into protractor world:
    <li> Java should be installed on your system. </li>
    <li>NodeJS, to install protractor you should have npm manager install which comes by default with NodeJS </li></ul>

<br><p>Install NodeJS from https://nodejs.org/. <br>
    Verify it if has been installed using terminal type, either node -v or node --version, same for npm too. you will see output like this:<br>
    <img src="https://github.com/rohinegi548/UIAutomationWithProtractorBasedOnPageObject/blob/master/images/Screenshot%20from%202018-05-22%2016-34-45.png"/>

<p>Install protractor using this command: sudo npm install -g protractor (-g option for install it in global location) or if want to use locally for particular project use sudo npm install protractor –save.

<p>Verify using this:
    <img src="https://github.com/rohinegi548/UIAutomationWithProtractorBasedOnPageObject/blob/master/images/Screenshot%20from%202018-05-22%2016-44-35.png"/>


<p>Now you have done with setup of protractor, to test your setup you can run example conf.js provided by protractor. Go to node_modules/protractor/example folder and type this command: you will see your browser has invoked and tests are executing.
    <img src="https://github.com/rohinegi548/UIAutomationWithProtractorBasedOnPageObject/blob/master/images/Screenshot%20from%202018-05-22%2016-49-21.png"/>


Now you can go ahead with your advance level tests configuration and management.</p>
<hr>

<b>-------------------------------------------Main Concepts-----------------------------------------------------------</b>
<br>For page object pattern I have used project structure like this:
<li>-pages</li>
<li>-testdata</li>
<li>-tests</li><br>

<p>All pages like login, homepage etc would be come under ‘pages’ folder where all the elements are stored and actions are defined for them.

<li>‘tests’ folder will contain all the tests which we are going to verify from the functionality point of view like Login/Logout/Registration etc. Here we’ll create page objects of pages defined in ‘pages’ and will call the actions mentioned over there.
</li>
<p>‘testdata’ will contains either your json of js file used for passing multiple set of data into the test for example:
<li>-verifying login with valid username/password</li>
<li>-verifying login with invalid username/password</li>

<br><b>Project Structure:</b>
<img src="https://github.com/rohinegi548/UIAutomationWithProtractorBasedOnPageObject/blob/master/images/Screenshot%20from%202018-05-22%2017-33-51.png"/>


<p>Additionally jasmine is inbuilt framework comes with protractor, so if you are going to use jasmine spec reporter  you have to install it :

<br>$ npm install jasmine-spec-reporter --save

and define them in conf.js

<br>let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

<br>onPrepare: function() {
   <br>jasmine.getEnv().addReporter(new SpecReporter({
   <br>displayFailuresSummary: true,
   <br>displayFailuredSpec: false,
   <br>displaySuiteNumber: true,
   <br>displaySpecDuration: true
   <br>}));
<br>}


<br><b>Reading data using Json file:</b><br>

sample json file content: 

[
<br>{ 
<br>"username" : "rohitnegi",
<br>"password" : "Test@12345",
<br>"answer" : "dehradun"
<br>},

<br>{
<br>"username" : "testuser",
<br>"password" : "Test@12345",
<br>"answer" : "dehradun"
<br>}

<br>]

 

<br><b>How to use in your test:</b><br>

var LoginData = require('../testdata/LoginData.json');


<br>LoginData.forEach(function(data, username, password) {
<br>it('Login with: '+data.username+" and "+data.password, function() {
   
  <br>LoginObj.get();
   
   <br>LoginObj.login(data.username, data.password, data.answer);
    <br>expect(HomeObj.isLogoutDisplays());
<br>})
  <br>});


<br><b>Reading data using JS files: more usable and understandable</b><br>

'use strict';

<br>module.exports = {
<br>LoginWithValidUserPasswd: {
<br>'Valid Username/Password': {username: 'rohitnegi', password: 'Test@12345', answer: 'dehradun'},
<br>//'Invalid Username/Correct Password': {username: 'testuser', password: 'Test@12345', answer: 'kusum'},
<br>//'Invalid Username/Invalid Password': {username: 'testuser', password: 'Test@1234', answer: 'kusum'},
<br>//'Valid Username/Invalid Password': {username: 'rohitnegi', password: 'Test@1234', answer: 'kusum'}
<br>},

<br>LoginWithInvalidUserPasswd: {
<br>// 'Valid Username/Password': {username: 'rohitnegi', password: 'Test@12345', answer: 'dehradun'},
<br>'Invalid Username/Password': {username: 'testuser', password: 'Test@12345', answer: 'kusum'},
<br>//'Invalid Username/Invalid Password': {username: 'testuser', password: 'Test@1234', answer: 'kusum'},
<br>//'Valid Username/Invalid Password': {username: 'rohitnegi', password: 'Test@1234', answer: 'kusum'}
<br>}
<br>}


<br><b>How to use in your tests:</b><br>

<br>For this, first you have to install jasmine data provider by: <br>
<br>$ npm install jasmine-data-provider --save<br><br>

after this you have to call ‘using’ with you test to pass data

<br>var LoginData = require('../testdata/LoginData.js');
<br>var using = require('jasmine-data-provider');

<br>using(LoginData.LoginWithValidUserPasswd, function(data, description) {
<br>it('Login with: '+description, function() {
     
    <br>LoginObj.get();
     
     <br>LoginObj.login(data.username, data.password, data.answer);
     
<br>expect(HomeObj.isLogoutDisplays());
<br>})
    <br>});


<p><b>Reporting</b>: Allure is awesome reporting framework which you can use to generate test results having capability to attach screenshots as well.

<br><b>How to use: You have to install jasmine-allure-reporter</b><br>
<br>$ npm install jasmine-allure-reporter –save<br>

After installation these packages you can find them under node_modules folder.<br>

<p>You have to configure it in conf.js to work, so whenever you run your test it will generate allure-results directory with some json files that will be used further to generate allure report.
<br>
onPrepare: function() {

<br>// Add a screenshot reporter:
<br>var AllureReporter = require('jasmine-allure-reporter');
   <br>jasmine.getEnv().addReporter(new AllureReporter({
   <br>resultsDir: 'allure-results'
<br>}));
  <br> jasmine.getEnv().afterEach(function(done){
<br>browser.takeScreenshot().then(function (png) {
<br>allure.createAttachment('Screenshot', function () {
<br>return new Buffer(png, 'base64')
<br>}, 'image/png')();
<br>done();
<br>})
<br>}); 
<br>}

<br><br><p>One last thing, as everytime your test will run so many json files will generate under allure-results directory. By default earlier generated files does not get deleted/removed, so when allure report generates, it’ll aggregate results for all the data not the latest run.

<br>To overcome this problem you can use maven:<br>

<br>$ sudo apt-get install maven

<br>Now before executing your tests you can clean your not required files using ‘clean’ goal of maven using ‘mvn clean’

<br>For this you can find sample file ‘pom.xml’ in the project folder where you can define which directories or files need to remove once ‘mvn clean’ fires.

<br>To generate allure, you need to run this command: $ mvn site , after protractor execution for tests. 

<br>So your execution should be as follows:

<br>$ mvn clean
<br>$ protractor conf.js
<br>$ mvn site

<br><p>Now you can go to generated folder target/site/allure-maven-plugin and find index.html, which is the allure report for your test results. Launch it in firefox, you’ll see report.

<br>Chrome  has some security restrictions for ajax based, so report will not load properly in the chrome   .
<br>In case you want to launch it in chrome you can use either jetty server
<br>mvn jetty:run -Djetty.port=1234 and launch in chrome using localhost:1324.

<br>You can find jetty configuraton in pom.xml too.

<br>In case you like it, please do share, hit like...
</pre>
