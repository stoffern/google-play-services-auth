import GooglePSAuth from '../src'
import env from 'node-env-file'

env(__dirname + '/.env')

var email = process.env.EMAIL || 'email'
var password = process.env.PASSWORD || 'password'


var Auth = new GooglePSAuth({
  email: email, // Email for the user to login
  password: password,   // Password for the user to login
  android_id: '9774d56d682e549c',   // Android ID
  app: 'com.nianticlabs.pokemongo',  // App name
  client_sig: '321187995bc7cdc2b5fc91b11a96e2baa8602c62',  //Client signature
  service: 'audience:server:client_id:848232511240-7so421jotr2609rmqakceuu1luuq0ptb.apps.googleusercontent.com', //OAuth service link
})

Auth.login()
.then(res => {
  console.log(res)
})
