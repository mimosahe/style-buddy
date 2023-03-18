import { useEffect, useState } from "react";

// supabaseの設定ファイルをインポート
import { config } from "../createClient";

export const SelectSB = () => {
  const [itemList, setItemList] = useState([]);
  const supabase = config.supabase;

  // 実際はfirebase authとかバックエンドのapiを叩いてユーザーidを取得
  const userId = 1;

  const fetchItems = async () => {
    const items = await supabase
      .from("users")
      .select(`
    id, name,
    items(
      user_id
      )
      `)
      .eq("id", userId); // ユーザーIDを指定
   // stateを更新
    setItemList(items.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <h2>a</h2>);
    // {itemList.length > 0 ? itemList.map((data) => ( )) : ""});
};