function side( ) {
    let navert = document.getElementById("navert");
    let oneclick = document.getElementById("oneclick");
    let firstside = document.getElementById("firstside");
    let lacker = document.getElementById("lacker");
    let arright = document.getElementById("arright");
    let arrsec = document.getElementById("arrsec");
    let leftside = document.getElementById("leftside");
    let erters = document.getElementById("erters");
    let melter = document.getElementById("melter"); 
    oneclick.addEventListener("click" , ()=>{
        navert.style.width="70%" 
        lacker.style.width="100%" 
        oneclick.style.display="none"
    }) 
    arright.addEventListener("click",()=>{
        firstside.style.display="none";
        arrsec.style.display="flex";
    })
    leftside.addEventListener("click",()=>{
        arrsec.style.display="none";
        firstside.style.display="flex"
    })
    erters.addEventListener("click",()=>{
        firstside.style.display="none"
        arrsec.style.display="flex"
    })
    melter.addEventListener("click",()=>{
        arrsec.style.display="none";
        firstside.style.display="flex";
    })
}side()