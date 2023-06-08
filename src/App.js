import React from "react"
import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tasks from "./components/Tasks"
// import Dashboard from "./Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
// import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/" element={<Login />} />
              <Route path="/Add task" element={<Tasks />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App