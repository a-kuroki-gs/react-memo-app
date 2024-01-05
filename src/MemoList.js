import React from 'react';

export default function MemoList({ memos, onMemoClick }) {
  return (
    <div>
      <h2>一覧</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => onMemoClick(memo)}>
            {memo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
