const express = require('express');
const router = express.Router();
const productoController = require('../controller/productController');

module.exports = function () {
    //////////////////// PRODUCTOS ///////////////////

    //Agregar nuevo Producto
    router.post('/producto/add', productoController.nuevoProductos);
    //Consultar todos los productos
    router.get('/producto', productoController.obtenerProductos);
    //Consultar un producto mediante el ID
    router.get('/producto/:idProducts', productoController.obtenerProducto);
    //Consultar un producto por Categoria
    router.get('/producto/category/:id', productoController.obtenerProductoC);
    //Consultar un producto por Nombre
    router.get('/producto/nombre/:nombre', productoController.obtenerProductoN);
    ///////////////////////////////////////////////////////
    return router;
}