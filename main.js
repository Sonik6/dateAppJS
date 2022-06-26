import * as module from './module.js'

 let currentDate = ()=> {

  let date = module.getDate()
  let time= module.getTime()

  document.getElementById('date').innerHTML = date
  document.getElementById('time').innerHTML = time
 }
 
setInterval(currentDate, 1000)

