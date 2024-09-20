const arraySection = document.querySelector('.images')
const array = ['Images/calm-weather-on-sea-ocean-600nw-2212935531.webp', 'Images/download.jpeg', 'Images/free-nature-images.jpg', 'Images/OIG2.9O4YqGf98tiYzjKDvg7L', 'Images/aniskysaber-lede-768x494.jpg']
const img1value = array[0]
const img2value = array[1]
const img3value = array[2]
const img4value = array[3]
const img5value = array[4]
const img = document.createElement('img')
img.src = img1value
img.alt = 'Description of Image'
arraySection.appendChild(img)

const left = document.getElementById('left')
const right = document.getElementById('right')

// Function to get the filename from img.src
const getFilename = (url) => url.substring(url.lastIndexOf('/') + 1);

left.addEventListener('click', () => {
    const currentImg = getFilename(img.src);

    if (currentImg === getFilename(img1value)) {
        img.src = img2value;
    } else if (currentImg === getFilename(img2value)) {
        img.src = img3value;
    } else if (currentImg === getFilename(img3value)) {
        img.src = img4value;
    } else if (currentImg === getFilename(img4value)) {
        img.src = img5value
    } else if (currentImg === getFilename(img5value)) {
        img.src = img1value
    }
});

// Add an event listener for the 'right' button (if needed)
right.addEventListener('click', () => {
    const currentImg = getFilename(img.src);

    if (currentImg === getFilename(img5value)) {
        img.src = img4value;
    } else if (currentImg === getFilename(img4value)) {
        img.src = img3value;
    } else if (currentImg === getFilename(img3value)) {
        img.src = img2value;
    } else if (currentImg === getFilename(img2value)) {
        img.src = img1value;
    } else if (currentImg === getFilename(img1value)) {
        img.src = img5value;
    }
});


