import File from "./File"


class ObjectUtil
{

    /**
     * @function 
     * @description insert a value in a input type element
     * @param {*} locator 
     * @param {*} value 
     */
    async InsertValue(locator,value)
    {   
        await File.appendTxtfile(global.filePath, "Started Function: InsertValue")
        await locator.waitForExist()
        await locator.setValue(value)
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: InsertValue - Success : [${strxpath}]`)
    }

    async ClearValue(locator)
    {
        await File.appendTxtfile(global.filePath, "Started Function: ClearValue")
        await locator.waitForExist()
        await locator.clearValue()
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: ClearValue - Success : [${strxpath}]`)
    }

    /**
     * @function clickElement
     * @description will click the element
     * @param {*} locator 
     */
    async clickElement(locator)
    {
        await File.appendTxtfile(global.filePath, "Started Function: clickElement")
        await locator.click()
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: clickElement - Success : [${strxpath}]`)
    }
    /**
     * @function waitElement
     * @description wait for element to exist or appear in the dom
     * @param {*} locator 
     */
    async waitElement(locator, timeOut = 3000, timeOutMessage = "")
    {   
        await File.appendTxtfile(global.filePath, "Started Function: waitElement")
        await locator.waitForExist({timeout:timeOut, timeoutMessage:timeOutMessage})
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: waitElement - Success : [${strxpath}]`)
    }

    /**
     * @function getObjectText
     * @description get the text content of an element
     * @param {*} locator 
     */
    async getObjectText(locator)
    {   
        await File.appendTxtfile(global.filePath, "Started Function: waitElement")
        const text = await locator.getText()
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: getObjectText - Success : [${strxpath}]`)
        return text
    }

    /**
     * @function getObjectValue
     * @description gets the value of an input element
     * @param {*} locator 
     */
    async getObjectValue(locator)
    {
        await File.appendTxtfile(global.filePath, "Started Function: getObjectValue")
        
        const value = await locator.getValue()
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: getObjectValue - Success : [${strxpath}]`)
        return value
    }

    async isSameText(locator, message)
    {
        await File.appendTxtfile(global.filePath, "Started Function: isSameText")
        await expect(locator).toHaveText(message)
        const strxpath = await locator.selector
        await File.appendTxtfile(global.filePath, `Completed Function: isSameText - Success : [${strxpath}]`)
    }
    



}

export default new ObjectUtil()