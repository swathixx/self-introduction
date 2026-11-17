
import { useState, useEffect } from 'react';
import './task7.css';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="user-page">
            <div className="user-container">
                <header className="page-header">
                    <h1>User Directory</h1>
                    <p>Explore user information fetched from an API</p>
                </header>

                <div className="user-summary">
                    <h2>Registered Users</h2>
                    <span>{users.length} Users</span>
                </div>

                {loading && (
                    <p className="loading-message">
                        Loading user data...
                    </p>
                )}

                {error && (
                    <p className="error-message">
                        Error: {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="user-grid">
                        {users.map((user) => (
                            <div className="user-card" key={user.id}>
                                <div className="user-card-header">
                                    <span className="user-id">
                                        ID: {user.id}
                                    </span>
                                    <div className="user-avatar">
                                        {user.name.charAt(0)}
                                    </div>
                                    <h3>{user.name}</h3>
                                    <p className="username">
                                        @{user.username}
                                    </p>
                                </div>

                                <div className="user-details">
                                    <p>
                                        <strong>Email:</strong>
                                        <span>{user.email}</span>
                                    </p>
                                    <p>
                                        <strong>Phone:</strong>
                                        <span>{user.phone}</span>
                                    </p>
                                    <p>
                                        <strong>Website:</strong>
                                        <span>{user.website}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
