import { getNotasService, getNotasJoinService, agregarNotaService} from "../services/notas.service.js"

// trae todas las notas
export const getNotasController = async (req, res) => {
    try {
        let notas = await getNotasService()

        notas.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(notas.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las notas' })
    }
}
// notas segun el join
export const getNotasJoinController = async (req, res) => {
    try {
        let notas = await getNotasJoinService()
        res.send(notas)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al obtener el join de las notas"})
    }
}
// agregar nueva nota
export const agregarNotaController = async (req, res) => {
    const { titulo, descripcion, completada, creada } = req.body
    
    if (titulo == null || completada == null){
        res.status(400).send({ message: 'Error en la solicitud, por favor llene todos los campos' })
    }
    try {
        const notaNueva = await agregarNotaService({titulo, descripcion, completada, creada })
        res.status(200).send({mensaje: 'Nota nueva agregada correctamente', Nota: notaNueva})
        } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al agregar la nota'})
        }
}