
import { useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import './Task3.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const employees = [
        {
            id: 1,
            name: "Swathika",
            email: "swathika@gmail.com",
            age: 23,
            city: "Thanjavur",
            role: "Full Stack Developer"
        },
        {
            id: 2,
            name: "Priya",
            email: "priya@gmail.com",
            age: 24,
            city: "Chennai",
            role: "Frontend Developer"
        },
        {
            id: 3,
            name: "Kaviya",
            email: "kaviya@gmail.com",
            age: 22,
            city: "Coimbatore",
            role: "Backend Developer"
        },
        {
            id: 4,
            name: "Divya",
            email: "divya@gmail.com",
            age: 25,
            city: "Madurai",
            role: "UI/UX Designer"
        },
        {
            id: 5,
            name: "Ramya",
            email: "ramya@gmail.com",
            age: 23,
            city: "Trichy",
            role: "React Developer"
        }
    ];

    return (
        <div className="app-container">

            <header className="navbar">
                <h2>DevPortal</h2>

                <button
                    className="login-btn"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </header>

            {isLoggedIn ? (
                <div className="home-section">
                    <h1>Welcome to DevPortal!</h1>
                    <p>You are successfully logged in.</p>

                    <h2>Our Team Members</h2>

                    <div className="employee-container">
                        {employees.map((employee) => (
                            <EmployeeCard
                                key={employee.id}
                                name={employee.name}
                                email={employee.email}
                                age={employee.age}
                                city={employee.city}
                                role={employee.role}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="login-section">
                    <h1>Welcome Back!</h1>
                    <p>Please login to view the employee dashboard.</p>

                    <button
                        className="login-btn"
                        onClick={() => setIsLoggedIn(true)}
                    >
                        Login Now
                    </button>
                </div>
            )}

        </div>
    );
}

export default App;
