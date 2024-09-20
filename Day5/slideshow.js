const arraySection = document.querySelector('.images')
const array = ['Images/calm-weather-on-sea-ocean-600nw-2212935531.webp', 'Images/download.jpeg', 'Images/free-nature-images.jpg', 'Images/OIG2.9O4YqGf98tiYzjKDvg7L', 'Images/subhome-ai.jpeg']
const img1value = array[0]
const img2value = array[1]
const img3value = array[2]
const img4value = array[3]
const img = document.createElement('img')
img.src = img1value
img.alt = 'Description of Image'
const images = document.querySelector('.images')
arraySection.appendChild(img)

const left = document.getElementById('left')
const right = document.getElementById('right')

left.addEventListener('click', () => {
    if (img.src === img1value) {
        img.src = img2value
        return
    } else if (img.src === img2value) {
        img.src = img3value
    } else if (img.src === img3value) {
        img.src = img4value
    }
})
