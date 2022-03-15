export async function getCategories() {
  try {
    const promise = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(promise);
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const promise = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(promise);
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}

export async function getProductsFromQuery(query) {
  try {
    const promise = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(promise);
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}
