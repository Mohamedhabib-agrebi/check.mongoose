const express = require('express')

const { Addcontact, GetAllcontacts, DeleteContact, UpdateContact, GetOneContact } = require('../Controllers/contact')


const contactRouter = express.Router()

contactRouter.post('/addContact',Addcontact)


contactRouter.get('/getAllcontacts',GetAllcontacts)

contactRouter.delete('/deleteContact/:id',DeleteContact)

contactRouter.put('/updateContact/:id',UpdateContact)

contactRouter.get('/getOneContact/:id',GetOneContact)





module.exports = contactRouter