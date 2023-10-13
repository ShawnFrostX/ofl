
function scrollFunction(id) {
  let e = document.getElementById(id);
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  });
}

