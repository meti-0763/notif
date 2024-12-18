let tg = document.querySelector("#toggle-btn")
const accountLink = document.querySelector("a[href='#account']");
const info = document.querySelector("a[href='#info']");
const massage = document.querySelector("a[href='#message']");
const contact = document.querySelector("a[href='#contact']");

tg.addEventListener("click",()=>{
    tg.classList.toggle("active")
    if(tg.className=="active"){
        console.log("ff");
        accountLink.style.transform="translate(150px,0px)"
        info.style.transform="translate(150px,90px)"
        massage.style.transform="translate(90px,150px)"
        contact.style.transform="translate(0px,150px)"  
    }else{
        accountLink.style.transform="translate(0px,0px)"
        info.style.transform="translate(0px,0px)"
        massage.style.transform="translate(0px,0px)"
        contact.style.transform="translate(0px,0px)" 
    }
})

