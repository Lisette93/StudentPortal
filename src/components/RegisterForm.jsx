import { useState } from "react"
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";


export default function Register() { 
const [name, setName] = useState("");
const [email, setEmail] = useState ("");
const [selectedCourse, setSelectedCourse] = useState("");
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [courseError, setCourseError] = useState("");
const [successMessage, setSuccessMessage] = useState("");

const { setRegistrations } = useContext(RegistrationContext);



const handleSubmit = (e) => {
  e.preventDefault(); 
  
  setNameError("");
  setEmailError("");
  setCourseError("");

  let isValid = true;

   if (!name.trim()) {
    setNameError("Name is required");
    isValid = false;
  }

  if (!email.trim()) {
    setEmailError("Email is required");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError("Enter a valid email");
    isValid = false;
  }

  if (!selectedCourse) {
    setCourseError("Please select a course");
    isValid = false;
  }

  if (isValid) {
  const registration = {
  name,
  email,
  course: selectedCourse,
  timestamp: new Date().toISOString()
};

setRegistrations(registration); 
localStorage.setItem("registration", JSON.stringify(registration));


  setName("");
  setEmail("");
  setSelectedCourse("");
  setSuccessMessage("Registration saved!");
  setTimeout(() => setSuccessMessage(""), 3000);
}

};


return (
<div>
{successMessage && <p className="text-success ">{successMessage}</p>}

<form onSubmit={handleSubmit}> 
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