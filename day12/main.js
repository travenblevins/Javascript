const brand = 'bestbuy'

class product {
    constructor(name, price) {
        this.name = name
        this.price = price
        this.brand = brand
    }
}

class cart {
    constructor(quantity, product) {
        this.name = 'cart'
        this.quantity = quantity
        this.product = product
        this.brand = brand
        this.list = []
    }
    addItem(item) {
        list.push(item)
    }
    removeItem(item) {
        this.list = this.list.filter((i) => i !== item)
    }
}

class user {
    constructor(name, cart) {
        this.name = name
        this.cart = cart
        this.brand = brand
    }
}

class computer extends product {
    constructor(name, price) {
        super(name, price)
        this.brand = brand
    }
}

//  const promiseTest = () => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success!')
//         }, 2000)
//         reject('Error!'), 2000
//     })

// promiseTest().then((res) => console.log(res))
// .catch((err) => console.log(err))

const timeoutFunc = (delay) => {
    setTimeout(() => {
      console.log("setTimeout 1");
      setTimeout(() => {
        console.log("setTimeout 2");
        setTimeout(() => {
          console.log("setTimeout 3");
          setTimeout(() => {
            console.log("setTimeout 4");
          }, delay);
        }, delay);
      }, delay);
    }, delay);
};

// const timeoutFunc2 = (delay) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('success 1');
//         // You can choose to reject here based on some condition.
//       }, delay);
//     })
//       .then((result1) => {
//         console.log(result1); // Output: success 1
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve('success 2');
//             // You can choose to reject here based on some condition.
//           }, delay);
//         });
//       })
//       .then((result2) => {
//         console.log(result2); // Output: success 2
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve('success 3');
//             // You can choose to reject here based on some condition.
//           }, delay);
//         });
//       })
//       .then((result3) => {
//         console.log(result3); // Output: success 3
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve('success 4');
//             // You can choose to reject here based on some condition.
//           }, delay);
//         });
//       })
//       .then((result4) => {
//         console.log(result4); // Output: success 4
//       })
//       .catch((error) => {
//         console.error('An error occurred:', error);
//       });
//   };
  
//   // Example usage:
//   timeoutFunc2(1000);


// const asyncTimeout = async (delay) => {
//     console.log("setTimeout 1");

//     await new Promise((resolve) => setTimeout(resolve, delay))

//     console.log('setTimeout 2')

//     await new Promise((resolve) => setTimeout(resolve, delay))

//     console.log('setTimeout 3')
// }

// asyncTimeout(1000)

const fetchStarWars = async(url) => {
    const response = await fetch(url)
    console.log('Response:', response)
    const data = await response.json()
    console.log('Data:,', data)
    return data
}

const button = document.getElementById('btn')

const name = document.getElementById('name')

const mass = document.getElementById('mass')

const height = document.getElementById('height')

button.addEventListener('click', async () => {
    const data = await fetchStarWars('https://swapi.dev/api/people/1')
    name.innerText = 'Name: ' + data.name
    mass.innerText = 'Weight (in KG): ' + data.mass
    height.innerText = 'Height: ' + data.height
})


