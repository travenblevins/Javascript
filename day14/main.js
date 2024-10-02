import { displayContent } from '/day14/utilities/another.js';
displayContent('first', 'I am first');



const apiKey = 'c6f7f91fa4b26c8923d4658666573c56';
const query = 'New York';
const url = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${encodeURIComponent(query)}`;
const container = document.getElementById('container')

const getData = async () => {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error ('Newtwork response was not ok')
        }
        const data = await response.json()

        const latitude = data.data[0].latitude
        const longitude = data.data[0].longitude

        container.textContent = 'Latitude: ' + latitude + ', Longitude: ' + longitude
        
    } catch(error) {
        console.error('Error:', error)
    }
}

getData()


