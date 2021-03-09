import Course from "./course";

const { useState, useEffect } = React;

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [newCourse, setNewCourse] = useState({})
    const createCourse = (course) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(course => setCourses(courses => ([...courses, course])))
    const updateCourse = (id, newCourse) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newCourse),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(course => setCourses(courses => (courses.map(course => course._id === id ? newCourse : course))))
    const findAllCourses = () =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses`)
            .then(response => response.json())
            .then(courses => setCourses(courses))
    const deleteCourse = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(courses => setCourses(courses => courses.filter(course => course._id !== id)))
    useEffect(() => {
        findAllCourses()
    }, [])
    return(
        <div>
            <h2>Courses {courses.length}</h2>
            <input value={newCourse.title}
                   onChange={(e) => setNewCourse(newCourse => ({...newCourse, title: e.target.value}))}/>
            <input value={newCourse.owner}
                   onChange={(e) => setNewCourse(newCourse => ({...newCourse, owner: e.target.value}))}/>
            <button onClick={() => createCourse(newCourse)}>Create</button>
            {
                courses.map(course =>
                    <Course key={course._id}
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                            course={course}/>)
            }
        </div>
    )
}

export default Courses;