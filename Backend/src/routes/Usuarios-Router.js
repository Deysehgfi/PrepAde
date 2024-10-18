import { Router } from "express"

import { create } from "../controllers/Usuarios-controllers.js"

const router = Router()


router.get("/")
router.post("/", create)


export default router;