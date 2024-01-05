import React from 'react';

export default function MemoDetail({ memo }) {
  return (
    <div>
      <h2>詳細</h2>
      <h3>{memo.title}</h3>
      <p>{memo.content}</p>
    </div>
  );
}
