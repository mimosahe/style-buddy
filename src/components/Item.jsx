export const Item = (props) => {
    return (
      <div className="item">
      <h4>ユーザー名：{props.username}</h4>
      <h4>レシピ一覧</h4>
      <ul>
        {props.itemList.map((item) => (
          <li key={item.id}>{item.category1}</li>
        ))}
      </ul>
    </div>
    );
  };