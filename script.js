const ratio = .2;
const options = {
    root: null,
    rootMargin :'0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio ) {
            entry.target.classList.add('reveal')
            observer.unobserve(entry.target)
        }
    })
    console.log('handleIntersect')
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.unReveal').forEach(function (r) {
    observer.observe(r)
})


const menus = document.querySelector('.menu');
const liens = document.querySelector('.links');
const btnDrop = document.querySelector('.btn-top');
const listes = document.querySelectorAll('.menu li');

let toggleIndex;

btnDrop.addEventListener('click', toggleDropDown);

function toggleDropDown() {
    if (!toggleIndex) {
        liens.style.height = `${liens.scrollHeight}px`;
        liens.style.margin=  '0px 0px 0px 0px';
        toggleIndex = true;
        return;
    }

    liens.style.margin=  '0px -150px 0px 0px';
    liens.style.height = 0;
    toggleIndex = false;
}

// window.onload = function () {
//     window.scrollTo(0, 0);
//   }