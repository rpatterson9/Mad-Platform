const Charities = require('../models/charities');
const fs = require("fs");
const dotenv = require('dotenv');
const multer = require('multer');
const uploadMiddleware = require('../middleware/uploadMiddleware');
dotenv.config();

exports.getCharities = (req, res, next) => {
    Charities.find().sort({createdAt : -1})
        .then((charities) => {
            res.render('admin/charities/index', {
                pageTitle: 'Charities',
                charities
            });
        })
  };

exports.getDashboard = (req, res, next) => {
            res.render('admin/dashboard', {
                pageTitle: 'Dashboard'
            });
};

exports.editCharities = (req, res, next) => {
    let id = req.params.charitiesId;
    Charities.findById(id).sort({createdAt : -1})
        .then((charity) => {
            res.render('admin/charities/edit', {
                pageTitle: 'Edit Page',
                charity
            });
        }).catch((err) => console.log(err));
};

exports.editCharitiesPut = async (req, res, next) => {
    let id = req.params.charitiesId;
    let file;

    let dataExist = await Charities.findById(id).sort({createdAt : -1});

    const upload = multer({
        storage : uploadMiddleware.files.storage(),
        allowedFiles : uploadMiddleware.files.allowedFiles
    }).single('image');

    await upload(req, res,(err) => {
        if (err instanceof multer.MulterError) {
            res.send(err);
        } else if (err) {
            res.send(err);
        }else{
            let body = req.body;
            file = req.file;
            const obj = {
                name : (!body.name) ? dataExist.name : body.name,
                description: (!body.description) ? dataExist.description : body.description,
                address: (!body.address) ? dataExist.address : body.address,
                type: (!body.type) ? dataExist.type : body.type
            }
            if (file){
                Object.assign(obj,{image: {
                        data: fs.readFileSync("public/uploads/" + file.filename  ),
                        contentType: "image/png"
                    },});
            }
            Charities.findByIdAndUpdate(id, obj)
                .then((charity) => {
                    res.redirect('/admin/charities');
                }).catch((err) => console.log(err));
        }
    });
};

exports.getCharitiesForm = (req, res, next) => {
    res.render('admin/charities/form', {
        pageTitle: 'Charities Form',
    });
};

exports.createCharities = async (req, res, next) => {
    const upload = multer({
        storage : uploadMiddleware.files.storage(),
        allowedFiles : uploadMiddleware.files.allowedFiles
    }).single('image');

    await upload(req, res,(err) => {
        if (err instanceof multer.MulterError) {
            res.send(err);
        } else if (err) {
            res.send(err);
        }else{
            let file = req.file;
            const body = req.body;
            const obj = {
                name : body.name,
                description: body.description,
                address: body.address,
                type: body.type
            }

            if (file){
                Object.assign(obj,{image: {
                        data: fs.readFileSync("public/uploads/" + file.filename  ),
                        contentType: "image/png"
                    },});
            }

            const charity = new Charities(obj);
            charity.save()
                .then(result => {
                    res.redirect('/admin/charities');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
};

exports.deleteCharities = (req, res, next) => {
    let id = req.params.charitiesId;
    Charities.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/admin/charities');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getLoginPage = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        error : false
    });
};

const matchCredential = (username,password) => {
    if (username === process.env.MAD_USERNAME && password === process.env.MAD_PASSWORD){
        return true;
    }else{
        return false;
    }
}
exports.postLogin = (req, res, next) => {
    let body = req.body;
    if (matchCredential(body.username,body.password) === true) {
        req.session.isLoggedIn = true;
        req.session.username = body.username;
        req.session.datetime = Date.now();
        req.session.save();
        return res.redirect('/admin/charities');
    }else{
        res.render('auth/login', {
            pageTitle: 'Login',
            error : true
        });
    }
};
