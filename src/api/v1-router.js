'use strict';

const cwd = process.cwd();
const express = require('express');
const router = express.Router();
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);
const auth = require(`${cwd}/src/auth/middleware.js`);

// Evaluate the model, dynamically
router.param('model', modelFinder);

// API Routes
router.get('/', welcome);
router.get('/api/v1/:model', handleGetAll);
router.get('/api/v1/:model/:id', handleGetOne);
router.post('/api/v1/:model', auth('create'), handlePost);
router.put('/api/v1/:model/:id', auth('update'), handlePut);
router.patch('/api/v1/:model/:id', auth('update'), handlePatch);
router.delete('/api/v1/:model/:id', auth(), handleDelete);


// Route Handlers


function welcome(req, res, next) {
  res.status(200).send('Welcome to the page!');
}


/**
 * Fetches all records from a given model.
 * @example router.get('/api/v1/:model', handleGetAll);
 * @param request {object} Express Request Object (required params: model)
 * @param ressponsw {object} Express Response Object
 * @param next {function} Express middleware next()
 */
function handleGetAll(request,response,next) {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 * Fetches a single record from a given model.
 * @example router.get('/api/v1/:model/:id', handleGetOne);
 * @param request {object} Express Request Object (required params: model, id)
 * @param response {object} Express Response Object
 * @param next {function} Express middleware next()
 */
function handleGetOne(request,response,next) {
  request.model.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 * Creates a single record in a given model.
 * @example router.post('/api/v1/:model', handlePost);
 * @param request {object} Express Request Object (required params: req.model)
 * @param response {object} Express Response Object
 * @param next {function} Express middleware next()
 */
function handlePost(request,response,next) {
  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * Updates a single record in a given model.
 * @example router.put('/api/v1/:model/:id', handlePut);
 * @param request {object} Express Request Object (required params: model, id)
 * @param response {object} Express Response Object
 * @param next {function} Express middleware next()
 */
function handlePut(request,response,next) {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * Patchers a single record in a given model.
 * @example router.put('/api/v1/:model/:id', handlePatch);
 * @param request {object} Express Request Object (required params: model, id)
 * @param response {object} Express Response Object
 * @param next {function} Express middleware next()
 */
function handlePatch(request,response,next) {
  request.model.patch(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

/**
 * Deletes a single record from a given model.
 * @example router.delete('/api/v1/:model/:id', handleDelete);
 * @param request {object} Express Request Object (required params: model, id)
 * @param response {object} Express Response Object
 * @param next {function} Express middleware next()
 */
function handleDelete(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;