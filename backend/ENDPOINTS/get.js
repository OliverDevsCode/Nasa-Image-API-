const express = require('express');
require('dotenv').config()

const router = express.Router();

router.get('/todays-image',async(req,res) => {
    try {
        const API_KEY = process.env.API_KEY;
        console.log(API_KEY)
        const response  = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        if(!response.ok){
            return res.status(500).json({error:" Nasa Failed to fetch"});
        }
        const result = await response.json();
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({error:"Failed to fetch"})
    }
})

module.exports = router;