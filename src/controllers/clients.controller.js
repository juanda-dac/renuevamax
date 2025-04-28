import getConnection from "../db/db.js";

/**
 * Campos cliente:
 * ClienteID
 * Compania
 * Contacto
 * Titulo
 * Direccion
 * Ciudad
 * Regiones
 * CodigoPostal
 * Pais
 * Telefono
 * Fax
 */

export const getClients = async (req, res) => {
    const connection = await getConnection();
    const clients = await connection.query("SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax FROM clientes");
    return res.json(clients);   
}

export const saveClient = async (req, res) => {
    const { Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO clientes (Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax]);
    return res.json({ message: "Cliente guardado", id: result.insertId });
}

export const updateClient = async (req, res) => {
    const { clientId } = req.params;
    const { Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;
    const connection = await getConnection();
    await connection.query("UPDATE clientes SET Compania = ?, Contacto = ?, Titulo = ?, Direccion = ?, Ciudad = ?, Regiones = ?, CodigoPostal = ?, Pais = ?, Telefono = ?, Fax = ? WHERE ClienteID = ?", [Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, clientId]);
    return res.json({ message: "Cliente actualizado" });
}

export const deleteClient = async (req, res) => {
    const { clientId } = req.params;
    const connection = await getConnection();
    await connection.query("DELETE FROM clientes WHERE ClienteID = ?", [clientId]);
    return res.json({ message: "Cliente eliminado" });
}
