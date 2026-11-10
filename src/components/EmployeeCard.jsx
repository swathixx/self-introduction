
function EmployeeCard({ name, email, age, city, role }) {
    return (
        <div className="employee-card">
            <h3>{name}</h3>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Role:</strong> {role}</p>
        </div>
    );
}

export default EmployeeCard;
