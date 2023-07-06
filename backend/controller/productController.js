
const Products = require('./../models/productos');

//Agregar nuevos productos
exports.nuevoProductos = async (req, res, next) => {
    const products = new Products(req.body);

    try {
        await products.save();
        res.json({ mensaje: 'Se agrego correctamente el articulo!' });
    } catch (error) {
        console.error(error);
        next();
    }

}

exports.obtenerProducto = async (req, res, next) => {

    try {
        const productoByID = await Products.findById(req.params.idProducts);

        if(!productoByID) {
            res.json({mensaje: 'El Producto no existe en la data'});
            next();
        }else{
            res.json(productoByID);
        }

    } catch (error) {
        console.log(error);
        next();    
    }

}

exports.obtenerProductos = async (res, next) => {

    try {
        const productos = await Products.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerProductoC = async (req, res, next) => {
    try {
        const cat = req.params.id;
        const productoByCat = Products.find({category: cat});

        if(!productoByCat) {
            res.json({mensaje: 'El Producto no existe en la data'});
            next();
        }else{
            res.json(productoByCat);
        }

    } catch (error) {
        console.log(error);
        next();    
    }    
}