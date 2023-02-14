const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = 2 //success reponse
    resolve(data)
  }, 2000)
})

console.log('Promise starts')
p.then(res => {
  console.log(res, 'I am resolved value')
})
  .catch(err => {
    console.log(err, 'I am an error')
  })
  .finally(() => {
    console.log('I am settled and End here')
  })



  //https://www.insta.com/feed?name=utakrsh&age=23
