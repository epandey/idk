const express = require('express')
const router = express.Router()
const { getGoals, updateGoal, setGoal } = require('../controllers/customerController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal)

module.exports = router