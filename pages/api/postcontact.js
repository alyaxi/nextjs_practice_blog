import * as fs from "fs"
export default async function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
      let getData = await fs.promises.readdir("contactdetails")
      console.log(getData);
      let data = fs.promises.writeFile(`contactdetails/${getData.length + 1}.json`, JSON.stringify(req.body))
      res.status(200).json(data)
     
    } else {
        res.status(200).json("resolve")
      
    }
  }