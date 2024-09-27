var fruits = [ 
    {
      name: 'Lemon',
      img: 'https://bit.ly/2wQwmYG',
      id: 0
    }, 
    {
      name: 'Lime',
      img: 'https://bit.ly/344kBtA',
      id: 1
    },
    {
      name: 'Apple',
      img: 'https://bit.ly/2X1v3AJ',
      id: 2
    }
];

const fruitBox = document.querySelector('.fruit-box');

// Ensure the input element has the correct selector
const input = document.querySelector('input[placeholder="add-fruit"]');

window.addEventListener("load", renderFruit);

// Function to render fruits
function renderFruit() { 
    // Clear the fruit box before rendering
    fruitBox.innerHTML = ''; 

    // Render each fruit from the fruits array
    fruits.forEach(fruit => {
        fruitBox.innerHTML += `
            <section class="fruit">
                <h2>${fruit.name}</h2>
                <img src='${fruit.img}' />
                <button class='eat'>Eat</button>
            </section>`;
    });

    // Add event listeners to the eat buttons
    const eatButtons = document.querySelectorAll('.eat');
    eatButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the parent section of the button that was clicked
            this.parentElement.remove();
        });
    });

    // Restart button functionality
    const restart = document.getElementById('restart');
    restart.addEventListener('click', function() {
        renderFruit(); // Re-render the fruits
    });
}

const addFruit = document.getElementById('add-button');

addFruit.addEventListener('click', function() {
    const inputValue = input.value.trim().toLowerCase(); // Get and normalize the input value
    if (inputValue === 'watermelon') {
        const watermelon = {
            name: 'Watermelon',
            img: 'Fruitimages/download.webp', // Use a valid image URL for watermelon
            id: 3 // Update the id based on your list
        };
        fruits.push(watermelon);
        input.value = ''; // Clear the input field
        renderFruit(); // Re-render the fruits
    }
    else if (inputValue === 'pineapple') {
        const watermelon = {
            name: 'Pineapple',
            img: 'Fruitimages/download (1).webp', // Use a valid image URL for watermelon
            id: 3 // Update the id based on your list
        };
        fruits.push(watermelon);
        input.value = ''; // Clear the input field
        renderFruit(); // Re-render the fruits
    }
});