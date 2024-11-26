"use client";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const sendEmail = async () => {
        

    // }

    const onSubmit = async (data) => {
        console.log(data);

        const emailData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        }
        try {
            const response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailData),
            });
            // if (!response.ok) {
            //     throw new Error("Failed to send POST request.");
            // }
            const result = await response.json();
            console.log("Response:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="bg-blue-100 min-h-[85vh] flex flex-col justify-center items-center">
            <div className="w-[80%] bg-white rounded-2xl shadow-lg flex justify-center items-center ">
                <div className="contact-img w-[35%]">
                    <h1 className="text-2xl font-bold ">Get In Touch</h1>
                    <img src="/send-mail.png" alt="" />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" p-8 w-full max-w-md flex flex-col gap-4"
                >
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-medium" htmlFor="name">Name:</label>
                        <div className="relative flex items-center">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="absolute left-3 text-gray-500"
                            />
                            <input
                                className="w-full pl-10 pr-3 py-2 border-2 border-gray-400 rounded-md text-sm font-light focus:outline-blue-500 focus:border-5 focus:border-blue-200 focus:border-collapse"
                                placeholder="Your name"
                                type="text"
                                {...register("name")}
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-medium" htmlFor="email">Email:</label>
                        <div className="relative flex items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="absolute left-3 text-gray-500"
                            />
                            <input
                                className="w-full pl-10 pr-3 py-2 border-2 border-gray-400 rounded-md text-sm font-light focus:outline-blue-500 focus:border-5 focus:border-blue-200"
                                placeholder="Email Address"
                                type="email"
                                {...register("email")}
                            />
                        </div>
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-medium" htmlFor="phone">Phone Number:</label>
                        <div className="relative flex items-center">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="absolute left-3 text-gray-500"
                            />
                            <input
                                className="w-full pl-10 pr-3 py-2 border-2 border-gray-400 rounded-md text-sm font-light focus:outline-blue-500 focus:border-5 focus:border-blue-200"
                                placeholder="Phone number"
                                type="phone"
                                {...register("phone")}
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-medium" htmlFor="message">Message:</label>
                        <textarea
                            className="w-full p-3 border-2 border-gray-400 rounded-md text-sm font-light focus:outline-blue-500 focus:border-5 focus:border-blue-200"
                            placeholder="Your message"
                            {...register("message")}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-light py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Page;
