const asyncHandler = require('express-async-handler')

//update goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field" )
    }
    res.status(200).json({message: `Set goal `})
})

module.exports = {
    getGoals,  
    setGoal,
    updateGoal,
}

