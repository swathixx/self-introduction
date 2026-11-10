
import './App.css';
import UserCard from './components/UserCard';

function App() {

    const users = [
        {
            name: "Swathika",
            city: "Thanjavur",
            age: 23,
            email: "swathika@gmail.com",
            phone: "9876543210"
        },
        {
            name: "Priya",
            city: "Chennai",
            age: 24,
            email: "priya@gmail.com",
            phone: "9876543211"
        },
        {
            name: "Kaviya",
            city: "Coimbatore",
            age: 22,
            email: "kaviya@gmail.com",
            phone: "9876543212"
        },
        {
            name: "Divya",
            city: "Madurai",
            age: 25,
            email: "divya@gmail.com",
            phone: "9876543213"
        },
        {
            name: "Ramya",
            city: "Trichy",
            age: 23,
            email: "ramya@gmail.com",
            phone: "9876543214"
        }
    ];

    return (
        <div>
            <h1>User Details</h1>

            {users.map((user, index) => (
                <UserCard
                    key={index}
                    name={user.name}
                    city={user.city}
                    age={user.age}
                    email={user.email}
                    phone={user.phone}
                />
            ))}
        </div>
    );
}

export default App;
