describe('Protractor Demo App', function() {
  it('Url', function() {
	//When website is not angular page
	browser.waitForAngularEnabled(false);
	
    browser.get('https://demo.openmrs.org/openmrs/login.htm');

    //expect(browser.getTitle()).toEqual('Super Calculator');

	//Getting elements to type credentials
	//Getting username textbox
	element(by.id('username')).sendKeys('Admin');
	
	//Getting password textbox
	element(by.id('password')).sendKeys('Admin123');
	
	var sessionLocation = element.all(by.id('Inpatient Ward'));
	sessionLocation.click();
	
	//TASK: determine how to get elements by id in hierarchy
	//essionLocation[0].click();
	
	element(by.id('loginButton')).click();
	
	//TO print something in console
	//console.log(sessionLocation);
	
	//to keep browser open for a while
	browser.pause();
	
	//browser.waitForAngularEnabled(true);	
  });
});