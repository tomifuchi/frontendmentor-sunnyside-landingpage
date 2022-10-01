//Smooth scroll to view by id
function scrollMain() {
  let e = document.getElementById("main");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}