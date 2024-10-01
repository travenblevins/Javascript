const messageElement = document.querySelector('.message');
const url = 'https://swapi.dev/api/people/1'
const lukeName = document.getElementById('lukeName')
const lukeHeight = document.getElementById('lukeHeight')
const lukeWeight = document.getElementById('lukeWeight')




const fetchStarWars = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    lukeName.textContent = 'Name: ' + data.name
    lukeHeight.textContent = 'Height: ' + data.height
    lukeWeight.textContent = 'Weight: ' + data.mass
}

fetchStarWars(url)

const url2 = 'https://swapi.dev/api/people/4'

const vaderName = document.getElementById('vaderName')
const vaderHeight = document.getElementById('vaderHeight')
const vaderWeight = document.getElementById('vaderWeight')

const fetchStarWars2 = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    vaderName.textContent = 'Name: ' + data.name
    vaderHeight.textContent = 'Weight: ' + data.height
    vaderWeight.textContent = 'Weight: ' + data.mass
}

fetchStarWars2(url2)

const url3 = 'https://swapi.dev/api/people/11'

const anakinName = document.getElementById('anakinName')
const anakinHeight = document.getElementById('anakinHeight')
const anakinWeight = document.getElementById('anakinWeight')

const fetchStarWars3 = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    anakinName.textContent = 'Name: ' + data.name
    anakinHeight.textContent = 'Height: ' + data.height
    anakinWeight.textContent = 'Weight: ' + data.mass
}

fetchStarWars3(url3)

const url4 = 'https://swapi.dev/api/people/44'
const maulName = document.getElementById('maulName')
const maulHeight = document.getElementById('maulHeight')
const maulWeight = document.getElementById('maulWeight')


const fetchStarWars4 = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    maulName.textContent = 'Name: ' + data.name
    maulHeight.textContent = 'Height: ' + data.height
    maulWeight.textContent ='Weight: ' + data.mass
}

fetchStarWars4(url4)





// const button = document.querySelector('button');
// const input = document.getElementById('input');

// button.addEventListener('click', () => {
//     if (input.value !== '') {   
//         inputValue = input.value;
//         const wordHolder = document.createElement('div')
//         wordHolder.textContent = inputValue;
//         const letterArray = wordHolder.textContent.split('');

//         letterArray.forEach((letter, index) => {
//             setTimeout(() => {
//                 const span = document.createElement('span');
//                 span.textContent = letter;
//                 document.body.append(span)
//             }, 500 * index)
//         })
//         input.value = ''
//     }
// })

