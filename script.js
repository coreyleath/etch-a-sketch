let boxFunction = 'solid';



const slider = document.getElementById('myRange');
const sliderText = document.getElementById('sliderText');

sliderText.innerHTML = `Grid size: ${slider.value}x${slider.value}`;
createGrid(slider.value, boxFunction);

slider.oninput = function() { 
    sliderText.innerHTML = `Grid size: ${slider.value}x${slider.value}`;
    createGrid(slider.value, boxFunction);
}



document.getElementById(`solidButton`).addEventListener('click', function() {
    boxFunction = 'solid'; 
    createGrid(slider.value, boxFunction);
});

document.getElementById(`fadeButton`).addEventListener('click', function() {
    boxFunction = 'fade'; 
    createGrid(slider.value, boxFunction);
});

document.getElementById(`darkenButton`).addEventListener('click', function() {
    boxFunction = 'darken';
    createGrid(slider.value, boxFunction);
});

document.getElementById(`rainbowButton`).addEventListener('click', function() {
    boxFunction = 'rainbow'; 
    createGrid(slider.value, boxFunction);
});



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function createGrid(size, boxFunction) {

    removeAllChildNodes(container);

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size*size; i++) {

        const div = document.createElement('div');
        div.classList.add('box');

        if (boxFunction === 'solid') {
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = 'black';
            });
        } else if (boxFunction === 'fade') {
            div.addEventListener('mouseover', function() {
                div.classList.remove('fading');
                setTimeout(() => div.classList.add('fading'), 1);
            });
        } else if (boxFunction === 'darken') {
            let alphaV = 0;
            div.addEventListener('mouseover', function() {
                alphaV += 0.1;
                div.style.backgroundColor = `rgba(0,0,0,${alphaV})`
            })
        } else if (boxFunction === 'rainbow') {
            div.addEventListener('mouseover', function() {
                let randomR = Math.floor(Math.random()*256);
                let randomG = Math.floor(Math.random()*256);
                let randomB = Math.floor(Math.random()*256);
                div.style.backgroundColor = `rgba(${randomR},${randomG},${randomB})`;
            })
        }

        container.appendChild(div);
    }
}