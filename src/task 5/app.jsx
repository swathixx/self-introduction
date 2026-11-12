
import { useState } from 'react';
import './Task5.css';

function App() {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        dob: '',
        gender: '',
        address: '',
        city: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ''
        });

        setSuccess('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim())
            newErrors.firstName = 'First name is required';

        if (!formData.lastName.trim())
            newErrors.lastName = 'Last name is required';

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Enter a valid email address';

        if (!/^[0-9]{10}$/.test(formData.mobile))
            newErrors.mobile = 'Enter a valid 10-digit mobile number';

        if (formData.password.length < 8)
            newErrors.password = 'Password must contain at least 8 characters';

        if (formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = 'Passwords do not match';

        if (!formData.dob)
            newErrors.dob = 'Date of birth is required';
        else if (new Date(formData.dob) > new Date())
            newErrors.dob = 'Date of birth cannot be in the future';

        if (!formData.gender)
            newErrors.gender = 'Please select your gender';

        if (!formData.address.trim())
            newErrors.address = 'Address is required';

        if (!formData.city.trim())
            newErrors.city = 'City is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSuccess('Registration successful! Welcome aboard.');
            setFormData(initialFormData);
            setErrors({});
        } else {
            setSuccess('');
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setErrors({});
        setSuccess('');
    };

    return (
        <div className="registration-page">
            <div className="registration-card">
                <h1>Create Account</h1>
                <p className="form-subtitle">
                    Please fill in your details to register
                </p>

                <form onSubmit={handleSubmit} noValidate>

                    <div className="form-grid">
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <small>{errors.firstName}</small>}
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <small>{errors.lastName}</small>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <small>{errors.email}</small>}
                        </div>

                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="10-digit mobile number"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            {errors.mobile && <small>{errors.mobile}</small>}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Minimum 8 characters"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <small>{errors.password}</small>}
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
                        </div>

                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                            {errors.dob && <small>{errors.dob}</small>}
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <small>{errors.gender}</small>}
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <small>{errors.address}</small>}
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <small>{errors.city}</small>}
                        </div>
                    </div>

                    {success && (
                        <div className="success-message">
                            {success}
                        </div>
                    )}

                    <div className="form-buttons">
                        <button type="submit" className="submit-btn">
                            Register
                        </button>

                        <button
                            type="button"
                            className="reset-btn"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default App;
