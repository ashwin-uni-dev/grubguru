import { useState } from "react";
import Input from "../../components/Input";
import { BackendRequest } from "../../lib/api";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    const handleLogin = async () => {
        try {
            await BackendRequest.to("auth/login").post({ username, password }).execute();
        } catch (error: any) {
            setMessage({ text: error.message || "Something went wrong", type: "error" });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-sm bg-white p-6 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Login</h1>
                    <p className="text-sm text-gray-500 mt-1">Login to your account</p>
                </div>

                <div className="flex flex-col gap-4">
                    <Input
                        placeholder="Enter a username..."
                        value={username}
                        onChange={(e: any) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="Enter a password..."
                        type="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleLogin}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition duration-200 font-medium"
                    >
                        Login
                    </button>

                    {message && (
                        <p
                            className={`text-sm text-center ${
                                message.type === "error" ? "text-red-500" : "text-green-600"
                            }`}
                        >
                            {message.text}
                        </p>
                    )}

                    <a
                        href="/register"
                        className="text-center text-purple-600 text-sm hover:underline"
                    >
                        Create an account
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
