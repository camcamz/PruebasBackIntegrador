import { getNotasRepository, getNotasJoinRepository, agregarNotaRepository } from "../repository/notas.repository.js"

// Aca traemos todas nuestras notas
export const getNotasService = async () => {
    try {
        return getNotasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los datos')
    }
}
// aca traemos todas nuestras notas segun el join
export const getNotasJoinService = async () => {
    try {
        return getNotasJoinRepository()
    } catch {
        console.error('Error en el service ', error)
        throw new Error("Error al obtener el join de las notas");
        
    }
}
// aca agregamos una nueva nota
export const agregarNotaService = async (nuevaNota) => {
    try {
        const notaNueva = await agregarNotaRepository(nuevaNota)

        return notaNueva
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al aregegar la nota')

    }
}