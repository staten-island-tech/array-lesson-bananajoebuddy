const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//Display Product Details: Log the name and price of each product.
products.forEach((products) => console.log(products.name, products.price));

//Increase Price: Increase the price of each product by 10% and log the updated products.

products.forEach((products) =>
  console.log(products.name, products.price * 1.1)
);

//Summarize Categories**: Use `forEach` to create a list of all unique categories in the products array.
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

//Filter by Category: Create a new array that only includes products from the 'Electronics' category.
const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

//Filter by Price: Filter products that cost more than $300 and store them in a new array.
const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

//Highly Rated Products: Filter products with a rating of 4.5 or above.

const highlyratedProducts = products.filter((product) => product.rating >= 4.5);
console.log("Highly rate products", highlyratedProducts);

//Log Highly Rated Product Names: Use `filter` to get the highly rated products (rating >= 4.5) and then use `forEach` to log only their names.
highlyratedProducts.forEach((highlyratedProducts) =>
  console.log("highly rated products:", highlyratedProducts.name)
);
