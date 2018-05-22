var LoginPage = function() {
	
  var username = element(by.xpath("//input[@ng-model='LoginViewModel.UserName']"));
  var password = element(by.xpath("//input[@ng-model='LoginViewModel.Password']"));
  var loginBtn = element(by.xpath("//input[@type='submit' and @value='Log In']"));
  var securityAns = element(by.xpath("//input[@ng-model='twoFactorModel.answer']"));
  var proceedBtn = element(by.xpath("//input[@type='submit' and @value='Proceed']"));

  this.get = function() {
    browser.get('https://yourapplicationurl.com');
    browser.manage().window().maximize();

  };
  

 
  
  function setUsername(user){
	  
	  username.sendKeys(user);
	  
  };
  
  
  
 function setPassword(pass){
	  
	  password.sendKeys(pass);
	  
  };
  
 
	  
 function setAnswer(ans){
		  
		  securityAns.sendKeys(ans);
		  
	  };
	  
 this.login = function(user, pass, ans){
			
	 setUsername(user);
	 setPassword(pass);
	 loginBtn.click();
	 setAnswer(ans);
	 proceedBtn.click();
	  
	 };
	  
 /* this.getGreetingText = function() {
    return greeting.getText();
  };*/
  
  
};

module.exports = new LoginPage();
