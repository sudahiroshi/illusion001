window.addEventListener('load', () => {
    const slider = document.querySelector('#opacity');
    slider.addEventListener('change', (e) => {
        let output = document.querySelector('#output');
        output.innerHTML = slider.value;
        let a = document.querySelector('#background');
        a.style.opacity = e.target.value / 100;
    });
    let obj1 = document.querySelector('#obj1');
    obj1.style.left="900px";
    let obj2 = document.querySelector('#obj2');
    obj2.style.left="900px";

    obj1.addEventListener('transitionend', (e) => {
        if( e.target.style.left == "900px") e.target.style.left = "10px";
        else if( e.target.style.left == "10px") e.target.style.left = "900px";
    });
    obj2.addEventListener('transitionend', (e) => {
        if( e.target.style.left == "900px") e.target.style.left = "10px";
        else if( e.target.style.left == "10px") e.target.style.left = "900px";
    });
});