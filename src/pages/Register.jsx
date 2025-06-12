import RegisterForm from "../components/RegisterForm";
import {RegistrationContext} from "../contexts/RegistrationContext";
import '../scss/Register.scss'

export default function Register() {

  return (
    <div className="page-wrapper d-flex justify-content-center align-items-center">
    <div className="register-card card-body  container mt-5">
      <h2>Register for a course</h2>
      <RegisterForm />
      
    </div>
    </div>
  );
}


