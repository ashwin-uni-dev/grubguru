import {useState} from "react";
import Input from "../../components/Input";
import {BackendRequest} from "../../lib/api";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    const handleLogin = async () => {
        try {
            await BackendRequest.to("auth/register").post({username, password}).execute();
            setMessage({text: "Account created successfully!", type: "success"});
        } catch (error: any) {
            setMessage({text: error.message || "Something went wrong", type: "error"});
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-sm bg-white p-6 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create an account</h1>
                    <p className="text-sm text-gray-500 mt-1">Join us and get started right away</p>
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
                        Register
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
                        href="/login"
                        className="text-center text-purple-600 text-sm hover:underline"
                    >
                        I already have an account
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
