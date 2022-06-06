const express = require('express');
const mainController = require('../controllers/main');
const historyController = require('../controllers/histories');
const router = express.Router();

router.get('/', mainController.getMain);
router.get('/charities/search', mainController.getSearch);
router.get('/details/:charitiesId', mainController.getDetail);
router.get('/details2/:charitiesId', mainController.getDetail);
router.post('/create/history', historyController.createHistories);
router.get('/histories/get', historyController.getHistories);
router.get('/email/send', historyController.SendEmail);


module.exports = router;
