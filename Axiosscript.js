document.getElementById('btn').addEventListener("click",makerequest);

//Check data in console
function makerequest(){
    console.log("Buton Clicked");

}

// 1st get data in console.
function makerequest(){
    console.log("Buton Clicked");
    config={
        method:'get',
        url:'https://dog.ceo/api/breeds/image/random'
    }
    const promiseObj=axios(config)
    promiseObj.then((res)=>{
        console.log(res);
        console.log(res.data[0]);
        // document.getElementById('divdata').innerText=res.data[0];
        document.getElementById("image").setAttribute('src',res.data.message)
        document.getElementById("status").setAttribute('src',res.data.status)
    })
}

