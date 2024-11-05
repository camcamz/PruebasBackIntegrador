import { getConnection, sql, queries } from '../database/export.js'

// Aca traemos todas nuestras notas
export const getNotasRepository = async () => {
    const pool = await getConnection();

    try {
        const resultado = await pool.request().query(queries.getNotas);

        console.table(resultado.recordset)

        return resultado

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}
// notas segun el join
export const getNotasJoinRepository = async () => {
    const pool = await getConnection()

    try {
        const resultadoJoin = await pool.request().query(queries.getNotasJoin)

        console.table(resultadoJoin.recordset)
        
        return resultadoJoin.recordset 

    } catch (error) {
        console.error('Error en el repositorio: ', error)
        throw new Error("Error al obtener el Join");
        
    } finally {
        pool.close()
    }
}
// agregamos nueva nota
export const agregarNotaRepository = async (nuevaNota) => {
    const { titulo, descripcion, completada, creada } = nuevaNota;
    const pool = await getConnection();

    try {

        const resultado = await pool.request()
            .input('titulo', sql.NVarChar, titulo)
            .input('descripcion', sql.NVarChar, descripcion)
            .input('completada', sql.Bit, completada)
            .input('creada', sql.DateTime, creada)
            .query(queries.agregarNotas);

        const notaNueva = { titulo, descripcion, completada, creada }

        console.table(notaNueva)

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error al agregar nueva nota')
    } finally {
        pool.close()
    }

}