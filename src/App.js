import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoDetail from './MemoDetail';

export default function App() {
  // const [memos, setMemos] = useState([
  const [memos] = useState([
    { id: 1, title: 'Memo 1', content: 'This is the first memo.' },
    { id: 2, title: 'Memo 2', content: 'This is the second memo.' },
    // 他のメモ...
  ]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const handleMemoClick = (memo) => {
    setSelectedMemo(memo);
  };

  return (
    <div>
      <h1>メモアプリ</h1>
      <MemoList memos={memos} onMemoClick={handleMemoClick} />
      {selectedMemo && <MemoDetail memo={selectedMemo} />}
    </div>
  );
}

