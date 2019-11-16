import axios from 'axios'
const serverUrl = process.env.REACT_APP_SERVER_URL + ":" + process.env.REACT_APP_SERVER_PORT 
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

function heartbeat() {
  // POST to server
}

function sendAction() {
  // POST action to server
}

export default {connect, heartbeat, sendAction}