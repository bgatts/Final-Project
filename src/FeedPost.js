import React from 'react'
import {Card, Image} from "react-bootstrap"
import './FeedPost.css'

export default function FeedPost({activity, description, location, photo}) {
    return (
        <>
        <Card className='postcard'>
            
            <Card.Header type='text'>
                <h2 className="text-center">{location}</h2>
                <h3 className="text-center">{activity}</h3>
            </Card.Header>
            <div className='body'>
                <Image className='image' src={photo} alt='' rounded/>
                <Card.Text type='text'>
                    <h4 className="description">{description}</h4>
                </Card.Text>
            </div>
        </Card>
        <div className='gap text-center'>
            - ∆ -
        </div>

        </>
    )
}
