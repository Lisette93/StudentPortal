import CourseCard from "../components/CourseCard"
import { useState } from "react"
import "../scss/Courses.scss";


export default function Courses() { 
    const [searchTerm, setSearchTerm] = useState("");

    return (
    
    <div className="courses-page">
      <div className="container py-5">
        <h1 className="mb-4 text-white">Courses</h1>

        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-4"
        />

        <CourseCard searchTerm={searchTerm} />
      </div>
    </div>
  );
}
