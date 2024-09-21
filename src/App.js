import './App.css';
import { Toaster } from 'react-hot-toast';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import FetchDataComponent from './components/FetchData';

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

      <h1>
        Api Call Data
      </h1>
      <FetchDataComponent />
    </>
  );
}

export default App;
