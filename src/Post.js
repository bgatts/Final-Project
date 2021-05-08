import React, { useState }from 'react'
import {Form, Button, Card} from "react-bootstrap"
import {Link } from 'react-router-dom'
import './Post.css'
import db from './firebase'



function Post() {
    const [photo, setPhoto] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [activity, setActivity] = useState('')

    function handlePost(e){
        e.preventDefault()
        
        db.collection('posts').add({
            activity: activity,
            description: description,
            location: location,
            photo: photo
        })
        setActivity('')
        setDescription('')
        setPhoto('')
        setLocation('')
    }

    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Tell Us About Your Adventure</h2>
            {/*{error && <Alert variant="danger">{error}</Alert>}*/}
            <Form onSubmit={handlePost}>
              <Form.Group id="picture">
                <Form.Label>Picture Link</Form.Label>
                <input
                        onChange={(e) => setPhoto(e.target.value)}
                        value={photo}
                        className='input'
                        type='text'
                />              
            </Form.Group>
              <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className='input'
                        type='text'
                />              
            </Form.Group>
              <Form.Group id="location">
                <Form.Label>Location</Form.Label>
                <input
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        className='input'
                        type='text'
                />              </Form.Group>
              <Form.Group id="activity'">
                <Form.Label>Activity</Form.Label>
                <input
                        onChange={(e) => setActivity(e.target.value)}
                        value={activity}
                        className='input'
                        type='text'
                />
              </Form.Group>
              <Button onClick={handlePost} type = "submit" className="tweetBox_tweetButton">
                <Link to='/feed'>Post</Link>
              </Button>

            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to="/feed">Cancel</Link>
        </div>
      </>
    )
}

export default Post
