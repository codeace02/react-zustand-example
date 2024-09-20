
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const zustandStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? { ...course, completed: !course.completed } : course)
        }))
    }
})

const useZustandStore = create(
    devtools(
        persist(zustandStore, {
            name: "courses",
        })
    )
)


export default useZustandStore;