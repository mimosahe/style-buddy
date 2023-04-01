import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase';
import { Navigate, useNavigate } from "react-router-dom";
import { TodayPage } from "./TodayPage";

export const Mypage = () => {
  const [user, setUser] = useState("user");
  const [loading, setLoading] = useState(true);

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const signout = async () => {
    await signOut(auth);
    navigate("/signin/");
  }

  return (
    <>
      {/* ↓ログインしていない場合はログインページにリダイレクトする設定 */}
      {!user ? (
        <Navigate to={`/signin/`} />
      ) : (
        <>
          {/* ↓ユーザーのメールアドレスを表示（ログインしている場合） */}
          <p>USER:  {user?.email}</p>
          <button onClick={signout} class="block rounded-lg bg-gray-800 px-2 py-1 text-center text-xs font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
          Sign out</button>

          {/* メイン画面 */}
          <TodayPage />
        </>
      )}
    </>
  );
};