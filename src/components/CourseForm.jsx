import React, { useState } from 'react'
import useZustandStore from '../app/zustandStore';
import toast from 'react-hot-toast';

export default function CourseForm() {

    const addCourse = useZustandStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState('');

    const handleCourse = () => {
        if (!courseTitle) return toast.error("Please add a course title!")

        addCourse({
            id: Math.ceil(Math.random() * 100000),
            title: courseTitle,
        })

        setCourseTitle('')

        return toast.success("Course added successfully!")

    }

    return (
        <>
            <div className="form-container">
                <input
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    className="form-input" />
                <button
                    onClick={handleCourse}
                    className="form-submit-btn">
                    Add Course
                </button>
            </div>
        </>
    )
}
