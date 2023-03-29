/* ↓新たに5つimportしています */
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { Navigate } from "react-router-dom";
import '../index.css';
import { Footer } from "./Footer";

export const SignIn = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  /* ↓関数「handleSubmit」を定義 */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        signinEmail,
        signinPassword
      );
    } catch(error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  /* ↓ログインを判定する設定 */
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <>
      {/* ↓ログインしている場合、マイページにリダイレクトする設定 */}
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Sign in</h2>

              <form onSubmit={handleSubmit} class="mx-auto max-w-lg rounded-lg border">
                <div class="flex flex-col gap-4 p-4 md:p-8">
                  <div>
                    <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                    <input name="email" type="email" value={signinEmail} onChange={(e) => setSigninEmail(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                  </div>

                  <div>
                    <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                    <input name="password" type="password" value={signinPassword} onChange={(e) => setSigninPassword(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                  </div>

                  <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Sign in</button>

                </div>

                <div class="flex items-center justify-center bg-gray-100 p-4">
                  <p class="text-center text-sm text-gray-500">Don't have an account? <a href="/signup" class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Sign up</a></p>
                </div>
              </form>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};