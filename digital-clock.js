setInterval(()=>{
    let date=new Date()
    let timee=date.toLocaleTimeString()
    let dg=document.getElementById('digital-clock')
    dg.innerHTML=timee
},1000)