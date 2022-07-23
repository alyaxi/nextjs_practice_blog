// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
export default function handler(req, res) {
    fs.readFile(`data/${req.query.slug}.json`, "utf-8",(err, data) => {
        if (err) {
            res.status(500).json("Internal Error")
        }else {
            console.log(req.query);
            res.status(200).json(JSON.parse(data))
        }
        console.log(data);
    })
  
  }
  