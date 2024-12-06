const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000; //  

// app.get('/', (req, res) => {
//     res.send('Hello sey something')
// });

//This use for only static server 
// app.use(express.static(path.join(__dirname, 'public')));

const dataOfPost = [
  {id: 1, post: 'one'},
  {id: 2, post: 'two'},
  {id: 3, post: 'three'}
];
// No static Server
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'public', 'index.html'));
  //  res.send(JSON.stringify(dataOfPost));
    res.status(200).json(dataOfPost);
});

app.get('/api/post', (req, res) => {
  const getlimit = parseInt(req.query.limit);

  // you can use if else like bellow

  if (!isNaN(getlimit) && getlimit > 0) {
   return res.status(200).json(dataOfPost.slice(0, getlimit));
  }
    res.json(dataOfPost);
  
});

app.get('/api/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // res.status(200).json(dataOfPost.filter((Post) => Post.id === id));
  const foundPostOfData = dataOfPost.find((data) => data.id === id);
  if (!foundPostOfData) {
    res.status(404).json({msg: 'not found'});
  }
  else{
    res.json(foundPostOfData);
  }
  
});

app.get('/about', (req, res) => {
    res.status(200).send('I am about')
});
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
}); 