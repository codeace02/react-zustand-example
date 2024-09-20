import './App.css';
import { Toaster } from 'react-hot-toast';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {

  return (
    <>
      <Toaster />

      <div className="main-container">
        <div className="main-container">
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "2rem"
            }}
          >
            My Course list
          </h1>
          <CourseForm />
          <CourseList />
        </div>
      </div>
    </>
  );
}

export default App;
