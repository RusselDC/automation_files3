import {$, expect, browser} from "@wdio/globals"
import Reporter from "../PageObjects/reporter.js"
import Page from "../PageObjects/ultimateQA.js"
import Utils from "../PageObjects/utils.js"

describe('captcha error', () => {
    it('should_return_error_in_captcha', async() => {
        await Page.navigate()
        await browser.takeScreenshot()

        await Reporter.addLog("Step 1 : Wait for name form input to exist in the dom")
        await Utils.waitElement(Page.contactNameEdit2, 3000, "Element doesnt exist")
        await browser.takeScreenshot()

        await Reporter.addLog("Step 2 : Insert the name in the name form input")
        await Utils.InsertValue(Page.contactNameEdit2, "Russel Dela Cruz")
        await await browser.takeScreenshot()

        await Reporter.addLog("Step 3 : Insert the message in message form input")
        await Utils.InsertValue(Page.contactMessagEdit2, "Demo Message")
        await browser.takeScreenshot()

        await Reporter.addLog("Step 4 : Insert the wrong value in the captcha")
        await Utils.InsertValue(Page.captchaElm, "30")
        await browser.takeScreenshot()
        
        await Reporter.addLog("Step 5 : Click the submit button")
        await Utils.clickElement(Page.submitBtn2)
        await browser.takeScreenshot()

        await Reporter.addLog("Step 6 : Verify the confirmation")
        await Utils.waitElement(Page.sucessMessageElm2, 3000, "Element doesnt exist")
        await Utils.isSameText(Page.sucessMessageElm2, "You entered the wrong number in captcha.")
        await browser.takeScreenshot()
        
    

    })
})