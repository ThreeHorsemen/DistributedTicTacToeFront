import axios from 'axios'
const serverUrl = process.env.REACT_APP_SERVER_URL
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

// Used for initial connection to python server
const connect = async () => {
  const request = await axios.get(serverUrl + "/game", config).then(response => response.data)
  console.log(request)
  return request
}

// Used to send regular heartbeats to the server
const heartbeat = async (id) => {
  const body = {
    id: id
  }
  const request = await axios.post(serverUrl + "/heartbeat", body, config)
  return request.data
}

// Used to send a players move to the server
const sendAction = async (id, move) => {
  const body = {
    id: id,
    index: move
  }
  const request = await axios.post(serverUrl + "/turn", body, config)
  return request.data
}

export default {connect, heartbeat, sendAction}