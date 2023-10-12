const toggler = document.querySelector(".toggler")
const plus = document.querySelector(".plus")
const cross = document.querySelector(".cross")
const res_nav = document.querySelector(".res_nav")
const home_nav2 = document.querySelector(".home_nav2")
const solns_btn = document.querySelector(".solns_btn")
function plus_btn() {
    arr = ["Air Frieght","Sea Frieght","Road Frieght","Event Logistics","Insurance Service","Oversizeshipment & Project","Customs Clearance","Warehousing & Distribution","Special equipment","Food Storage"]
    
    arr.forEach((s)=> {
        const li = document.createElement("li")
        li.innerHTML = s
        li.id = 'new'
        li.classList.add("new")
        solns_btn.parentNode.insertBefore(li, solns_btn.nextSibling);

    })
    
    
    

}

toggler.addEventListener("click",()=> {
    let el = document.querySelectorAll(".new")
        el = [...el]
        el.map((x)=>{x.remove()})
        plus.innerHTML = '+'
   res_nav.classList.add("visible")
})
cross.addEventListener("click",()=>{
    res_nav.classList.remove("visible")
})

plus.addEventListener("click",()=>{
    if(plus.innerHTML=="+"){
        plus_btn()
        plus.innerHTML = '-'
    
    } else {
        let el = document.querySelectorAll(".new")
        el = [...el]
        el.map((x)=>{x.remove()})
        plus.innerHTML = '+'
    }
    
    

})
let sen = document.querySelectorAll(".sen")
sen = [...sen]
sen.forEach((el)=>{el.addEventListener("mouseover",show_nav)})
sen.forEach((el)=>{el.addEventListener("mouseleave",exit_nav)})
function exit_nav() {
    let in_div = document.querySelector(".in_div")

    in_div.style.width ="0" 
   const w_nav = document.querySelector(".w_nav")
   console.log("e")
   w_nav.style.display = "none"

}

function show_nav() {
   let in_div = document.querySelector(".in_div")
   in_div.style.width ="75vw" 
   const w_nav = document.querySelector(".w_nav")
   console.log("m")
   w_nav.style.display = "block"
   
   

  
}