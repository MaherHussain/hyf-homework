class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
      
      if(currency == "dollar"){
        return  this.monyConverted = this.price / 7;
      }
      else if( currency == "euro"){
          return this.monyConverted = this.price / 7.5
      }

  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
    console.log(this.products);
  }

  removeProduct(product) {
    // Implement functionality here

    let index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    // Implement functionality here

    return this.products.filter((product) => {
      if (product.name === productName) {
        return this;
      }
    });
  }

  getTotal() {
    // Implement functionality here
    let total = 0;
    this.products.forEach((product) => {
      total += product.price;
    });

    const totalPrice = document.createElement("p");
    document.body.appendChild(totalPrice);
    totalPrice.innerHTML = `total price is ${total}`;
  }

  renderProducts() {
    const table = document.querySelector("#table");
    const tbody = document.querySelector("tbody");

    this.products.forEach((product) => {
      tbody.innerHTML += `<tr>
      <td>${product.name}</td>
      <td> ${product.price} kr</td>
      </tr>`;
    });

    // Implement functionality here
  }

  getUser() {
    // Implement functionality here
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);

        const userName = document.createElement("h3");
        userName.innerHTML = `user name: ${data.username} `;
        document.body.appendChild(userName);
      });
  }

  
}
// part 2 start................................................
const shoppingCart = new ShoppingCart();


// add products
const flatscreen = new Product("flat-screen", 5000);
const phone = new Product("phone", 2000);
const pc = new Product("pc", 10000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(phone);
shoppingCart.addProduct(pc);


// remove product.

shoppingCart.removeProduct(pc);

// get total price .
shoppingCart.getTotal();



// render products .
shoppingCart.renderProducts();

// serach function
console.log(shoppingCart.searchProduct("phone"));

// get user
shoppingCart.getUser();

// part 2 end  ...................................................................... 



// part  3 strat ...............................
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("euro"));
