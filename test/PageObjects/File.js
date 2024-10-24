import fs from "fs"
import moment from "moment";


class File 
{
    async createTxTfile(filePath,txtContent = "")
    {
        const strfDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        await fs.writeFile(`${filePath}.txt`, `[${strfDateTime}] | ${txtContent} \n`, async (err) => {
            if (err) throw err;
        })  
    }

    async appendTxtfile(filePath, txtContent = "")
    {   
        const strfDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        await fs.appendFile(`${filePath}.txt`, `[${strfDateTime}] | ${txtContent} \n`, {flag:'a+'}, async (err) => {
            if (err) throw err;
        })
    }

    async deleteFolderContent(strFolder)
    {
        const arrDir = await fs.readdirSync(strFolder)
        for (const strFile of arrDir)
        {
            await fs.unlinkSync(`${strFolder}${strFile}`)
        }
        await console.log(`${strFolder} has been cleared`)
    
    }
}


export default new File()