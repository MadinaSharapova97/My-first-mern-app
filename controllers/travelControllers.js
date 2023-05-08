const Travel = require('../models/Travelmodel')

// Method:GET
// Descr: Get all travel books
const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()

        res.status(200).json({
            message: "succes",
            travels:travels.reverse()
        })
    } catch (error) {
        res.send(error)
    }
}

// Method:GET
// Descr: Get one travel book by id
const getTravelsById = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)
        if (!travel) {
            return res.status(404).json({
                message: "Not found",
            })
        }
        return res.status(200).json({
            message: "success",
            travel
        })
    } catch (error) {
        res.send(error)
    }
}
// Method:POST
// Descr: Add new travel book
const addTravelBook = async (req, res) => {
    try {
        const { title, image, descr } = req.body

        const newTravel = Travel.create({
            title,
            image,
            descr
        })
        res.status(201).json({
            message: "success",
            newTravel
        })
    } catch (error) {
        res.send(error)
    }
}
// Method:PUT
// Descr: Edit travel book by id
const updateTravelBook = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id,{
            title,
            image,
            descr
        })
        res.status(200).json({
            message: "success",
            updatedTravel
        })
    } catch (error) {
        res.send(error)
    }
}

// Method:DELETE
// Descr: Removing travel book by id
const removeTravelBook = async (req, res) => {
    try {
        const updatedTravel = await Travel.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message: "Deleted",
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAllTravels,
    getTravelsById,
    addTravelBook,
    updateTravelBook,
    removeTravelBook
}

