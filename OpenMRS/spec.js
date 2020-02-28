
describe('Protractor Demo App', function() {
	
  it('openMRS Page', function() {
	//When website is not angular page
	browser.waitForAngularEnabled(false);
	
    browser.get('https://demo.openmrs.org/openmrs/login.htm');
	
  });
  
  it ('Access to the openMRS page', function() {
	  
	//Getting elements to type credentials
	
	//Getting username textbox
	var userNameTxt = element(by.id('username'));
	userNameTxt.sendKeys('Admin');
	
	//Getting password textbox
	var passwordTxt = element(by.id('password'));
	passwordTxt.sendKeys('Admin123');
	
	//Getting session Location link
	//var sessionLocation = element.all(by.id('Inpatient Ward')); 
	//sessionLocation.click();	
	var sessionLocationLink = element(by.id('sessionLocation'));
	sessionLocationLink.element(by.id('Inpatient Ward')).click();

	//Getting login button
	var loginBtn = element(by.id('loginButton'));
	loginBtn.click();
	
	//TO print something in console
	//console.log(sessionLocation);
	
	//browser.waitForAngularEnabled(true);	
	
	// TO DO: EXPECT
	
	//expect(browser.getTitle()).toEqual('Super Calculator');
  });
  
  it('Register a new patient', function() {
	
	// Enter to Register New Patient page through Register a Patient button	
	var newPatientBtn = element.all(by.id('apps')).get(0).element(by.id('referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension'));
	newPatientBtn.click();
		
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
	var genderLbl = element.all(by.css('.doing > ul > li')).get(1);
	genderLbl.click();
	
	//Select female gender option
	var femaleGenderLst = element(by.id('gender-field'));
	femaleGenderLst.$('[value="F"]').click();
	
	//Getting birthdate sub-menu	
	var birthdateLbl = element.all(by.css('.doing > ul > li')).get(2);
	birthdateLbl.click();
	
	//Getting birthdateDay textbox
	var birthdateDayTxt = element(by.id('birthdateDay-field'));
	birthdateDayTxt.sendKeys('10');
	
	//Select month dropdownlist option
	var monthDdl = element(by.id('birthdateMonth-field'));
	monthDdl.$('[value="6"]').click();
	
	//Getting birthdateYear textbox
	var birthdateYearTxt = element(by.id('birthdateYear-field'));
	birthdateYearTxt.sendKeys('1996');
	
	//Getting address sub-menu	
	var addressLbl = element.all(by.css('.doing > ul > li')).get(3);
	addressLbl.click();
	
	//Getting address textbox
	var addressTxt = element(by.id('address1'));
	addressTxt.sendKeys('Av 62 - 45');
	
	//Getting phone Number sub-menu	
	var phoneNumberLbl = element.all(by.css('.doing > ul > li')).get(4);
	phoneNumberLbl.click();
	
	//Getting phone Number textbox
	var phoneNumberTxt = element.all(by.name('phoneNumber'));
	phoneNumberTxt.sendKeys('541207894');
	
	//Getting relatives Number sub-menu	
	var relativesLbl = element.all(by.css('.doing > ul > li')).get(5);
	relativesLbl.click();
	
	//Select relationship type dropdownlist option
	var relationshipTypeDdl = element(by.id('relationship_type'));
	relationshipTypeDdl.$('[value="2a5f4ff4-a179-4b8a-aa4c-40f71956ebbc-B"]').click();
	
	//Getting person Name textbox
	var personNameTxt = element.all(by.css('.person-typeahead'));
	personNameTxt.sendKeys('test');
	
	//Adding a new row of patient
	var plusIcon = element.all(by.css('.icon-plus-sign')).last();
	plusIcon.click();
	
	//Removing a row of patient
	var minusIcon = element.all(by.css('.icon-minus-sign')).last();
	minusIcon.click();
	
	//Getting confirm sub-menu	
	var confirmLbl = element(by.id('confirmation_label'));
	confirmLbl.click();
	
	//Getting confirm button	
	var confirmBtn = element(by.id('submit'));
	confirmBtn.click();
	
  });
  
  it ('Access to the Contact Info Page', function() {
	
	//Adding a note
	//var noteIcon = element.all(by.css('.icon-sticky-note'));
	//noteIcon.click();
		
	var selectIcon = element.all(by.css('.toggle-icon'));
	selectIcon.click();
	
	//browser.pause();
	
	var pencilIcon = element.all(by.css('.icon-pencil'));
	pencilIcon.click();
	
	
	browser.pause();
	
  });
  
});
