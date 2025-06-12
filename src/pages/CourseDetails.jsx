import { useParams } from "react-router"
import courses from "../data/courses"
import { Link } from 'react-router-dom';
import '../scss/Register.scss'


export default function CourseDetails() { 
 
    const { id } = useParams();

    const course = courses.find(c => c.id === Number(id));

if (!course) {
  return <p>Course not found</p>;
}


    return (
    <div className="page-wrapper card">
      <div className="container mt-4 card-body register-card flex justify-content-center align-item-center">
        <h2>{course.title}</h2>
        <p><strong>Course Code:</strong> {course.code}</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Credits:</strong> {course.credits}</p>
        <p><strong>Teacher:</strong> {course.teacher}</p>
        
    <Link to="/courses" className="btn btn-secondary mt-3">
      ← Back to Courses
    </Link>

  </div>
  </div>
    ) 
}