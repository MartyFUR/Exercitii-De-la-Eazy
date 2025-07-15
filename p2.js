
window.onload = function() {
    const conatainer = document.getElementById("containerul");
    const counter = document.getElementById("counter");



for (let i = 0; i < 10; i++) {
    const box = document.createElement('div');
    box.className = 'dreptunghi';

    box.addEventListener('click', e => {
        e.stopPropagation();
        box.style.height = (box.offsetHeight + 10) + 'px';
      });

      conatainer.appendChild(box);


document.addEventListener('click', () => {
    document.querySelectorAll('.dreptunghi').forEach(box => {
    box.style.height = initialHeight + 'px';
        })
      })
    }
}
