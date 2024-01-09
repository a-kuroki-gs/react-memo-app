import React, { useState, useEffect } from "react";
import "./MemoDetail.css";

export default function MemoDetail({ memo, onEditClick, onDeleteClick }) {
  const [text, setText] = useState(memo.text);

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
      <button
        className="custom-button"
        onClick={() => onEditClick({ ...memo, text })}
      >
        編集
      </button>
      <button className="custom-button" onClick={onDeleteClick}>
        削除
      </button>
    </div>
  );
}
