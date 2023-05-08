import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [descr, setDescr] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/api/travel/add", {
            title, descr, image
        })
        navigate('/')
    }

    return (
        <form>
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text"
                        className="form-control"
                        id="title"
                        name='title'
                        onChange={e => { setTitle(e.target.value) }}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="descr" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="descr"
                        name='descr'
                        onChange={e => { setDescr(e.target.value) }}

                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name='image'
                        onChange={e => { setImage(e.target.value) }}

                    />
                </div>
            </div>
            <button type='button' onClick={handleSubmit} className='btn btn-primary' >Submit</button>
        </form>

    )
}

export default AddBook