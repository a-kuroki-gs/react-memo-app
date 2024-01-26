import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function MemoDetail({ memo, onClickEdit, onClickDelete }) {
  const [text, setText] = useState(memo.text);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setText(memo.text);
  }, [memo]);

  return (
    <div>
      <h2>詳細</h2>
      <textarea
        rows="20"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p></p>
      {isLoggedIn && (
        <>
          <button
            className="custom-button"
            onClick={() => onClickEdit({ ...memo, text })}
          >
            編集
          </button>
          <button className="custom-button" onClick={onClickDelete}>
            削除
          </button>
        </>
      )}
    </div>
  );
}
