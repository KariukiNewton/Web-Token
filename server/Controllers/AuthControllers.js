const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "newtonkaris176", { expiresIn: maxAge });
};

const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    if (err.message === "Incorrect email") {
        errors.email = "Email is not registered";
    };

    if (err.message === "Incorrect password") {
        errors.password = "Password is incorrect";
    };

    if (err.code === 11000) {
        errors.email = "Email already exists";
        return errors;
    };

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

module.exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //Validate the input
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        };

        // Check if email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        };

        //Create a new user
        const user = await UserModel.create({ email, password });
        const token = createToken(user._id);

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: true,
            maxAge: maxAge * 1000
        });

        res.status(201).json({
            user: user._id,
            created: true,
            status: "success",
            message: "User created successfully"
        });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.status(500).json({ errors, created: false });
    }
};

module.exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        const user = await UserModel.login(email, password);
        const token = createToken(user._id);

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: true,
            maxAge: maxAge * 1000
        });

        res.status(200).json({
            user: user._id,
            created: true,
            status: "success",
            message: "Successful login"
        });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.status(500).json({ errors, created: false });
    };
};



module.exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};