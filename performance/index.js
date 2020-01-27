const express=require('express')
const app=express()
const cluster=require('cluster')

console.log(cluster.isMaster)

if(cluster.isMaster){
    //this created three instances of server
    cluster.fork()
    cluster.fork()
    cluster.fork()
}else{
    let dowork=()=>{
        start=Date.now()
        while(Date.now()-start<=5000){}
    }
    
    app.get('/',(req,res)=>{
        dowork()
        res.send('work done')
    })

    app.get('/fast',(req,res)=>{
        res.send('this was fast')
    })
    
    
    
    app.listen(5000,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('server started')
        }
    })
}


