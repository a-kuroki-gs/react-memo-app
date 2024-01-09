import React from 'react';
import './MemoList.css';

export default function MemoList({ memos, onMemoClick }) {
  return (
    <div>
      <h2>一覧</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} className="memo-item" onClick={() => onMemoClick(memo)}>
            {memo.text.split(/\n/)[0]}
          </li>
        ))}
      </ul>
    </div>
  );
}
