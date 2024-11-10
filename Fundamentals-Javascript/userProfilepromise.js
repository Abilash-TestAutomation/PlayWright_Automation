function fetchUserId(Userid)
{
    //Create new promise
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(Userid===22)
            {
                resolve({id:22, name:"Abi"});
            }else
            {
                reject("Failed");
            }
        })
    })
}

fetchUserId(22)
.then(userDetails => {
    console.log('User Found:', userDetails.name);
})

.catch(errorMsg =>{
    console.error(errorMsg);
})