import React, { useState, useEffect } from 'react';

export default function MemoDetail({ memo, onEditClick, onDeleteClick }) {
  const [text, setText] = useState(memo.text);

  useEffect(() => {
    setText(memo.text);
  }, [memo]);

  return (
    <div>
      <h2>詳細</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      >
      </textarea>
      <p></p>
      <button onClick={() => onEditClick({ ...memo, text })}>編集</button>
      <button onClick={onDeleteClick}>削除</button>
    </div>
  );
}
