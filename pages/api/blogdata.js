// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
export default async function handler(req, res) {
  let data = await fs.promises.readdir("data")
  data = data.slice(0,req.query.count)
  let allBlog = []
  console.log(data);
  for (let index = 0; index <  data.length; index++) {
   const item = data[index];
   console.log(item);
   let myFile = await fs.promises.readFile("data/" + item, "utf-8")
   let allBlogData =JSON.parse(myFile)
   allBlog.push(allBlogData)
  }
   res.status(200).json(allBlog)
  }
  