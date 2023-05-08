import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateBook = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [descr, setDescr] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {

        const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`)
        setTitle(data.travel.title)
        setDescr(data.travel.descr)
        setImage(data.travel.image)
        // console.log(data.travel);
    }

    const updateHandler = async (e) =>{
      e.preventDefault()
      await axios.put(`http://localhost:5000/api/travel/${id}`,{
        title,
        descr,
        image
      })
      navigate('/')
    }
 
    useEffect(() => {
       fetchData()
    }, [])

    return (
        <form>
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text"
                        className="form-control "
                        id="title"
                        name='title'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
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
                        onChange={e => setDescr(e.target.value)}
                        value={descr}
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
                        onChange={e => setImage(e.target.value)}

                        value={image}
                    />
                </div>
            </div>
            <button onClick={updateHandler} type='button' className='btn btn-primary' >Submit</button>
        </form>

    )
}

export default UpdateBook