const express = require("express")
const cors = require("cors")
const path = require("path")
const bodyParser = require('body-parser')
const posts = require("./src/utils/postsGenerator")
const LoremIpsum = require("./src/utils/loremIpsum")

const app = express()

// services
// app.use(cors())
app.use(bodyParser())
app.use(express.static(path.join(__dirname,'../frontend/build')))

const PORT = process.env.PORT || 3001
let postsNumber = 10


let newPosts = posts(Number(postsNumber))

// API routes 
app.get('/api', (req, res) => {
    res.send('hello');
})

app.get('/api/posts', (req, res) => {
    const startTime = Date.now()
    const timeOut = req.query.timeOut || 0
    if (req.query.postsNumber && req.query.postsNumber != postsNumber) {
        postsNumber = req.query.postsNumber
        newPosts = posts(Number(postsNumber))
    }

    const endTime = Date.now()
    const time = endTime - startTime

    setTimeout(() => {
        res.status(200).json({
            status: 200,
            time: { startTime, endTime, time },
            count: newPosts.length,
            data: newPosts
        })
    }, timeOut)
})

app.get(`/api/posts/:id`, (req, res) => {
    const { id } = req.params
    const timeOut = req.query.timeOut || 0
    setTimeout(() => {
        res.status(200).json({
            status: 200,
            data: newPosts[Number(id) - 1]
        })
    }, timeOut)

})

app.put('/api/posts/:id', (req, res) => {
    const { id } = req.params
    const body = req.body

    try {
        const isPostFound = newPosts.find(item => item.id === Number(id))
        if (!isPostFound) throw new Error(`No post found`)
        if(!body.title) throw new Error(`Title is mandatory!`)
        newPosts[id - 1] = { ...newPosts[id - 1], ...body }

        res.status(200).json({
            status: 200,
            data: newPosts[id - 1]
        })
    }
    catch (e) {
        res.status(201).json({
            status: 201,
            message: e.message || `Error While editing post :${id}`
        })
    }
})

app.delete(`/api/posts/:id`, (req, res) => {
    try {
        const { id } = req.params
        let postIndex
        const isPost = newPosts.find((post, i) => {
            if (post.id === Number(id)) {
                postIndex = i
                return post 
            }
        })
        if (!isPost) throw new Error(`No post found with id: ${id}`)

        newPosts.splice(postIndex, 1)

        res.status(200).json({
            status: 200,
            data: {}
        })
    }
    catch (e) {
        res.status(301).json({
            status: 301,
            message: `Error while removing item ${id}: ${e}`
        })
    }
})

app.post(`/api/posts`, (req, res) => { 
    const { title, description, content, categories } = req.body
    try {
        if (!title) throw new Error(`Title field is mandatory`)
const newPostIdx = newPosts.length+1
        newPosts.push({...req.body,id:newPostIdx})
        // const idx = newPosts.indexOf(req.body)
        res.status(200).json({
            status:200,
            data:newPosts[newPostIdx-1]
        })
    } catch (e) {
        res.status(301).json({
            status: 301,
            message: e.message,
            data: {}
        })
    }

})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build','index.html'))
})

app.listen(PORT, () => {
    console.log(`Backend Started on port: ${PORT}`)
});

