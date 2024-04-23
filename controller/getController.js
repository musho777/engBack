import Book from "../models/book.js";
import Language from "../models/language.js"

class GetController {
    static async GetLanguage(req, res) {
        try {
            const lang = await Language.findAll();
            res.status(200).json({ lang });
        }
        catch (error) {
            res.status(404)({ error: 'getLanguage Error' });
        }
    }
    static async GetAllBooks(req, res) {
        try {
            const lang = await Book.findAll();
            res.status(200).json({ lang });
        }
        catch (error) {
            res.status(404)({ error: 'Books Error' });
        }
    }



}
export default GetController;