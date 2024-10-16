/*
Explain as much of this route as you can. 
Use line numbers and technical terms.
*/

const express = require('express')
const bookmarks = express.Router()

const {getBookmark} = require('./controllers/bookmarks')

// Get Bookmark By Id
bookmarks.get('/:id', async (req, res) => {
  const { id } = req.params
  const bookmark = await getBookmark(id)
  if (bookmark.id) {
    res.status(200).json(bookmark)
  } else {
    res.status(404).json({ error: 'not found' })
  }
})

