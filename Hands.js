class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0

  addProducts(title, description, price, thumbnail, code, stock) {

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`El codigo ${code} esta repetido`);
        break;
      }
    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,

    }

    if (!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++
      this.products.push({
        ...newProduct,
        id: ProductManager.id
      });
    } else {
      console.log("Todos los campos son obligatorios")
    }


  }

  getProducts() {
    return this.products;
  }

  existe(id) {
    return !this.products.find((producto) => producto.id === id);
  }

  getProductById(id) {
    !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
  }

}

const productos = new ProductManager

//Primera llamada= arreglo vacio
console.log(productos.getProducts());

//Agregamos producto
productos.addProducts('title1', 'description1', '1000', 'thumbnail1', 'abcd1234', 8);
productos.addProducts('title2', 'description2', '2000', 'thumbnail2', 'abcd123', 9);

//Segunda llamada = arreglo con producto
console.log(productos.getProducts());

//Validacion de codigo repetido
productos.addProducts('title3', 'description3', '2000', 'thumbnail3', 'abcd123', 10);



//Busqueda de producto por ID
productos.getProductById(2);

//Busqueda por ID no encontrado
productos.getProductById(3);