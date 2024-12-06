import express from "express";
import { homeRquest, postRequest, postRequestWithId, about, PostMethodOF } from "../controller/controller.js";
const Router = express.Router();


// No static Server
Router.get('/', homeRquest);

Router.get('/api/post', postRequest);

Router.get('/api/user/:id', postRequestWithId);

Router.get('/about', about);

// POST
Router.post('/', postRequest);

// put == update
Router.put('/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  const whichNeedUpdateRow = dataOfPost.find((post) => post.id === id);
  if (!whichNeedUpdateRow) {
    return res.status(404).json({msg: 'Not found'});  
  }
  
  whichNeedUpdateRow.post = req.body.post;
  res.status(201).json(dataOfPost)
});

// delete
Router.delete('/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  const whichNeedUpdateRow = dataOfPost.find((post) => post.id === id);
  if (!whichNeedUpdateRow) {
    return res.status(404).json({msg: 'Not found'});  
  }
  
  dataOfPost = dataOfPost.filter((post) => post.id !== id);
  res.status(201).json(dataOfPost)
});
export default Router;