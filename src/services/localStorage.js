export function saveProduct(product) {
  const response = JSON.parse(localStorage.getItem('products'));
  let productsArray = [];
  if (!response) {
    productsArray.push(product);
  } else {
    productsArray = response;
    const productFind = productsArray
      .find((productCart) => productCart.id === product.id);
    if (productFind) {
      productFind.quantity += 1;
    } else {
      productsArray.push(product);
    }
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
