import { Router } from "express"

import { create, getAll, getPostagem } from "../controllers/Postagens-controllers.js"
const router = Router()


router.get("/", getAll)
router.post("/", create)
router.get("/:id", getPostagem)


export default router;