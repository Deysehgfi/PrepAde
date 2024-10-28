import { Router } from "express";


const router = Router()

import { create, getEmpresa } from "../controllers/Empresa-Controllers.js";

router.get("/", getEmpresa)
router.post("/", create)



export default router;