import getConnection from "../db/db.js"

export const getAllCategories = async(req, res) => {
    try{
        const connection = await getConnection();
        const categories = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        return res.json(categories)
    } catch(error){
        return res.json({
            message:"Error al guardar en la base de datos"
        }, 500)
    }
}

export const saveCategory = async(req, res) => {
    const {
        CategoriaNombre,
        Descripcion,
        Imagen
    } = req.body;
    try {
        const connection = await getConnection();
        const saved = await connection.query("INSERT INTO categorias(CategoriaNombre, Descripcion, Imagen) VALUES(?, ?, ?)", [CategoriaNombre, Descripcion, Imagen])
        return res.json({
            message: "Categoria guardada"
        })
    } catch (error) {
        return res.json({
            message: "Error al guardar en la base de datos"
        }, 500)
    }
}

export const updateCategory = async(req, res) => {
    const { categoryId } = req.params;
    const {
        CategoriaNombre,
        Descripcion,
        Imagen
    } = req.body;

    try {
        const connection = await getConnection();
        await connection.query("UPDATE categorias SET CategoriaNombre = ?, Descripcion = ?, Imagen = ?  WHERE CategoriaID = ?", [CategoriaNombre, Descripcion, Imagen, categoryId])
        return res.json({
            message: "Categoria Actualizada"
        })
    } catch (error) {
        return res.json({
            message: "Error al actualizar en la base de datos"
        }, 500)
    }
}

export const deleteCategory = async(req, res) => {
    const { categoryId } = req.params;
    try {
        const connection = await getConnection();
        await connection.query(`DELETE FROM categorias WHERE CategoriaID = ${categoryId}`)
        return res.json({
            message: "Categoria eliminada"
        })
    } catch (error) {
        return res.json({
            message: "Error al eliminar en la base de datos"
        }, 500)
    }
}
