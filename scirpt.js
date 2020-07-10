document.addEventListener('scroll', skroll);
let dodd = document.querySelector('.firm span');
let dodd1 = document.querySelector('.OFFER span');
let dodd2 = document.querySelector('.promoc span');
let dodd3 = document.querySelector('.kont span');
let skrolo = 0;


function skroll(e) {
    checkSpan(dodd);
    checkSpan(dodd1);
    checkSpan(dodd2);
    checkSpan(dodd3);

    skrolo = window.scrollY;
}

function checkSpan(ele) {
    if (window.scrollY > skrolo) {

        var rect = ele.getBoundingClientRect();
        if (rect.y < document.documentElement.clientHeight) {

            ele.style.opacity = "1";

        }
    } else {
        var rect = ele.getBoundingClientRect();
        if (rect.y + 200 > document.documentElement.clientHeight) {

            ele.style.opacity = "0";

        }
    }

}