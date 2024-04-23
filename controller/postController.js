import Achievements from "../models/achievements.js";
import Gift from "../models/gift.js";
import Language from "../models/language.js"
import Package from "../models/package.js";
import Words from "../models/words.js";
import { Validation } from "../function/validation.js";
import Book from "../models/book.js";
class PostController {

    static async CreateLanguage(req, res) {
        try {
            const img = req.file ? req.file.path : null;
            const { name } = req.body
            const validation = Validation([
                { value: name, title: 'name', type: ['empty'] },
                { value: req.file, title: 'img', type: ['file'] },
            ])
            if (validation.status) {
                await Language.create({ name, img })
                    .then(() => {
                        res.send("Language Created")
                    })
                    .catch((error) => {
                        res.status(400).json({ error: 'error' });
                    })
            }
            else {
                res.status(400).json({ error: validation.error });
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    static async CreateAchievements(req, res) {
        try {
            const img = req.file ? req.file.path : null;
            const { name, description } = req.body
            const validation = Validation([
                { value: name, title: 'name', type: ['empty'] },
                { value: req.file, title: 'img', type: ['file'] },
                { value: description, title: 'description', type: ['empty'] },
            ])
            if (validation.status) {
                await Achievements.create({ name, img, description })
                    .then(() => {
                        res.send("Achievements Created")
                    })
                    .catch((error) => {
                        res.status(400).json({ error: validation.error });
                    })
            }
            else {
                res.status(400).json({ error: validation.error });
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    static async CreateGift(req, res) {
        try {
            const img = req.file ? req.file.path : null;
            const { name, description, price, duration } = req.body
            const validation = Validation([
                { value: name, title: 'name', type: ['empty'] },
                { value: req.file, title: 'img', type: ['file'] },
                { value: description, title: 'description', type: ['empty'] },
                { value: price, title: 'price', type: ['empty'] },
                { value: duration, title: 'duration', type: ['empty'] },
            ])
            if (req.body.name && req.file && price && duration) {
                await Gift.create({ name, img, description, price, duration })
                    .then(() => {
                        res.send("Gift Created")
                    })
                    .catch((error) => {
                        res.status(400).json({ error: 'error' });
                    })
            }
            else {
                res.status(400).json({ error: 'name is requride' });
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    static async CreatePackage(req, res) {

        try {
            const img = req.file ? req.file.path : null;
            const { name, description, price, duration } = req.body
            const validation = Validation([
                { value: name, title: 'name', type: ['empty'] },
                { value: req.file, title: 'img', type: ['file'] },
                { value: description, title: 'description', type: ['empty'] },
                { value: price, title: 'price', type: ['empty'] },
                { value: duration, title: 'duration', type: ['empty'] },
            ])
            if (validation.status) {
                await Package.create({ name, img, description, price, duration })
                    .then(() => {
                        res.send("package Created")
                    })
                    .catch((error) => {
                        res.status(400).json({ error: 'error' });
                    })
            }
            else {
                res.status(400).json({ error: validation.error });
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    static async CreateWord(req, res) {
        try {
            const img = req.files['img'] && req.files['img'][0].path;
            const voice = req.files['voice'] && req.files['voice'][0].path;
            const { express, translation_en, translation_ru, translation_am, level } = req.body
            const validation = Validation([
                { value: express, title: 'express', type: ['empty'] },
                { value: req.files['img'], title: 'img', type: ['file'] },
                { value: voice, title: 'voice', type: ['empty'] },
                { value: translation_en, title: 'translation_en', type: ['empty'] },
                { value: translation_ru, title: 'translation_ru', type: ['empty'] },
                { value: translation_am, title: 'translation_am', type: ['empty'] },
                { value: level, title: 'level', type: ['empty'] },
            ])
            if (validation.status) {
                await Words.create({
                    img,
                    express,
                    translation_en,
                    translation_ru,
                    translation_am,
                    voice,
                    level
                })
                    .then(() => {
                        res.send("word Created")
                    })
                    .catch((error) => {
                        res.status(400).json({ error: 'error' });
                    })
            }
            else {
                res.status(400).json({ error: `${validation.error}` });
            }
        }
        catch (error) {
            console.log('11')
            console.log(error)
        }
    }
    static async CreateBooks(req, res) {
        try {
            const img = req.files['img'] && req.files['img'][0].path;
            const voice = req.files['voice'] && req.files['voice'][0].path;
            const { title, author, short_description, text, level, title_am, title_en, title_ru, dificulty, words, ganre, price, page, year } = req.body
            let validation = Validation([
                { value: author, title: 'author', type: ['empty'] },
                { value: short_description, title: 'short_description', type: ['empty'] },
                { value: text, title: 'text', type: ['empty'] },
                { value: level, title: 'level', type: ['empty'] },
                { value: title_am, title: 'title_am', type: ['empty'] },
                { value: title_en, title: 'title_en', type: ['empty'] },
                { value: title_ru, title: 'title_ru', type: ['empty'] },
                { value: dificulty, title: 'dificulty', type: ['empty'] },
                { value: ganre, title: 'ganre', type: ['empty'] },
                { value: price, title: 'price', type: ['empty'] },
                { value: page, title: 'page', type: ['empty'] },
                { value: year, title: 'year', type: ['empty'] },
                { value: req.files['voice'], title: 'voice', type: ['file'] },
                { value: req.files['img'], title: 'img', type: ['file'] },
            ])
            if (validation.status) {
                await Book.create({
                    title,
                    author,
                    short_description,
                    text,
                    level,
                    title_am,
                    title_en,
                    title_ru,
                    dificulty,
                    words,
                    ganre,
                    price,
                    page,
                    year,
                    voice,
                    img
                })
                    .then(() => {
                        res.send({ status: true, msg: "book Created" })
                    })
                    .catch((error) => {
                        console.log(error)
                        res.status(400).json({ status: false, error: 'error' });
                    })
            }
            else {
                res.status(400).json({ status: false, error: validation.error });
            }
        }
        catch (error) {
            console.log('error', error)
        }
    }
}

export default PostController