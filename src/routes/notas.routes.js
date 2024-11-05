import { Router } from "express";
import { agregarNotaController, getNotasController, getNotasJoinController } from "../controller/notas.controller.js";

const router = Router()

router.get('/notas', getNotasController)
router.get('/notasjoin', getNotasJoinController)
router.post('/notas',agregarNotaController)

export default router