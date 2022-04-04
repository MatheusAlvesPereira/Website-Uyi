var Firebird = require('node-firebird');

const UserSchema = new Firebird.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },

    password: {
        type: String,
        require: true,
        select: false,
    },

    createdAt: {
        date: Date,
        default: Date.now,
    }
});


const User = Firebird.model('User', UserSchema);

module.exports = User;