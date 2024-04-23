import express from 'express';
import PostController from '../controller/postController.js';
import multer from 'multer';
import GetController from '../controller/getController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });


//get
router.get('/getLanguage', GetController.GetLanguage)
router.get('/getallbooks', GetController.GetAllBooks)



//post
router.post('/createLanguage', upload.single('img'), PostController.CreateLanguage)
router.post('/createachievements', upload.single('img'), PostController.CreateAchievements)
router.post('/creategift', upload.single('img'), PostController.CreateGift)
router.post('/createpackage', upload.single('img'), PostController.CreatePackage)
router.post('/createWord', upload.fields([{ name: 'img', maxCount: 1 }, { name: 'voice', maxCount: 1 }]), PostController.CreateWord)
router.post('/createbook', upload.fields([{ name: 'img', maxCount: 1 }, { name: 'voice', maxCount: 1 }]), PostController.CreateBooks)


// CreateBooks

export default router