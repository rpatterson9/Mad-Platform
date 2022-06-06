const Histories = require('../models/histories');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const EmailSender = require('email-templates');
const moment = require('moment');
dotenv.config();

let getDate = async () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
}

exports.createHistories = async (req, res, next) => {
        const body = req.body;
       let obj = {
            donor_name : body.donor_name,
            donor_email: body.donor_email,
            donor_address : body.donor_address,
            amount: body.amount,
            type: body.type,
            cv_rate: body.cv_rate,
            hash: body.hash,
            charities: body.charities,
            tx_id : body.tx_id,
            item : body.item
        }

            const history = new Histories(obj);
            history.save()
                .then(result => {
                    // console.log(result);
                    res.send({
                        status : 'OK',
                        msg : 'Success created history',
                        data : result
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.send(false);
                });
};

exports.getHistories = async (req, res, next) => {
    let result, histories, params;
    params = req.query;

    if(!params.address || !params.type || !params.charity_id){
        res.send({
            status : 'ERROR',
            msg : 'Invalid params'
        });
    }

    histories = await Histories.find({
        donor_address : params.address,
        type : params.type,
        // $or: [{ type: 'mad' }, { type : params.type }],
        charities : params.charity_id
    },null,{sort : 'ASC'}).populate('charities',['description','address','name']);

    if (histories){
        result = histories;
        return res.send({
            status : 'OK',
            data : result
        })
    }

    return res.send({
        status : 'ERROR',
        msg : 'Error'
    })
};

exports.SendEmail = async (req, res, next) => {
    let transporter,options, params, data = {}, history, dataHistory;
    params = req.query;

    history = await Histories.find({
        tx_id : params.uuid
    },null,{sort : 'ASC'}).populate('charities',['description','address','name','_id']);

    try{

        if(history.length === 1 ){
            dataHistory = history[0];
        }else{
            dataHistory = history[1];
        }

        data = {
            date : await getDate(),
            receipt_id : params.uuid,
            tx_id : dataHistory.hash,
            charity_name : dataHistory.charities.name,
            donor_name : dataHistory.donor_name,
            donor_email : dataHistory.donor_email,
            charity_id : dataHistory.charities.id,
            histories : history
        };

        options = {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        };

        transporter = nodemailer.createTransport(options);
        const email = new EmailSender({
            transport: transporter,
            send : true,
            preview : false,
            views: {
                options: {
                    extension: 'ejs' // <---- HERE
                }
            }
        });

       email.send({
            template: 'receipt',
            message: {
                from: process.env.MAIL_SENDER,
                to: [data.donor_email, process.env.MAIL_SENDER],
                subject : 'MAD Token Transaction Receipt'
            },
            locals: data
        }).then(() => {
           return res.send({
               status : 'OK',
               msg : 'Success send email'
           });
       }).catch((err) => {
           return res.send({
               status : 'ERROR',
               msg : err
           })
       });

    }catch(err){
        return res.send({
            status : 'ERROR',
            msg : err
        })
    }
};
