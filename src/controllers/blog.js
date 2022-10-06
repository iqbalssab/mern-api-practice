const {validationResult} = require('express-validator')

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req. body.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        const err = new Error('invalid value')
        err.errorStatus = 400
        err.data = errors.array()
        throw err;
    }

    const result = {
        message : "Create Blog Post sucess!",
        data : {
            post_id: 1,
            title: title,
            // image : "fileimage.jpg",
            Body : body,
            Created_at : "06/10/2022",
            author : {
                uid : 1,
                name : "nama kita"
            }
        }
    }
    res.status(201).json(result)
}