import React from 'react';

export default function MemoDetail({ memo, onEditClick, onDeleteClick }) {
  return (
    <div>
      <h2>詳細</h2>
      <textarea value={memo.title + '\n' + memo.content}>
      </textarea>
      <p></p>
      <button onClick={onEditClick}>編集</button>
      <button onClick={onDeleteClick}>削除</button>
    </div>
  );
}
