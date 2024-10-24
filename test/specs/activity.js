import {$, expect, browser} from "@wdio/globals"
import Page from "../PageObjects/ultimateQA.js"
import Utils from "../PageObjects/utils.js"
import moment from "moment";
import Contact_List from "../PageObjects/Contact_List.js"
import File from "../PageObjects/File.js";


describe("Webdriver_IO_Activity", () => {
    it.skip("SignUp_TC001", async () => {
        await Page.navigate("https://thinking-tester-contact-list.herokuapp.com/")

        await Utils.waitElement(Page.SignUpButton, 3000, "Sign up btn not found")

        await Utils.clickElement(Page.SignUpButton)

        await Utils.waitElement(Page.SignUpSubmitButton, 3000, "Element not found")

        await Utils.InsertValue(Page.SignUpFirstName, "SampleFirstName")
        await Utils.InsertValue(Page.SignUpLastName, "SampleLastName")
        const strfDateTime = moment(new Date()).format('YYYYMMDDHHMM')
        await Utils.InsertValue(Page.SignUpEmail, `test_${strfDateTime}6@test.com`)
        await Utils.InsertValue(Page.SignUpPassword,"SamplePassword")
        await browser.pause(3000)
        await Utils.clickElement(Page.SignUpSubmitButton)
        await browser.pause(1000)
    })

    it("LogIn_TC002", async () => {
        await Page.navigate("https://thinking-tester-contact-list.herokuapp.com/")

        await Utils.waitElement(Page.SignInButton, 3000, "Login Submit Btn Not Found")

        await Utils.InsertValue(Page.SignInEmail, "test_2024102411106@test.com")
        await Utils.InsertValue(Page.SignInPassword, "SamplePassword")
        await Utils.clickElement(Page.SignInButton)

        await browser.pause(1000)
    })

    it("Add_Contact_TC003", async () => {
        await Page.navigate("https://thinking-tester-contact-list.herokuapp.com/")
        await Utils.waitElement(Page.SignInButton, 3000, "Login Submit Btn Not Found")
        await Utils.InsertValue(Page.SignInEmail, "test_2024102411106@test.com")
        await Utils.InsertValue(Page.SignInPassword, "SamplePassword")
        await Utils.clickElement(Page.SignInButton)
        await Utils.waitElement(Page.addContactLinkBtn, 3000, "Add Contact Btn does not exist")
        await Utils.clickElement(Page.addContactLinkBtn)

        const users = await Contact_List.user_list()
        let iteration = 1
        let arr_name = []
        for (const contact of users) {
            
            for (const key of Object.keys(contact)) {
                await Utils.InsertValue(Page[`addContact${key}`], contact[key]);
            }

            await Utils.clickElement(Page.addContactBtn)

            await Utils.waitElement(Page.linktoProfile, 3000, 5000)
            const verify_name = `${contact.FirstName} ${contact.LastName}`
            arr_name.push(verify_name)
            
            if(iteration < 3)
            {
                await Utils.waitElement(Page.addContactLinkBtn,3000,"Element not found")
                await Utils.clickElement(Page.addContactLinkBtn)
            }

            iteration++
            
        }

        if(users.length == arr_name.length)
        {
            console.log(`All users created has been added : ${arr_name}`)
        }

        await browser.pause(1000)
    })

    it("Edit_Contact_TC004", async () => {
        await Page.navigate("https://thinking-tester-contact-list.herokuapp.com/")
        const users = await Contact_List.user_list()
        await Utils.waitElement(Page.SignInButton, 3000, "Login Submit Btn Not Found")
        await Utils.InsertValue(Page.SignInEmail, "test_2024102411106@test.com")
        await Utils.InsertValue(Page.SignInPassword, "SamplePassword")
        await Utils.clickElement(Page.SignInButton)

        await Utils.waitElement(Page.linktoProfile, 3000, "Link doesnt exist")
        await Utils.clickElement(Page.linktoProfile)
        await Utils.waitElement(Page.linktoEditProfile, 3000, "link doesnt exist")
        await Utils.clickElement(Page.linktoEditProfile)
        const strfDateTime = moment(new Date()).format('YYYYMMDD')
        await Utils.ClearValue(Page.editContactPostalCode)
        await browser.pause(1000)
        await Utils.InsertValue(Page.editContactPostalCode, strfDateTime.slice(0,9))
        await Utils.clickElement(Page.editContactBtn)
        await Utils.waitElement(Page.returnContactListBtn)
        await Utils.clickElement(Page.returnContactListBtn)
        
        const newAddress = await Utils.getObjectText(Page.addressColumn)
        const userAddress = `${users[0].City} ${users[0].Province} ${users[0].PostalCode}`
        await console.log(userAddress)
        if(newAddress != userAddress)
        {
            await console.log("User address has been changed from "+userAddress+" : "+newAddress)
        }

        await browser.pause(1000)
        

    })

    it("Delete_Contact_TC005", async () => {
        await Page.navigate("https://thinking-tester-contact-list.herokuapp.com/")
        const users = await Contact_List.user_list()
        await Utils.waitElement(Page.SignInButton, 3000, "Login Submit Btn Not Found")
        await Utils.InsertValue(Page.SignInEmail, "test_2024102411106@test.com")
        await Utils.InsertValue(Page.SignInPassword, "SamplePassword")
        await Utils.clickElement(Page.SignInButton)
        
        await Utils.waitElement(Page.linktoProfile, 3000, "Element doesnt exist")
        await Utils.clickElement(Page.linktoProfile)
        await Utils.waitElement(Page.deleteBtn, 3000, "Element doesnt exist")
        await browser.pause(1000)
        await Utils.clickElement(Page.deleteBtn)
        await browser.pause(2000)
        await console.log(await browser.getAlertText())
        await browser.acceptAlert()

        await browser.pause(3000)


    })

    it("File_TC006", async () => {
        await Page.navigate("https://thinking-tester-contact-list.herokuapp.com/")
        await File.createTxTfile("./logs/contact_list","Start of contact logging")
        await Utils.waitElement(Page.SignInButton, 3000, "Login Submit Btn Not Found")
        await Utils.InsertValue(Page.SignInEmail, "test_2024102411106@test.com")
        await Utils.InsertValue(Page.SignInPassword, "SamplePassword")
        await Utils.clickElement(Page.SignInButton)
        

        await Utils.waitElement(Page.TableData)
        
        const tableRows = await $$('//tr[@class="contactTableBodyRow"]')
        for(const row of tableRows)
        {   
            const childElements = await row.$$('//td')
            for(const child of childElements)
            {         
                    await File.appendTxtfile('./logs/contact_list', `${await Utils.getObjectText(child)}`) 
            }
            await File.appendTxtfile('./logs/contact_list', '\n')
        }

    })

})