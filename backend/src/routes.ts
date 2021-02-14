import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagsController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagsController.index);
routes.get('/orphanages/:id', OrphanagsController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagsController.create);

export default routes;