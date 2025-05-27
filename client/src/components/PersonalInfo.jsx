import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PersonalInfo({ formData, updateFormData, nextStep }) {
    const [isUserExist, setisUserExist] = useState(null);
    const [existingUser, setexistingUser] = useState(null);
    const [usernameChecking, setUsernameChecking] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const api = import.meta.env.VITE_API_URL

    useEffect(() => {
        if (!formData.username || formData.username.length < 4) {
            setisUserExist(null);
            return;
        }
        setUsernameChecking(true);
        const delays = setTimeout(async () => {
            try {
                const res = await axios.post(`${api}/api/user/username`, { username: formData.username });
                setisUserExist(res.data.exsit);
                setexistingUser(res.data.user);
            } catch {
                setisUserExist(null);
                setexistingUser(null);
            } finally {
                setUsernameChecking(false);
            }
        }, 500);
        return () => clearTimeout(delays);
    }, [formData.username]);


    useEffect(() => {
        const val = formData.newPassword || '';
        let strength = '';
        if (val.length >= 8) {
            if (/[A-Z]/.test(val) && /[a-z]/.test(val) && /\d/.test(val) && /[!@#$%^&*(),.?":{}|<>]/.test(val)) {
                strength = 'Strong';
            } else {
                strength = 'Weak';
            }
        } else if (val.length > 0) {
            strength = 'Too short';
        }
        setPasswordStrength(strength);
    }, [formData.newPassword]);

    // Profile photo preview
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('Only JPG/PNG files are allowed');
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('File size must be less than 2MB');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            updateFormData({ profilePhoto: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const validateStep = () => {
        if (!formData.profilePhoto) {
            alert('Profile photo is required');
            return false;
        }
        if (!formData.username.match(/^[^\s]{4,20}$/)) {
            alert('Username must be 4-20 characters with no spaces');
            return false;
        }
        if (isUserExist === false) {
            alert('Username is already taken');
            return false;
        }
        if (formData.newPassword) {
            if (!formData.currentPassword) {
                alert('Current password is required to change password');
                return false;
            }
            if (formData.currentPassword) {
                // check existingUser password
                if (existingUser.password !== formData.currentPassword) {
                    alert('Current password is incorrect');
                    return false;
                }
            }
            if (passwordStrength !== 'Strong') {
                alert('New password is not strong enough');
                return false;
            }
        }
        if (!formData.gender) {
            alert('Gender is required');
            return false;
        }
        if (!formData.dateOfBirth) {
            alert('Date of birth is required');
            return false;
        }
        return true;
    };

    const handleNext = (e) => {

        e.preventDefault();

        if (validateStep()) nextStep();
    };

    return (
        <form onSubmit={handleNext} className="space-y-6 w-full bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo (JPG/PNG, ≤2MB)*</label>
                <input
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handlePhotoChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700
                 hover:file:bg-blue-100"
                />
                {formData.profilePhoto && (
                    <img
                        src={formData.profilePhoto}
                        alt="Preview"
                        className="mt-3 w-32 h-32 object-cover rounded-full border"
                    />
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username*</label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => updateFormData({ username: e.target.value })}
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {usernameChecking && <p className="text-sm text-gray-500 mt-1">Checking availability...</p>}
                {isUserExist === true && <p className="text-sm text-green-600 mt-1">Username Exist</p>}
                {isUserExist === false && <p className="text-sm text-red-600 mt-1">Username Not Exist</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password*{formData.newPassword ? ' *' : ''}
                </label>
                <input
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) => updateFormData({ currentPassword: e.target.value })}
                    required
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={formData.newPassword ? 'Required to change password' : 'Enter current password'}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => updateFormData({ newPassword: e.target.value })}
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="8+ chars, 1 special char, 1 number"
                />
                {formData.newPassword && (
                    <p className="text-sm text-gray-600 mt-1">Password strength: {passwordStrength}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                    value={formData.gender}
                    onChange={(e) => updateFormData({ gender: e.target.value, customGender: '' })}
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {formData.gender === 'Other' && (
                    <input
                        type="text"
                        value={formData.customGender}
                        onChange={(e) => updateFormData({ customGender: e.target.value })}
                        placeholder="Please specify"
                        className="border rounded-md p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    max={new Date().toISOString().split('T')[0]}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
                Next
            </button>
        </form>

    );
}

export default PersonalInfo;
