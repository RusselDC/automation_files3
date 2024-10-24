import { expect, browser, $ } from '@wdio/globals'
import Page from "../PageObjects/ultimateQA.js"
import utils from '../PageObjects/utils.js'
import Reporter from '../PageObjects/reporter.js'

describe('My form submission', () => {
    it('should_submit_the_form_v1', async () => {
        Page.navigate()
      
        await Reporter.addLog("Step 1: Navigate to the browser and url ")
        await utils.waitElement(Page.contactNameEdit, 3000, "Element doesnt exist")
        await browser.takeScreenshot()

        await Reporter.addLog("Step 2: User fill contact name ")
        await utils.InsertValue(Page.contactNameEdit, "Russel Dela Cruz")
        await browser.takeScreenshot()


        await Reporter.addLog("Step 3: User fill contact message ")
        await utils.InsertValue(Page.contactMessagEdit, "Demo Message")
        await browser.takeScreenshot()
        
        
        await Reporter.addLog("Step 4: User click submit button ")
        await utils.clickElement(Page.submitBtn)
        await browser.takeScreenshot()
        

        console.log( await utils.getObjectValue(Page.contactNameEdit))
        await Reporter.addLog("Step 5: Wait for the success to appear ")
        await utils.waitElement(Page.sucessMessageElm, 3000, "Element doesnt Exist")
        await utils.isSameText(Page.sucessMessageElm, "Thanks for contacting us")
        await browser.takeScreenshot()
    })    
})
