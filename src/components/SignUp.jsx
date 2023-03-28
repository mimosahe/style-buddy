import React, { useState, useEffect } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase';
import { Navigate } from "react-router-dom";

export const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  /* ↓関数「handleSubmit」を定義 */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch(error) {
      alert("正しく入力してください");
    }
  };

  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {/* ↓ログインしていればマイページを表示 */}
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>新規登録</h1>
          {/* ↓「onSubmit」を追加 */}
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button>登録する</button>
          </form>
        </>
      )}
    </>
  );
};


// export const SignUp = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { email, password } = event.target.elements;
  //   // console.log(email.value, password.value);
  //   createUserWithEmailAndPassword(auth, email.value, password.value)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //     alert("Singed up successfully");
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // };

  // return (
  //   <div>
  //     <h1>ユーザ登録</h1>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>メールアドレス</label>
  //         <input name="email" type="email" placeholder="email" />
  //       </div>
  //       <div>
  //         <label>パスワード</label>
  //         <input name="password" type="password" placeholder="********"/>
  //       </div>
  //       <div>
  //         <button>登録</button>
  //       </div>
  //     </form>
  //   </div>
  // );
// };