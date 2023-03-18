import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdditemsImagePage } from "./components/AdditemsImagePage";

import { Footer } from "./components/Footer";
import { ItemlistPage } from "./components/ItemlistPage";
import { NomatchPage } from "./components/NomatchPage";
import { TodayPage } from "./components/TodayPage";

// supabaseの設定ファイルをインポート
// import { supabase } from "./createClient";

// export const App = () => {

//   const [users, setUsers] = useState([])// useStateでsupabaseにarrayを保存する

//   useEffect(() => {
//     // 下に書いたfetchUsersを実行する
//     fetchUsers()
//   },[])
//   // supabaseからusers tableの情報を取得する
//   async function fetchUsers() {
//     const {data} = await supabase
//       .from('users')
//       .select('*')
//       setUsers(data) // useStateにデータを保存する
//       console.log(data) // supabaseからデータがfetchできているかdebugする
//   }
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
    // <div classname="App">
    //   <h1>Hello React Router v6</h1>
    //   <Routes>
    //     <Route path="/" element={<TodayPage />} />
    //     {/* <Route path="/Itemlist" element={<ItemlistPage category1Name="トップス"/>} /> */}
    //     <Route path="/Itemlist" element={<ItemlistPage />} />
    //     <Route path="/Additems" element={<AdditemsImagePage />} />
    //     <Route path="*" element={<NomatchPage />} />
    //   </Routes>
    //   <Footer />
    // </div>
//   )
// }

// export default App

export const App = () => {
  return (
    <div classname="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<TodayPage />} />
        {/* <Route path="/Itemlist" element={<ItemlistPage category1Name="トップス"/>} /> */}
        <Route path="/Itemlist" element={<ItemlistPage />} />
        <Route path="/Additems" element={<AdditemsImagePage />} />
        <Route path="*" element={<NomatchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

