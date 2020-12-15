const express = require('express');
const controller = require('../controllers/contactsController');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.mainPage);
router.get('/proyecto', contactsController.list);
router.post('/add', contactsController.save);
router.get('/delete/:id', contactsController.delete);
router.get('/update/:id', contactsController.edit);
router.post('/update/:id', contactsController.update);

// Public

router.get('/public/styles.css', contactsController.styles);
router.get('/public/background.jpg', contactsController.background);
router.get('/public/favicon.png', contactsController.favicon);
router.get('/public/Me.jpeg', contactsController.myPhoto);
router.get('/public/misionTic.png', contactsController.misionTic);

module.exports = router;