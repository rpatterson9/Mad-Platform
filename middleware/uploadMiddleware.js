const multer = require('multer');
module.exports.files={
    storage:function(){
        return multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public/uploads')
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname)
            }
        });
    },
    allowedFiles:function(req, file, cb) {
        // Accept images only
        if (!file.originalname.match(/\.(pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = 'Only pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF file type are allowed!';
            return cb(new Error('Only pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF file type  are allowed!'), false);
        }
        cb(null, true);
    }
}
