export function saveProduct(product) {
  const response = JSON.parse(localStorage.getItem('products'));
  let productsArray = [];
  if (!response) {
    productsArray.push(product);
  } else {
    productsArray = response;
    productsArray.push(product);
  }
  localStorage.setItem('products', JSON.stringify(productsArray));
}

export function getSavedProducts() {
  const response = JSON.parse(localStorage.getItem('products'));
  return response;
}

/* export function deleteProduct(product) {
  const response = JSON.parse(localStorage.getItem('products'));
} */
