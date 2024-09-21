
import axios from 'axios'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const zustandStore = (set) => ({

    data: [],
    loading: false,
    error: null,

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
    },

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Sample API
            set({ data: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
})

const useZustandStore = create(
    devtools(
        persist(zustandStore, {
            name: "courses",
            name:"fetchapi"
        })
    )
)


export default useZustandStore;