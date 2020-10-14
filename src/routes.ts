import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";
import multer from "multer";
import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", (request, response) => {
  return response.json({ message: "Bem vindo ao backend da aplicação Happy!" });
});

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;
