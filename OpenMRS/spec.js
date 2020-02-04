describe('Protractor Demo App', function() {
	
  it('openMRS Page', function() {
	//When website is not angular page
	browser.waitForAngularEnabled(false);
	
    browser.get('https://demo.openmrs.org/openmrs/login.htm');
	
  });
  
  it ('Access to the openMRS page', function() {
	//Getting elements to type credentials
	//Getting username textbox
	element(by.id('username')).sendKeys('Admin');
	
	//Getting password textbox
	element(by.id('password')).sendKeys('Admin123');
	
	//var sessionLocation = element.all(by.id('Inpatient Ward')); 
	//sessionLocation.click();	
	var parent = element(by.id('sessionLocation'));
	//var child = parent.element(by.className('form-group'));
	parent.element(by.id('Inpatient Ward')).click();

	element(by.id('loginButton')).click();
	
	//TO print something in console
	//console.log(sessionLocation);
	
	//to keep browser open for a while
	//browser.pause();
	
	//browser.waitForAngularEnabled(true);	
	
	// TO DO: EXPECT
	
	//expect(browser.getTitle()).toEqual('Super Calculator');
  });
  
  it('Register a new patient', function() {
	
	// Enter to Register New Patient page through Register a Patient button	
	element.all(by.id('apps')).get(0).element(by.id('referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension')).click();
		
	//Getting elements to type patient data
	//Getting givenName textbox. It's required
	var givenNameTxt = element.all(by.name('givenName'));
	givenNameTxt.sendKeys('Martin');
	
	//Getting middleName textbox
	var middleNameTxt = element.all(by.name('middleName'));
	middleNameTxt.sendKeys('Martinez');
	
	//Getting familyName textbox
	var familyNameTxt = element.all(by.name('familyName'));
	familyNameTxt.sendKeys('Mendez');
	
	//Getting gender sub-menu	
	var genderLabel = element.all(by.css('.doing > ul > li')).get(1);
	genderLabel.click();
	
	//Select female gender
	var femaleGender = element(by.id('gender-field'));
	femaleGender.$('[value="F"]').click();
	
	//Getting birthdate sub-menu	
	var birthdateLabel = element.all(by.css('.doing > ul > li')).get(2);
	birthdateLabel.click();
	
	//Select month option
	var month = element(by.id('birthdateMonth-field'));
	month.$('[value="6"]').click();
	
	browser.pause();
	
  });
  
});
