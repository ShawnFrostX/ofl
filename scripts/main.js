const toggler = document.querySelector(".toggler")
const plus = document.querySelector(".plus")
const cross = document.querySelector(".cross")
const res_nav = document.querySelector(".res_nav")
const home_nav2 = document.querySelector(".home_nav2")
const solns_btn = document.querySelector(".solns_btn")


function scrollFunction(id) {
    let e = document.getElementById(id);
    console.log(e)
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }
  
  


function plus_btn() {
    arr = ["Air Frieght","Sea Frieght","Road Frieght","Event Logistics","Insurance Service","Oversizeshipment & Project","Customs Clearance","Warehousing & Distribution","Special equipment","Food Storage"]

    arrid = ['zmbox0','zmbox1','zmbox1','zmbox2','zmbox3','zmbox4','zmbox3','zmbox4','zmbox5','zmbox5']
    
// cursor pointer aakkanam --salah:)

    arr.forEach((s,index)=> {
        const li = document.createElement("li")
        li.innerHTML = s
        const id = arrid[index] 
        li.addEventListener('click',() => {scrollFunction(id)} )
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
   in_div.style.width ="50vw" 
   const w_nav = document.querySelector(".w_nav")
   console.log("m")
   w_nav.style.display = "block"
   
   

  
}