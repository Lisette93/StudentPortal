import { createContext, useState } from "react";

// Create the context used to share registration data across components
export const RegistrationContext = createContext();

// Create the provider component that wraps the app
export function RegistrationProvider({ children }) {
  // Store the current registration (or null if not registered)
  const [registrations, setRegistrations] = useState(null);

  return (
    // Make the registration data available to any child component
    <RegistrationContext.Provider value={{ registrations, setRegistrations }}>
      {children}
    </RegistrationContext.Provider>
  );
}