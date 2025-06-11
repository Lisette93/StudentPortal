import courses  from '../data/courses'
import { Link } from 'react-router-dom';
import '../scss/Courses.scss'


export default function CourseCard() {

    const showCourses = courses.map(( course) => {
            
        return (

    <div className="col-md-4 mb-4" key={course.id}>
      <div className="course-card h-100 shadow-sm p-3">
       <div className=" d-flex flex-column justify-content-between h-100">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <p className="card-text text-muted">Credits: {course.credits}</p>
        <Link to={`/courses/${course.id}`} className="btn btn-primary mt-auto">
        Read more
        </Link>
        </div>
      </div>
    </div>

     );
        });

    return(
        <div className="container mt-5">
            <div className="row">
        {showCourses}
        </div>
        </div>
    )
}