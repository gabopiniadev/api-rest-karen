
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

//Controlador para obtener el producto segun su ID
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

//Controllador para obtener todos los Productos
exports.obtenerProductos = async (req, res, next) => {

    try {
        const productos = await Products.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }

}

//Controlador para buscar por categoria
exports.obtenerProductoC = async (req, res, next) => {
    try {
        const cat = req.params.id;
        const palabras = cat.split(' ');
        let regex = new RegExp(palabras.join('|'), 'i');
        
        const productoByCat = await Products.find({category: regex});

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

//Controlador para buscar por nombre
exports.obtenerProductoN = async (req, res, next) => {
    try {
        let nameN = req.params.nombre;
        let palabras = nameN.split(' ');
        let regex = new RegExp(palabras.join('|'), 'i');
        let productoByName = await Products.findOne({name: regex});

        if(productoByName) {
            res.json(productoByName);
        }else{
            res.json({mensaje: 'El Producto no existe en la data'});
            next();
        }

    } catch (error) {
        console.log(error);
        next();    
    }    
}