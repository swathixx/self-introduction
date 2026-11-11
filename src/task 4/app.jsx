
import { useState } from 'react';
import './Task4.css';

function App() {
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(false);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={isDark ? 'app dark' : 'app light'}>

            <div className="counter-card">

                <h1>Counter App</h1>
                <p className="subtitle">
                    Manage your count with ease
                </p>

                <div className="counter-display">
                    {count}
                </div>

                <div className="counter-buttons">
                    <button className="increment" onClick={increment}>
                        + Increment
                    </button>

                    <button className="decrement" onClick={decrement}>
                        - Decrement
                    </button>

                    <button className="reset" onClick={reset}>
                        Reset
                    </button>
                </div>

                <div className="theme-section">
                    <h3>
                        Current Theme: {isDark ? 'Dark Mode' : 'Light Mode'}
                    </h3>

                    <button className="theme-btn" onClick={toggleTheme}>
                        {isDark ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
                    </button>
                </div>

            </div>

        </div>
    );
}

export default App;
