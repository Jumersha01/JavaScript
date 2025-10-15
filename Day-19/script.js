document.getElementById('btn').addEventListener("click",async function(e){
    // let x = window.open("https://google.com");

    // setTimeout(()=>{x.close},2000)
    // window.history.back();
    // window.navigator.geolocation.getCurrentPosition((response)=>{
    //  console.log(response.coords.latitude,response.coords.longitude);
    // },(err)=>{console.log(err)});
   const res = await window.navigator.mediaDevices.getUserMedia({video:true,audio:true});
   document.getElementById('vd').srcObject=res;
   let mes = new SpeechSynthesisUtterance("hellooooooooooooooooooooooo")
   speechSynthesis.speak(mes)
    
})
