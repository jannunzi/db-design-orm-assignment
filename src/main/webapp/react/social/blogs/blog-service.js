const USERS_URL = "http://localhost:8080/api/users"
const BLOGS_URL = "http://localhost:8080/api/blogs"

export const createBlogForUser = (userId, blog) =>
    fetch(`${USERS_URL}/${userId}/blogs`, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllBlogs = () =>
    fetch(BLOGS_URL)
        .then(response => response.json())

export const findUserById = (id) =>
    fetch(`${USERS_URL}/${id}`)
        .then(response => response.json())

export const updateUser = (id, user) =>
    fetch(`${USERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteUser = (id) =>
    fetch(`${USERS_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
}
