import React from 'react'
import './RandomUser.css'

export default class FetchRandomUser extends React.Component {

    state={
        loading: true,
        person: null
    }

    async componentDidMount(){
        const url = 'https://api.randomuser.me/'
        const response = await fetch(url);
        const data = await response.json()
        this.setState({person: data.results[0], loading: false})
        console.log(data)


    }

    render(){
        return<div>
            {this.state.loading || !this.state.person ? <div>loading...</div> : <div>
                <img className='profile' src={this.state.person.picture.large} alt=''/>
            </div>}
        </div> 
    }
}
