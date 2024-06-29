const express = require('express')

const app = express() // the main app
const admin = express() // the sub app

const secret = express()
admin.get('/', (req, res) => {
  console.log(admin.mountpath) // /admin
  res.send('Admin Homepage')
})

app.use('/admin', admin) // mount the sub app

secret.get('/', (req, res) => {
  console.log(secret.mountpath) // /secr*t
  res.send('Admin Secret')
})

admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app


app.listen(3000)