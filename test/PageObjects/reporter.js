import allure from "@wdio/allure-reporter"
import File from "./File.js"



class Reporter
{
    async addLog(message)
    {
        await File.appendTxtfile(global.filePath, message)
        await allure.addStep(message)
    }

    //async addStep()
    //{
    //    
    //}
}

export default new Reporter()