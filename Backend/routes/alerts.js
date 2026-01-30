const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Alert = require('../models/Alert');

// Add new alert POST = /api/alerts/addAlert
router.post('/AddAlert', [
    body('country', 'Country name cant be empty').notEmpty(),
    body('city', 'City name cant be empty').notEmpty(),
    body('visaType', 'Visa type cant be empty').notEmpty(),
    body('status', 'Status cant be empty').notEmpty()
], async (req, res) => {

    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Create new project
        const { country, city, visaType, status } = req.body;
        let alert = new Alert({
            country, city, visaType, status
        })
        const savedAlert = await alert.save();
        res.json(savedAlert);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server error");
    }
})

// Delete alert DELETE = /api/alerts/deleteAlert
router.delete('/deleteAlert/:id', async (req, res) => {

    try {
        // find alert by id
        let alert = await Alert.findById(req.params.id);
        if (!alert) {
            return res.status(400).json("Alert with this id does not exists");
        }

        // Delete alert
        alert = await Alert.findByIdAndDelete(req.params.id);
        res.json({ message: "Alert deleted successfuly", alert: alert });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server error");
    }
})

// Get all alerts GET = /api/alerts/getAllAlerts 
router.get('/getAllAlerts', async(req, res) =>{
    try {
        let alerts = await Alert.find();
        res.json(alerts);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server error");
    }
})

// Update status of alert PUT = /api/alerts/updateStatus
router.put('/updateStatus/:id', async (req, res)=>{
    try {
        const {status} = req.body;
        let newStatus = {};
        if(status) { newStatus.status = status }

        let alert = await Alert.findByIdAndUpdate(req.params.id, {$set: newStatus}, {new : true});
        res.json(alert);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server error");
    }
})

module.exports = router