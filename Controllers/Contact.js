const Contact = require('../Models/Contact')



exports.Addcontact = async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})

        console.log(found)

        if(found){
            return res.status(400).send('Email already exists')
        }



        const newContact = new Contact(req.body)

        await newContact.save()

        res.status(200).send({Msg : "Contact Added",newContact})
    } catch (error) {
        res.status(500).send('could not add contact')
    }
}

exports.GetAllcontacts = async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({Msg : "contact list",contacts})
    } catch (error) {
        res.status(500).send('could not get contacts')
        
    }
}

exports.DeleteContact = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id)

        res.status(200).send("contact deleted")
    } catch (error) {
        res.status(500).send('could not delete contact')
    }

}

exports.UpdateContact = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send("contact updated")
    } catch (error) {
        res.status(500).send('could not delete contact')
    }

}

exports.GetOneContact = async(req,res)=>{
    try {
        const {id} = req.params
        const found = await Contact.findById(id)

        res.status(200).send(found)
    } catch (error) {
        res.status(500).send('could not delete contact')
    }

}

