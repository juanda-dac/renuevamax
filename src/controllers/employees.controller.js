import getConnection from "../db/db.js";

/**
 * Empleados
 * 
 * EmpleadoID 
 * Apellido 
 * Nombre
 * Titulo
 * TituloCortesia
 * FechaNacimiento
 * FechaContratacion
 * Direccion
 * Ciudad
 * Regiones
 * CodigoPostal 
 * Pais
 * Telefono
 * Extension
 * Foto
 * Notas
 * Jefe 
 * RutaFoto
 * 
 */

export const getEmployees = async (req, res) => {
    const connection = await getConnection();
    const employees = await connection.query("SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados");
    return res.json(employees);   
}

export const saveEmployee = async (req, res) => {
    const { Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto } = req.body;
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO empleados (Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto]);
    return res.json({ message: "Empleado guardado", id: result.insertId });
}

export const updateEmployee = async (req, res) => {
    const { employeeId } = req.params;
    const { Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto } = req.body;
    const connection = await getConnection();
    await connection.query("UPDATE empleados SET Apellido = ?, Nombre = ?, Titulo = ?, TituloCortesia = ?, FechaNacimiento = ?, FechaContratacion = ?, Direccion = ?, Ciudad = ?, Regiones = ?, CodigoPostal = ?, Pais = ?, Telefono = ?, Extension = ?, Foto = ?, Notas = ?, Jefe = ?, RutaFoto = ? WHERE EmpleadoID = ?", [Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto]);
    return res.json({ message: "Empleado actualizado" });
}

export const deleteEmployee = async (req, res) => {
    const { employeeId } = req.params;
    const connection = await getConnection();
    await connection.query("DELETE FROM empleados WHERE EmpleadoID = ?", [employeeId]);
    return res.json({ message: "Empleado eliminado" });
}

export const getEmployeeById = async (req, res) => {
    const { employeeId } = req.params;
    const connection = await getConnection();
    const employee = await connection.query("SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados WHERE EmpleadoID = ?", [employeeId]);
    return res.json(employee[0]);   
}
