import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from './AuthContext'
import FetchRandomUser from './FetchRandomUser'
import './Dashboard.css'
 

function Dashboard() {
    const [error, setError]=useState('')
    const { currentUser,logout } = useAuth()
    const history=useHistory()

    
    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to log out')
        }
    }


    function handelFeed(){
        history.push('/feed')
    }

    return (
        <>
            <FetchRandomUser className='profile'/>

            <Card>
                <Card.Body>
                    <Button onClick={handelFeed}>Feed</Button>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to='/update-profile' className='btn btn-primary w-100 mt-3'> 
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard
