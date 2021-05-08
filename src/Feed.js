import React, {useState, useEffect} from 'react'
import './Feed.css'
import {Link} from 'react-router-dom'
import {Image} from "react-bootstrap"
import FeedPost from './FeedPost'
import db from './firebase'
import YoutubeSearch from './YoutubeSearch'


export default function Feed() {

    const [posts, setPosts] = useState([])


    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])


    /*posts.map(user => 
        useEffect(()=>{
            db.collection('users').doc(user).collection('userPosts').onSnapshot(snapshot=>(
                setUserPosts(snapshot.docs.map(doc=>doc.data()))
            ))
        },[])
        
    )*/


    return (
        <>
        <div className='page'>
            <div className='videoSearch'>
                <YoutubeSearch/>
            </div>
            <div className = 'feed'>
                <div className='feedHeader'>
                    <Image className='mountains' src='https://svgsilh.com/svg/294111.svg' roundedCircle/>
                    <Link to="/post" className='post'>Post</Link>
                    <Link to="/" className='profile'>Profile</Link>
                </div>
                
                <div className='content'>
                    {posts.map(post=>(
                        <FeedPost
                            activity={post.activity}
                            location={post.location}
                            description={post.description}
                            photo={post.photo}
                        />
                    ))}
                </div>


            </div>
        </div>
        </>

    )
}