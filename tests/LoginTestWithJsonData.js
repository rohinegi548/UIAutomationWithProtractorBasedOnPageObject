var LoginObj = require('../pages/Login.js');
var HomeObj = require('../pages/Home.js');
var LoginData = require('../testdata/LoginData.json');

describe('Checking Application Login Functionality, ', function() {
	

LoginData.forEach(function(data, username, password) {
  it('Login with: '+data.username+" and "+data.password, function() {
	  
	LoginObj.get();
	 
	 LoginObj.login(data.username, data.password, data.answer);
     
		expect(HomeObj.isLogoutDisplays());
    
  })
    
	});
	

	afterEach(function() {

			HomeObj.logout();
		
	}) 
  
});
