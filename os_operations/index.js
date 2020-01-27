const https=require('https')

const start=Date.now()

https.request('https://wwww.google.com',(res)=>{
    res.on('data',()=>{})
    res.on('end',()=>{
        console.log(`time 1: ${Date.now()-start}`)
    })
})