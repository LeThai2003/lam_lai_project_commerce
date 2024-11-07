import express, {Router } from "express";
import multer from "multer";
const upload = multer();
import { uploadFields } from "../../middlewares/admin/uploadToCloud";
import * as controller from "../../controllers/client/blog.controller";
import verifyToken from "../../middlewares/client/verifyToken.middleware";


const router : Router = express.Router();


router.get("/", controller.listBlog);

router.get("/top-newest", controller.listNewestBlog);



// router.get("/", controller.listBlog);


export const blogRoute : Router = router;