import axios from 'axios'
const serverUrl = process.env.REACT_APP_SERVER_URL
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const connect = async () => {
  const request = await axios.get(serverUrl + "/game", config).then(response => response.data)
  console.log(request)
  return request
}

const heartbeat = async (id) => {
  const body = {
    id: id
  }
  const request = await axios.post(serverUrl + "/heartbeat", body, config)
  return request.data
}

const sendAction = async (id, move) => {
  const body = {
    id: id,
    index: move
  }
  const request = await axios.post(serverUrl + "/turn", body, config)
  return request.data
}

export default {connect, heartbeat, sendAction}