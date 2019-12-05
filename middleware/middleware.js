const joi = require("joi")

exports.validate_user = (req, res, next) => {
    let schema = joi.object().keys({
        angka1: joi.string().required().min(1),
        angka2: joi.string().required().min(1),
        operator: joi.string().required().min(1)
    })

    joi.validate(req.body, schema)
        .then(validate => {
            next()
        })
        .catch(err => {
            res.render("index", { message: err.details })
        })
}