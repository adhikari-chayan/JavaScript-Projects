const asyncFunc = () =>{
    return new Promise( resolve => {
        setTimeout(() => resolve('Promise value returned'), 3000);
    });
}

(async function() {
    const result = await asyncFunc();
    console.log(result);
}())
