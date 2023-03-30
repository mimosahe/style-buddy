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
          <h1>マイページ</h1>
          {/* ↓ユーザーのメールアドレスを表示（ログインしている場合） */}
          <p>{user?.email}</p>
          <button onClick={signout}> サインアウト</button>

          {/* メイン画面 */}
          <TodayPage />
        </>
      )}
    </>
  );
};