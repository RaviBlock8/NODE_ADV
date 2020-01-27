const crypto=require('crypto')
process.env.UV_THREADPOOL_SIZE=5



let start=Date.now()
crypto.pbkdf2('a','b',10000,512,'sha512',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        // console.log('1'+res)
        console.log(`1:${Date.now()-start}`)
    }
})

crypto.pbkdf2('a','b',10000,512,'sha512',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        // console.log('2'+res)
        console.log(`2:${Date.now()-start}`)
    }
})
crypto.pbkdf2('a','b',10000,512,'sha512',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        // console.log('3'+res)
        console.log(`3:${Date.now()-start}`)
    }
})
crypto.pbkdf2('a','b',10000,512,'sha512',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        // console.log('4'+res)
        console.log(`4:${Date.now()-start}`)
    }
})
crypto.pbkdf2('a','b',10000,512,'sha512',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        // console.log('4'+res)
        console.log(`5:${Date.now()-start}`)
    }
})