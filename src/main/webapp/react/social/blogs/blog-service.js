const USERS_URL = "http://localhost:8080/api/users"
const BLOGS_URL = "http://localhost:8080/api/blogs"

export const createBlogForUser = (userId, blog) => {
    return fetch(`${USERS_URL}/${userId}/blogs`, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}


export const findBlogsForUser = (userId) => {
    return fetch(`${USERS_URL}/${userId}/blogs`)
        .then(response => response.json())
}

export const findAllBlogs = () => {
    return fetch(BLOGS_URL)
        .then(response => response.json())
}

export const findBlogById = (id) => {
    return fetch(`${BLOGS_URL}/${id}`)
        .then(response => response.json())
}

export const updateBlog = (id, user) => {
    return fetch(`${BLOGS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

const deleteBlog = (id) => {
    return fetch(`${BLOGS_URL}/${id}`, {
        method: "DELETE"
    })
}

export default {
    createBlogForUser,
    findBlogsForUser,
    findAllBlogs,
    findBlogById,
    updateBlog,
    deleteBlog
}
