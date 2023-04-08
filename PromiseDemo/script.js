//https://blog.logrocket.com/guide-promises-node-js/
function getSumNum(a,b){
    const customPromise = new Promise((resolve, reject)=>{
        const sum = a + b;
        if(sum <= 5){
            resolve(sum);
        }else{
            reject(new Error('Oops!.. Number must be less than 5'))
        }        
    });

    return customPromise;
}

getSumNum(1,3)
.then(data => {
    console.log(`initial data: ${data}`);
    let value = data +1;
    return value;
})
.then(newData =>{
    console.log(`modified data: ${newData}`);
})
.catch(err => {
    console.log(err)
  })
