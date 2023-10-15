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
   
   w_nav.style.display = "block"
//    let u = document.querySelectorAll(".u")
//    u = [...u]
//    u.forEach((el)=>{
//     el.addEventListener("mouseover",()=>{
//         el.style.borderBottom = "solid #000"
//     })
//    }
//    )
//    u.forEach((el)=>{
//     el.addEventListener("mouseleave",()=>{
//         el.style.borderBottom = "solid #FFF"
//     })
//    }
//    )

   

  
}
async function copyContent() {
    try {
      await navigator.clipboard.writeText(`
      Office No : 12Old Mohaddharath
      BuildingFathima Al Zahra StreetExit
      15 Cross Section
      Po box : 27123, code :11417 Riyadh
      Kingdom Of Saudi Arabia
      phone : 011-4793473 , 011-4793517
      Fax : 011-4785021Mob : 00966-564994448Riyadh,
      Kingdom of Saudi Arabia
      Email : business@oflsa.com
`);
      console.log('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
}
let copy = document.querySelector(".copy")
copy.addEventListener("click", (el)=>{
  copyContent()
} ) 


const output = document.querySelector("#output");


window.addEventListener("scroll", (event) => {
   if(scrollY == 0) {
     // console.log(`scrollTop`)
       rendernew()
    }   else {
    renderold()
  }
  
  });


function rendernew() {
  const nav_c = document.querySelector(".nav_c")
  nav_c.style.backgroundColor = "transparent"
}
function renderold (){
  const nav_c = document.querySelector(".nav_c")
  nav_c.style.backgroundColor = "#0017E5"

}

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (scrollY==0){
    const butc2 = this.document.getElementById('butc2')
    butc2.style.color = '#fff'
    butc2.style.backgroundColor = '#0017E5'
    butc2.style.transition = 'all .1s ease-in'
   }
   else if (st > lastScrollTop) {
    const nav_c = document.querySelector(".nav_c")
    nav_c.style.display="none"
    // nav_c.style.transition = 'all 1s ease-in'
      // downscroll code


   } else if (st < lastScrollTop) {
    const nav_c = document.querySelector(".nav_c")
    nav_c.style.display="flex"
    const butc2 = this.document.getElementById('butc2')
    butc2.style.color = '#0017E5'
    butc2.style.backgroundColor = '#fff'
      // upscroll code
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
