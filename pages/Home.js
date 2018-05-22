var HomePage = function() {
	
  var logoutBtn = element(by.className('logoutbtn'));
  
  this.isLogoutDisplays = function(){
	  
	  var flag = logoutBtn.isDisplayed();
	  return flag
	  
  };
  
  
  this.logout = function(){
		
		logoutBtn.click();
		
		 };
};

module.exports = new HomePage();