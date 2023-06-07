import { promises as fs } from "fs"

export default class ProductManager {
    constructor() {
        this.patch = "./productos.txt";
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        if (!respuesta3.find(product => product.id === id)) {

            console.log("Producto NO encontrado");
        } else {
            console.log(respuesta3.find((product) => product.id === id));
        }

    };

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("Producto Eliminado");
    };

    updateProducts = async ({ id, ...producto }) => {
        await this.deleteProductsById(id);
        let productOld = await this.readProducts()
        let productsModif = [{ ...producto, id }, ...productOld];
        await fs.writeFile(this.patch, JSON.stringify(productsModif));
    };

}

//const productos = new ProductManager

/* productos.addProduct("Titulo1", "Descripcion1", 1000, "Imagen1", "abc123", 10);
productos.addProduct("Titulo2", "Descripcion2", 2000, "Imagen2", "bcd123", 20);
productos.addProduct("Titulo3", "Descripcion3", 3000, "Imagen3", "cde123", 30);
productos.addProduct("Titulo4", "Descripcion4", 1000, "Imagen4", "abc123", 40);
productos.addProduct("Titulo5", "Descripcion5", 2000, "Imagen5", "bcd123", 50);
productos.addProduct("Titulo6", "Descripcion6", 3000, "Imagen6", "cde123", 60);
productos.addProduct("Titulo7", "Descripcion7", 1000, "Imagen7", "abc123", 70);
productos.addProduct("Titulo8", "Descripcion8", 2000, "Imagen8", "bcd123", 80);
productos.addProduct("Titulo9", "Descripcion9", 3000, "Imagen9", "cde123", 90);
productos.addProduct("Titulo10", "Descripcion10", 3000, "Imagen10", "cde123", 10); */












//productos.getProducts();

//productos.getProductsById(3);

//productos.deleteProductsById(2);
/* 
productos.updateProducts({

    title: 'Titulo3',
    description: 'Descripcion3',
    price: 3500,
    thumbnail: 'Imagen3',
    code: 'cde123',
    stock: 30,
    id: 3

}) */

