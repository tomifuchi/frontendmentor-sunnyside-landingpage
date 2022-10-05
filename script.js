//Smooth scroll to view by id
function scrollMain() {
  let e = document.getElementById("main");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

//Mb button
const hambtn = document.getElementById('mb-button');
hambtn.addEventListener('click', () => {
  const ul = document.querySelector('nav ul');
  ul.classList.toggle('active');
});