export function saveProduct(product) {
  const response = JSON.parse(localStorage.getItem('products'));
  let productsArray = [];
  if (!response) {
    productsArray.push(product);
  } else {
    productsArray = response;
    const productFound = productsArray
      .find((productCart) => productCart.id === product.id);
    if (productFound) {
      productFound.quantity += 1;
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

export function incProductQuantity(id) {
  console.log('incProductQuantity', id);
  const response = JSON.parse(localStorage.getItem('products'));
  let productsArray = [];
  productsArray = response;
  const productFound = productsArray.find((productCart) => productCart.id === id);
  productFound.quantity += 1;
  localStorage.setItem('products', JSON.stringify(productsArray));
}

export function decProductQuantity(id) {
  const response = JSON.parse(localStorage.getItem('products'));
  let productsArray = [];
  productsArray = response;
  const productFound = productsArray.find((productCart) => productCart.id === id);
  if (productFound.quantity !== 1) {
    productFound.quantity -= 1;
  }
  localStorage.setItem('products', JSON.stringify(productsArray));
}

export function deleteProduct(id) {
  const response = JSON.parse(localStorage.getItem('products'));
  let productsArray = [];
  productsArray = response;
  if (productsArray.length === 1) {
    localStorage.removeItem('products');
  } else {
    productsArray = productsArray.filter((product) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(productsArray));
  }
}
