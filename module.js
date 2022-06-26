export let getDate = ()=> {
  var date = new Date()
  return `${date.toLocaleDateString('pl-PL', {weekday: 'long', month:'long'})} <br> ${date.toLocaleDateString('pl-PL', {year: 'numeric'})}`
}

export let getTime = ()=> {
  var date = new Date()
  return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}