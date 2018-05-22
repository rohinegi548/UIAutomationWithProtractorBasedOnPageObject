var LoginObj = require('../pages/Login.js');
var HomeObj = require('../pages/Home.js');
var LoginData = require('../testdata/LoginData.js');
var using = require('jasmine-data-provider');

describe('Checking Application Login Functionality, ', function() {
	

using(LoginData.LoginWithValidUserPasswd, function(data, description) {
  it('Login with: '+description, function() {
	  
	LoginObj.get();
	 
	 LoginObj.login(data.username, data.password, data.answer);
	 
    expect(HomeObj.isLogoutDisplays());
    
  })
    
	});
	

using(LoginData.LoginWithInvalidUserPasswd, function(data, description) {
		it('Login with: '+description, function() {
			
		LoginObj.get();
		 
		 LoginObj.login(data.username, data.password, data.answer);
		 
			expect(!HomeObj.isLogoutDisplays());
			
		})
			
		});

afterEach(function() {

			HomeObj.logout();
		
	}) 
  
});