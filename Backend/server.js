const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(cors()); // Enable Cross-Origin Resource Sharing

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

// Define POST route
app.post("/", (req, res) => { // Correctly define the route
    const { name, email, phone, message } = req.body; // Destructure incoming data
    console.log("Data received:", { name, email, phone, message });
    console.log(process.env.SMTP_HOST);
    console.log(process.env.SMTP_PORT);
    console.log(process.env.SMTP_MAIL);
    console.log(process.env.SMTP_PASSWORD);
    
    var mailOptions = {
        from:process.env.SMTP_MAIL,
        to:process.env.SMTP_MAIL,
        replyTo: `${email}`,
        subject:"Contact us form",
        text: `Name: ${name}\nEmail: ${email}\nPhone no. : ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log("email sent successfully");
        }
    })
    res.status(200).json({
        success: true,
        message: "Data received successfully!",
        data: { name, email, phone, message },
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});