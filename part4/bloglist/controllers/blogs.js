const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


blogsRouter.get('/',async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
  })
  
blogsRouter.get('/:id', (request, response, next) => {
    Blog.findById(request.params.id)
        .then(blog => {
        if (blog) {
            response.json(blog)
        } else {
            response.status(404).end()
        }
        })
        .catch(error => next(error))
    })

blogsRouter.post('/', (request, response, next) => {
    const body = request.body

    const blog = new Blog({
        content: body.content,
        important: body.important || false,
    })

    blog.save()
        .then(savedBlog => {
        response.json(savedBlog)
        })
        .catch(error => next(error))
    })

blogsRouter.delete('/:id', (request, response, next) => {
    Blog.findByIdAndDelete(request.params.id)
        .then(() => {
        response.status(204).end()
        })
        .catch(error => next(error))
    })

blogsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const blog = {
        content: body.content,
        important: body.important,
    }

    Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
    response.json(updatedBlog)
    })
    .catch(error => next(error))
})
module.exports = blogsRouter