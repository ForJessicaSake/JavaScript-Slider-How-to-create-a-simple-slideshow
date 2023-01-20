let i = 0;
let images = [];
let time = 1000;
let paused = false;

//imageList 
images[0] = 'Ione.jpeg';
images[1]='Ithree.jpeg'; 
images[2]= 'Itwo.png';

//slider function next
function handleChange() {
    if (!paused) {
        document.slide.src = images[i];
        if(i < images.length -1){
            i++
        }
        else{
            i = 0;
        }
    }
   // slideshow 
    setTimeout(handleChange, time)
}

function previous() {
    if (i === 0) {
        i = images.length - 1;
    } else {
        i--;
    }
    document.slide.src = images[i];
}

function next() {
    if(i === images.length - 1) {
        i = 0;
    } else {
        i++;
    }
    document.slide.src = images[i];
}

function pause() {
    paused = !paused;
}

window.onload = handleChange;

