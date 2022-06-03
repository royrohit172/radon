const express = require('express');
const router = express.Router();

let players =

    [{
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "socer"
            ]
        },
        {
            "name": "suresh",
            "dob": "1/4/1996",
            "gender": "male",
            "city": "ghazipur",
            "sports": [
                "cricket"
            ],
        },
        {
            "name": "rohan",
            "dob": "1/3/1992",
            "gender": "male",
            "city": "pune",
            "sports": [
                "hockey"
            ],
        },
    ]
router.post('/player', function(req, res) {
    res.send({ data: players, status: true })
})
module.exports = router;
// adding this comment for no reason