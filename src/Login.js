import React, { useRef, useState }from 'react'
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth, socialMediaAuth} from './AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {facebookProvider,googleProvider, gitHubProvider, twitterProvider, microsoftProvider, yahooProvider } from './firebase'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        

        try{
            setError('') 
            setLoading(true)
            await login(emailRef.current.value , passwordRef.current.value)
            history.push('/')
        }catch{
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    const handelOnClick = async(provider) =>{
      const res = await socialMediaAuth(provider)
      console.log(res)
    }


    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className ='w-100 text-cemnter mt-3'>
              <Link to = '/forgot-password'>
                Forgot Password?
              </Link>
            </div>
            <Button onClick={()=>handelOnClick(facebookProvider)}>Facebook</Button>
            <Button onClick={()=>handelOnClick(googleProvider)}>Google</Button>
            <Button onClick={()=>handelOnClick(gitHubProvider)}>GitHub</Button>
            <Button onClick={()=>handelOnClick(twitterProvider)}>Twitter</Button>
            <Button onClick={()=>handelOnClick(microsoftProvider)}>Microsoft</Button>
            <Button onClick={()=>handelOnClick(yahooProvider)}>Yahoo</Button>




            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>


          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </>
    )
}

export default Login
