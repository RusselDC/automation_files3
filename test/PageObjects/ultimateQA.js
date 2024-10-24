class Page {

    get contactNameEdit() { return $('//input[@name="et_pb_contact_name_0"]')}
    get contactMessagEdit() { return $('//textarea[@name="et_pb_contact_message_0"]')}
    get submitBtn() { return $('//*[@id="et_pb_contact_form_0"]/div[2]/form/div/button')}
    get sucessMessageElm() {return $('//*[@id="et_pb_contact_form_0"]/div/p')}

    get contactNameEdit2() { return $('//*[@id="et_pb_contact_name_1"]')}
    get contactMessagEdit2() { return $('//*[@id="et_pb_contact_message_1"]')}
    get submitBtn2() { return $('//*[@id="et_pb_contact_form_1"]/div[2]/form/div/button')}
    get sucessMessageElm2() {return $('//*[@id="et_pb_contact_form_1"]/div[1]/ul/li')}
    get captchaElm() { return $('//*[@id="et_pb_contact_form_1"]/div[2]/form/div/div/p/input')}

    get SignUpButton() { return $('//button[@id="signup"]')}
    get SignUpSubmitButton() { return $('//button[@form="add-user"]')}

    get SignUpFirstName() { return $('//input[@id="firstName"]')}
    get SignUpLastName() { return $('//input[@id="lastName"]')}
    get SignUpEmail() { return $('//input[@id="email"]')}
    get SignUpPassword() { return $('//input[@id="password"]')}

    get SignInButton() { return $('//button[@id="submit"]')}

    get SignInEmail() { return $('//input[@id="email"]')}
    get SignInPassword() { return $('//input[@id="password"]')}

    get addContactLinkBtn() { return $('//button[@id="add-contact"]')}
    get addContactBtn() { return $('//button[@type="submit"]')}

    get addContactFirstName() { return $('//input[@id="firstName"]')}
    get addContactLastName() { return $('//input[@id="lastName"]')}
    get addContactBirthDate() { return $('//input[@id="birthdate"]')}
    get addContactEmail() { return $('//input[@id="email"]')}
    get addContactPhone() { return $('//input[@id="phone"]')}
    get addContactStreet1() { return $('//input[@id="street1"]')}
    get addContactStreet2() { return $('//input[@id="street2"]')}
    get addContactCity() { return $("//input[@id='city']") }
    get addContactProvince() { return $('//input[@id="stateProvince"]') }
    get addContactPostalCode() { return $('//input[@id="postalCode"]') }
    get addContactCountry() { return $('//input[@id="country"]') }

    get linktoProfile() {return $('//tr[@class="contactTableBodyRow"]//td[2]')}
    get linktoEditProfile() {return $(`//button[@onclick="location.href='/editContact'"]`)}
    get editContactPostalCode() {return $('//input[@id="postalCode"]')}
    get editContactBtn() {return $('//button[@form="edit-contact"]')}
    get returnContactListBtn() {return $('//button[@id="return"]')}
    get addressColumn() {return $('//tr[@class="contactTableBodyRow"]//td[7]')}

    get TableData() {return $('//tr[@class="contactTableBodyRow"]')}

    get deleteBtn() {return $('//button[@id="delete"]')}


    async navigate(url = "https://ultimateqa.com/filling-out-forms/") {
        await browser.url(url)
        
    }
}


export default new Page()