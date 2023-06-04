const express = require('express')
const {readFileSync} = require('fs')
const path = require('path') 
const app = express()
const {products} = require('./data')

app.get('/api/v1/query', (req, res)=>{
 const {name, id, search, limit} = req.query
 let setProducts = [...products]
 if (search) {
  setProducts = setProducts.filter(product => product.name.startsWith(search))
 }
 if (limit){
  setProducts = setProducts.slice(0, limit)
 }
 if (setProducts.length < 1){
  res.status(200).send('Sorry could not find item')
 }
 res.status(200).json({success:true, data:setProducts})
})
app.listen(4000, (req, res) => {
  console.log('APP LISTENING AT PORT 4000...')
})


//******USING THE  ROUTE PARAMS TO FILTER OUT DATA FROM API******//
/*app.get('/api/:productID', (req, res)=>{
 const uniqueProduct  = req.params;
 const names = products.find( product => uniqueProduct.productID === product.id);
 res.json(names.name)
})
app.listen(4000, (req, res) => {
  console.log('APP LISTENING AT PORT 4000...')
})
NOTE YOU CAN ADD MULTIPLE REQ PARAMS E.G /API/V1/:productID/reviews/:reviewID
*/


//******GETING STATIC FILES USING STATIC ******//

// app.use(express.static('./myNavBar'))
// app.get('/', (req, res)=>{
//  res.status(200).sendFile(path.resolve(__dirname, './myNavBar/newnavbar.html'))
//  console.log('USER REQUESTED HOMEPAGE');
// })
// app.listen(4000, (req, res)=>{
//  console.log('APP LISTENING AT PORT 4000...')
// })


//******ROUTING******//

// app.get('/', (req, res)=>{
//  res.status(200).sendFile(path.resolve(__dirname, './myNavBar/newnavbar.html'))
//  console.log('USER REQUESTED HOMEPAGE');
// })
// app.get('/about', (req, res)=>{
//  res.status(200).send( '<h1>Express, Js About Page</h1>')
// })
// app.get('*', (req, res)=>{
//  res.status(404).send( '<h1>Page not found</h1>')
// })


//******READING FILES /  HEADERS/ STATUS.CODE******//

// const http = require('http')
// const {readFileSync, writeFileSync} = require('fs')
// const homePage = readFileSync('./myNavBar/newnavbar.html')
// const homeStyle = readFileSync('./myNavBar/newnavbar.css')
// const homeLogic = readFileSync('./myNavBar/newnavbar.js')
// const homeImage = readFileSync('./myNavBar/img/logo.svg')
// const server = http.createServer((req, res)=>{
//  const url = req.url
//  if (url === '/'){
//   res.writeHead(200, { 'content-type': 'text/html' })
//   res.write(homePage)
//   res.end()
//  }
//  else if (url === '/newnavbar.css') {
//    res.writeHead(200, { 'content-type': 'text/css' })
//    res.write(homeStyle)
//    res.end()
//  } 
//  else if (url === '/newnavbar.js') {
//    res.writeHead(200, { 'content-type': 'text/javascript' })
//    res.write(homeLogic)
//    res.end()
//  } 
//  else if (url === '/img/logo.svg') {
//    res.writeHead(200, { 'content-type': 'image/svg+xml' })
//    res.write(homeImage)
//    res.end()
//  }
//   else if (url === '/about') {
//    res.writeHead(200, { 'content-type': 'text/html' })
//    res.write('<h1>About Page</h1>')
//    res.end() 
//   }
//  else {
//    res.writeHead(404, { 'content-type': 'text/html' })
//    res.write('<h1>404 Page not found</h1>')
//    res.end()
//  }
// })
// server.listen(8000, ()=>{
//  console.log('SERVER LISTENING AT PORT 8000...');
// })


//******INTRO TO EVENT EMITTERS******//

// const EventEmitter = require('events')
// const event = new EventEmitter
// event.on('response', (name, age)=>{
//  console.log(`hello!! i am ${name} and ${age}`);
// })
// event.emit('response' , 'john', '26')


//******READING/WRITING FILES USING ASYNC AWAIT******//

// const path = require('path');
// const util = require('util')
// const {readFile, writeFile} = require('fs').promises
// const readFileSystem = util.promisify(readFile);
// const writeFileSystem = util.promisify(writeFile);

// const fileWriter = async ()=>{
//  const first = await readFile('./content/text.txt', 'utf8')
//  console.log('i have gotten first file')
//  const second = await readFile('./content/text2.txt', 'utf8')
//  console.log('i have gotten second file')
//  console.log('i will now write your file')
//  writeFile('./content/text4.txt', `HERE IS THE REFACTORED VERSION ${first} AND ${second} FILES`, (err, res)=>{
//  })
//  console.log('I have written your file');
// }
// fileWriter()


//******READING AND WRITING FILES REFACTOR******//

// const fileReader = (path)=>{
//  readFile(path, 'utf8', (err, res)=>{
//   if (err){
//    console.log(err)
//    return;
//   }
//   return res;
//  })
// }
// const fileWriter = ()=>{
//  const first = fileReader('./content/text.txt')
//  const second = fileReader('./content/text.txt')
//  writeFile('./content/text5.txt', `HERE IS THE REFACTORED VERSION ${first} AND ${second} FILES`, (err, res)=>{
//  })
// }
// fileWriter()


//******READING AND WRITING FILES USING CALLBACK FUNCTION / CALL BACK HELL!!!******//

// readFile('./content/text.txt', 'utf8', (err, res)=>{
//  if (err){
//   console.log(err)
//   return;
//  }
//  const first = res;
//  readFile('./content/text2.txt', 'utf8', (err, res)=>{
//   if (err){
//    console.log(err)
//    return;
//   }
//   const second = res;
//   writeFile('./content/text3.txt', `HERE ARE BOTH WORLDS ${first} and ${second}`, (err, res)=>{
//    return;
//   })
//  })
// })