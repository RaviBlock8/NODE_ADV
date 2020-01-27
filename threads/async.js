const https=require('https')

let start=Date.now()
https.request('https://www.google.com',(res)=>{
    res.on('data',()=>{})
    res.on('end',()=>{
        console.log(Date.now()-start)
    })
}).end()