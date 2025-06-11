import { createContext, useState } from "react";

// Skapa context
export const RegistrationContext = createContext();

// Skapa provider
export function RegistrationProvider({ children }) {
  const [registrations, setRegistrations] = useState(null);

  return (
    <RegistrationContext.Provider value={{ registrations, setRegistrations }}>
      {children}
    </RegistrationContext.Provider>
  );
}