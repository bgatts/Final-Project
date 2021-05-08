import axios from 'axios'
const KEY='AIzaSyAv48TpouMRCsBKx00PW2zdQ1Ie4SHtMis'

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        matResults:5,
        key: KEY
    }

})