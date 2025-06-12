import { useState } from "react"
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";


export default function Register() { 
// State for input values
const [name, setName] = useState("");
const [email, setEmail] = useState ("");
const [selectedCourse, setSelectedCourse] = useState("");

// State for validation error messages
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [courseError, setCourseError] = useState("");

// Success message after registration
const [successMessage, setSuccessMessage] = useState("");

// Access global registration context
const { setRegistrations } = useContext(RegistrationContext);


// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault(); 
  
  // Clear previous error messages
  setNameError("");
  setEmailError("");
  setCourseError("");

  let isValid = true;
   // Validate name
   if (!name.trim()) {
    setNameError("Name is required");
    isValid = false;
  }
  // Validate email
  if (!email.trim()) {
    setEmailError("Email is required");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError("Enter a valid email");
    isValid = false;
  }
  // Validate course selection
  if (!selectedCourse) {
    setCourseError("Please select a course");
    isValid = false;
  }
  // If all is valid, save registration
  if (isValid) {
  const registration = {
  name,
  email,
  course: selectedCourse,
  timestamp: new Date().toISOString()
};

// Save to context and localStorage
setRegistrations(registration); 
localStorage.setItem("registration", JSON.stringify(registration));

  // Clear form
  setName("");
  setEmail("");
  setSelectedCourse("");
  // Show success message
  setSuccessMessage("Registration saved!");
  setTimeout(() => setSuccessMessage(""), 3000);
}

};


return (
<div>
{successMessage && <p className="text-success ">{successMessage}</p>}

<form onSubmit={handleSubmit}> 
  {/* Name input */}
    <TextField 
      label="Full Name"
      variant="outlined"
      fullWidth
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="mb-3"
      error={!!nameError}
      helperText={nameError}
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{ style: { color: 'white' } }}
    /> 

  {/* Email input */}
    <TextField
      label="Email adress"
      variant="outlined"
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mb-3"
      error={!!emailError}
      helperText={emailError}
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{ style: { color: 'white' } }}
    /> 

  {/* Course dropdown */}
    <FormControl fullWidth className="mb-3 " error={!!courseError}>
    <InputLabel id="course-label" style={{ color: "white" }}>Course</InputLabel>
    <Select
      labelId="course-label"
      id="course"
      value={selectedCourse}
      label="Course"
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
    <MenuItem value="">
      <em>Choose a course</em>
    </MenuItem>
    <MenuItem value="WEB101">Intro to Web Development</MenuItem>
    <MenuItem value="REACT201">React Fundamentals</MenuItem>
    <MenuItem value="DB102">Database Design</MenuItem>
    </Select>
      {courseError && <p style={{ color: 'red', fontSize: '0.875rem' }}>{courseError}</p>}
    </FormControl>

  {/* Submit button */}
    <Button className="btn btn-primary mt-auto"
      variant="contained"
      color="primary"
      type="submit"
    >
      Register
    </Button>

</form>
</div>

  );
    
}