var i = 0;
var time = 2000;
var image = [];

image[0] = 'education.jpg';
image[1] = 'hallway.jpg';
image[2] = 'health.jpg';
image[3] = 'kk.webp';
image[4] = 'office.jpg';
image[5] = 'retail.jpg';


function changeImg() {
    document.slide.src = image[i];

    if(i < image.length -1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;



