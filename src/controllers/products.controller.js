import getConnection from "../db/db.js";


/**
 * CRUD de productos
 * DB Fields;
 * ProductoID
 * ProductoNombre
 * ProveedorID
 * CategoriaID
 * CantidadPorUnidad
 * PrecioUnitario
 * UnidadesStock
 * UnidadesPedidas
 * NivelReorden
 * Discontinuado
 */

export const getProducts = async (req, res) => {
    const connection = await getConnection();
    const products = await connection.query("SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado FROM productos");
    return res.json(products);
}

export const saveProduct = async (req, res) => {
    const { ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = req.body;
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO productos (ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado]);
    return res.json({ message: "Producto guardado", id: result.insertId, result });
}

export const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = req.body;
    const connection = await getConnection();
    const result = await connection.query("UPDATE productos SET ProductoNombre = ?, ProveedorID = ?, CategoriaID = ?, CantidadPorUnidad = ?, PrecioUnitario = ?, UnidadesStock = ?, UnidadesPedidas = ?, NivelReorden = ?, Discontinuado = ? WHERE ProductoID = ?", [ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado, productId]);
    return res.json({ message: "Producto actualizado", result });
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    const connection = await getConnection();
    await connection.query("DELETE FROM productos WHERE ProductoID = ?", [productId]);
    return res.json({ message: "Producto eliminado" });
}

