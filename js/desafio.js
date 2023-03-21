class ProductManager {
  constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    // Comprueba que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("ERROR: Debes completar todos los campos");
      return;
    }

    // Comprueba que no se repita Code
    if (this.products.some((product) => product.code === code)) {
      console.error(`ERROR: El código "${code}" ya existe`);
      return;
    }

    const newProduct = {
      id: this.nextProductId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.nextProductId++;
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error(`ERROR: Producto "${id}" no encontrado`);
    }
    return product;
  }
}
const prueba = {
    title: "Prueba producto",
    description: "Descripcion de prueba",
    price: 500,
    thumbnail: "imagen",
    code: "cf123",
    stock: 25,
};
const product = new ProductManager();
