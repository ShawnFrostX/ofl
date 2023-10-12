function scrollFunction1() {
  let e = document.getElementById("bluebox");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}
function scrollFunction2() {
  let e = document.getElementById("qmap");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  });
}
function scrollFunction3() {
  let e = document.getElementById("aboutusmain");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  });
}