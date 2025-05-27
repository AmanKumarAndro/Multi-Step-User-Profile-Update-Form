const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    await User.deleteMany();
    await User.insertMany([
        {
            username: 'johndoe',
            password: 'OldPassword@1', 
            profilePhoto: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...',
            gender: 'Other',
            customGender: 'Non-binary',
            dateOfBirth: new Date('1998-05-15'),
            profession: 'Entrepreneur',
            companyName: 'TechSpark',
            addressLine1: '123 Main Street',
            country: 'India',
            state: 'Maharashtra',
            city: 'Mumbai',
            subscriptionPlan: 'Pro',
            newsletter: true
        }

    ])
    console.log('Users seeded successfully');
    process.exit();

}).catch(err => {
    console.error('Error seeding users:', err);
    process.exit(1);
});
