// Get the current date day of week
const currentDay = new Date();
function getWeekDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[currentDay.getDay()];
}

// Gets day of week
const day = document.getElementById('day');
day.innerHTML = getWeekDay();

// Get day of month
const dayOfMonth = document.getElementById('dayOfMonth');
dayOfMonth.innerHTML = currentDay.getDate();

// Gets Month
const month = document.getElementById('month');
function monthValue() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[currentDay.getMonth()];
}
month.innerHTML = monthValue();

// Gets Year
const year = document.getElementById('year');
year.innerHTML = currentDay.getFullYear();



async function getTemperature() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=122.4194&current_weather=true&temperature_unit=fahrenheit';
    const response = await fetch(url)
    const data = await response.json()
    return data?.current_weather?.temperature;
}

const temp = document.getElementById('temp');

async function displayTemperature() {
    const temperature = await getTemperature();
    temp.innerHTML = 'Current Temp: ' + temperature + '°F';
}

displayTemperature();












// async function getTemperature() {
//     const { latitude, longitude } = await getLatitudeAndLongitude();
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

//     const response = await fetch(url);
//     const data = await response.json();

//     return data?.current_weather?.temperature;
// }

// async function getLatitudeAndLongitude() {
//     const coordinates = await new Promise((resolve) => {
//         navigator.geolocation.getCurrentPosition(function(location) {
//             resolve(location.coords);
//         });
//     });

//     return {
//         latitude: coordinates.latitude,
//         longitude: coordinates.longitude
//     };
// }

// // Display temperature
// async function displayTemperature() {
//     const temp = document.getElementById('temp');
//     const temperature = await getTemperature();
//     temp.innerHTML = 'Your current temperature is: ' + temperature + '°F';
// }

// displayTemperature();