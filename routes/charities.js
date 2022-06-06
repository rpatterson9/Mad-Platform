const express = require('express');
const charitiesController = require('../controllers/charities');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/admin/login', charitiesController.getLoginPage);
router.post('/admin/login', charitiesController.postLogin);
router.get('/admin/dashboard',isAuth, charitiesController.getDashboard);
router.get('/admin/charities',isAuth, charitiesController.getCharities);
router.get('/admin/create',isAuth, charitiesController.getCharitiesForm);
router.get('/admin/:charitiesId/edit',isAuth, charitiesController.editCharities);
router.post('/admin/:charitiesId/edit',isAuth, charitiesController.editCharitiesPut);
router.put('/admin/:charitiesId/edit',isAuth, charitiesController.editCharitiesPut);
router.post('/admin/create',isAuth, charitiesController.createCharities);
router.get('/admin/:charitiesId/delete',isAuth, charitiesController.deleteCharities);

module.exports = router;
