import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoDetail from './MemoDetail';

export default function App() {
  // const [memos, setMemos] = useState('');
  const [memos, setMemos] = useState([
    { id: 1, title: 'Memo 1', content: 'This is the first memo.' },
    { id: 2, title: 'Memo 2', content: 'This is the second memo.' },
    // 他のメモ...
  ]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  function handleMemoClick(memo) {
    setSelectedMemo(memo);
  }

  function handleNewMemo() {
    const newMemo = {
      id: memos.length + 1,
      title: 'title',
      content: 'content',
    };

    setMemos([...memos, newMemo]);
  }

  function handleEditMemo(newMemo) {
    setMemos(
      memos.map((memo) => {
        if (memo.id === newMemo.id) {
          return newMemo;
        } else {
          return memo;
        }
      })
    );
  }

  function handleDeleteMemo(memoId) {
    setMemos(memos.filter(memo =>
      memo.id !== memoId
    ));
  }

  return (
    <div>
      <h1>メモアプリ</h1>
      <MemoList memos={memos} onMemoClick={handleMemoClick} />
      <button onClick={handleNewMemo}>+</button>
      {selectedMemo &&
      <MemoDetail
        memo={selectedMemo}
        onEditClick={() => handleEditMemo(selectedMemo)}
        onDeleteClick={() => handleDeleteMemo(selectedMemo.id)}
      />
      }
    </div>
  );
}

