async function IPromise(name){
    let res = await name
    return res
}

IPromise('Soldier')
.then(data=>{
   return data
})
.then(data=>{
    // another task
    return data
})
.then(data=>{
    console.log(data)
})