import React from 'react'
import useZustandStore from '../app/zustandStore'

const CourseList = () => {

    const courses = useZustandStore(state => state.courses);
    const removeCourse = useZustandStore(state => state.removeCourse);
    const toggleCourseStatus = useZustandStore(state => state.toggleCourseStatus);

    return (
        <>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <div key={i}>
                            <li
                                className={`course-item`}
                                style={{
                                    backgroudColor: course.completed ? "red" : "white"
                                }}
                            >
                                <span className="course-item-col-1">
                                    <input
                                        checked={course.completed}
                                        type="checkbox"
                                        onChange={(e) => {
                                            toggleCourseStatus(course.id)
                                        }}
                                    />
                                </span>
                                <span>{course?.title}</span>
                                <button
                                    onClick={() => {
                                        removeCourse(course.id)
                                    }}
                                    className="delete-btn">Delete</button>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

export default CourseList