/* 「useState」と「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";
/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

export const Mypage = () => {
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  }

  return (
    <>
      <h1>マイページ</h1>
      {/* ↓ユーザーのメールアドレスを表示（ログインしている場合） */}
      <p>{user?.email}</p>
      <button onClick={logout}> ログアウト</button>
    </>
  );
};