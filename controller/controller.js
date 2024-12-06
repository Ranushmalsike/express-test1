const dataOfPost = [
  {id: 1, post: 'one'},
  {id: 2, post: 'two'},
  {id: 3, post: 'three'}
];

// @desc
// @Router
export const homeRquest = (req, res) => {
  // res.sendFile(path.join(__dirname, 'public', 'index.html'));
  //  res.send(JSON.stringify(dataOfPost));
    res.status(200).json(dataOfPost);
};

export const postRequest = (req, res) => {
  const getlimit = parseInt(req.query.limit);

  // you can use if else like bellow

  if (!isNaN(getlimit) && getlimit > 0) {
   return res.status(200).json(dataOfPost.slice(0, getlimit));
  }
    res.json(dataOfPost);
  
}

export const postRequestWithId = (req, res) => {
  const id = parseInt(req.params.id);
  // res.status(200).json(dataOfPost.filter((Post) => Post.id === id));
  const foundPostOfData = dataOfPost.find((data) => data.id === id);
  if (!foundPostOfData) {
    res.status(404).json({msg: 'not found'});
  }
  else{
    res.json(foundPostOfData);
  }
  
}


export const about = (req, res) => {
    // res.status(200).send('I am about')
    res.sendFile('about.html');
}


export const PostMethodOF = (req, res) =>{
  // console.log(req.body);
  const newdata = {
    id: dataOfPost.length + 1,
    post: req.body.post
};

if (!newdata) {
  return res.status(400).json({msg: 'invalid values'})
}
  dataOfPost.push(newdata);
  res.status(201).json(dataOfPost);
  
}