const { useState, useEffect } = React;

const Course = ({course, deleteCourse, updateCourse}) => {
    const [courseCopy, setCourseCopy] = useState(course)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={courseCopy.title} onChange={(e)=>setCourseCopy(courseCopy => ({...courseCopy, title: e.target.value}))}/>
                        <input value={courseCopy.owner} onChange={(e)=>setCourseCopy(courseCopy => ({...courseCopy, owner: e.target.value}))}/>
                        <button onClick={() => deleteCourse(course._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updateCourse(courseCopy._id, courseCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {courseCopy.title}
                        {courseCopy.owner}
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default Course;