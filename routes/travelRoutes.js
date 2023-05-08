const { Router } = require("express")
const router = Router()
const {
    getAllTravels,
    getTravelsById,
    addTravelBook,
    updateTravelBook,
    removeTravelBook
} = require('../controllers/travelControllers')

router.get('/', getAllTravels)
router.post('/add', addTravelBook)
router.get('/:id', getTravelsById)
router.put('/:id', updateTravelBook)
router.delete('/:id', removeTravelBook)


module.exports = router