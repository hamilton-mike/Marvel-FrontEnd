import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { Container } from '../globalStyles'

const Edit = () => {
    const navigate = useNavigate();
    const [edit, setEdit] = useState([]);
    const params = useParams();
    const { id } = params;
    const teamId = id.substring(0, 24);

    const fromBackend = async () => {
        try {
            const get = await axios(`http://localhost:9000/team/${teamId}`)
            setEdit(get.data)
        } catch (error) {
            console.error(error);
        }
    }

    const editTeam = async (id, title) => {
        try {
            const editTeam = await axios.put(`http://localhost:9000/team/${id}`, {
                _id: id,
                title
            });
            setEdit(editTeam)
        } catch (error) {
            console.error(error);
        }
        navigate('/create')
    }

    const handleChange = e => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const { _id, title } = edit
        editTeam(_id, title)
    }

    useEffect(() => {
        fromBackend()
    }, [])


    return (
        <>
            <Navbar />
            <Container style={{ paddingTop: '10%' }}>
                <p>heuihfiudhsj</p>
                <form onSubmit={handleSubmit}>
                    <label>Edit</label>
                    <input type="text" id='title' name='title' onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </Container>
            <Footer />
        </>
    )
}

export default Edit
