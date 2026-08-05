
const express = require("express");
const zod = require("zod");
const { user } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { useId } = require("react");
const router = express.router();
// signup and signin routes 

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});
router.post("/signup", async(req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user_id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


module.exports = router;

