"use client"
import axios from "axios";
import { useState } from "react";

export default function SignInPage() {
    const [username, setUsername] = useState("gshss")
    const [password, setPassword] = useState("sskskk")
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}

                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={async (e) => {
                            e.preventDefault()

                            const res = await axios.post("http://localhost:3000/api/signin", {
                                username: username,
                                password: password
                            })
                            localStorage.setItem("token", res.data.token)
                            console.log(res)
                        }}
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
