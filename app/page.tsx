"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

interface AuthInputType {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<AuthInputType>();
  const router = useRouter();

  const handleAuth = (event: AuthInputType) => {
    const { email, password } = event;
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/about");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <main className="h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center mx-auto max-w-md">
        <h1 data-testid="mainPage">Sign in</h1>
        <form
          action=""
          onSubmit={handleSubmit(handleAuth)}
          className="space-y-4 mt-4"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            className="p-4 rounded-xl w-full border"
            data-testid="email"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="p-4 rounded-xl w-full border"
            data-testid="password"
          />
          <button
            type="submit"
            className="w-full bg-blue-400 py-4 rounded-xl"
            data-testid="signIn"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </main>
  );
}
