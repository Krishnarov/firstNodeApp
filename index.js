import { log } from 'console';
import { create } from 'domain';
import fs from 'node:fs';
import http, { createServer } from 'http'

const port= process.env.PORT||3000;

const server=createServer((req,res)=>{
    res.setHeader('Content-Type',"text.html")
    if(req.url=='/'){
        res.statusCode=200;
        const a=fs.readFileSync("./index.html")
        res.end(a.toString());
    }
});

server.listen(port,()=>{
  console.log(`server listening on port ${port}`);
    
})
