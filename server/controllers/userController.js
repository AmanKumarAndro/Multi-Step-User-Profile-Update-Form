const User = require('../models/User');
const Country = require('../models/Country');

// Username availability check
exports.checkUsername = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  if(user) return res.json({ exsit: true, user });
  res.json({ exsit: false });
};


const isValidPassword = (password) => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&         
    /[a-z]/.test(password) &&         
    /\d/.test(password) &&            
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  );
};


exports.updateUser = async (req, res) => {
  try {
    const {
      username,
      profilePhoto,
      currentPassword,
      newPassword,
      gender,
      customGender,
      dateOfBirth,
      profession,
      companyName,
      addressLine1,
      country,
      state,
      city,
      subscriptionPlan,
      newsletter
    } = req.body;


    console.log(username, profilePhoto, currentPassword, newPassword, gender, customGender, dateOfBirth, profession, companyName, addressLine1, country, state, city, subscriptionPlan, newsletter);

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (!/^[^\s]{4,20}$/.test(username)) {
      return res.status(400).json({ error: 'Username must be 4-20 characters with no spaces' });
    }

    // Profile Photo validation
    if (profilePhoto) {
      if (!/^data:image\/(png|jpeg);base64,/.test(profilePhoto)) {
        return res.status(400).json({ error: 'Profile photo must be JPG/PNG base64 format' });
      }
      const imageSize = Buffer.from(profilePhoto.split(',')[1], 'base64').length;
      if (imageSize > 2 * 1024 * 1024) {
        return res.status(400).json({ error: 'Profile photo must be less than 2MB' });
      }
      user.profilePhoto = profilePhoto;
    } else {
      return res.status(400).json({ error: 'Profile photo is required' });
    }

    // Password change logic
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({ error: 'Current password is required to change password' });
      }
      if (!isValidPassword(newPassword)) {
        return res.status(400).json({
          error: 'New password must be 8+ chars, include 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        });
      }
      if (currentPassword !== user.password) {
        return res.status(400).json({ error: 'Current password is incorrect' });
      }
      user.password = newPassword;
    }

    // Gender & custom gender logic
    if (gender) {
      user.gender = gender;
      if (gender === 'Other') {
        if (!customGender) {
          return res.status(400).json({ error: 'Custom gender is required when gender is Other' });
        }
        user.customGender = customGender;
      } else {
        user.customGender = null;
      }
    }

    // Date of Birth validation
    if (dateOfBirth) {
      const dob = new Date(dateOfBirth);
      if (dob > new Date()) {
        return res.status(400).json({ error: 'Date of Birth cannot be in the future' });
      }
      user.dateOfBirth = dob;
    }

    // Profession and companyName
    if (profession) {
      user.profession = profession;
      if (profession === 'Entrepreneur' && !companyName) {
        return res.status(400).json({ error: 'Company Name is required for Entrepreneurs' });
      }
      else {
        user.companyName = null;
      }
    }

    if (companyName) user.companyName = companyName;

    // Address validation
    if (!addressLine1) return res.status(400).json({ error: 'Address Line 1 is required' });
    if (!country) return res.status(400).json({ error: 'Country is required' });
    if (!state) return res.status(400).json({ error: 'State is required' });
    if (!city) return res.status(400).json({ error: 'City is required' });

    user.newsletter = newsletter;
    user.addressLine1 = addressLine1;
    user.country = country;
    user.state = state;
    user.city = city;


    // Subscription plan
    const validPlans = ['Basic', 'Pro', 'Enterprise'];
    if (subscriptionPlan) {
      if (!validPlans.includes(subscriptionPlan)) {
        return res.status(400).json({ error: 'Invalid subscription plan selected' });
      }
      user.subscriptionPlan = subscriptionPlan;
    }

    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};


