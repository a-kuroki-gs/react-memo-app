import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoDetail from './MemoDetail';
import './App.css';

export default function App() {
  const [memos, setMemos] = useState([
    { id: 1, text: 'Memo 1 \n This is the first memo.' },
    { id: 2, text: 'Memo 2 \n This is the second memo.' },
  ]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  function handleMemoClick(memo) {
    setSelectedMemo(memo);
  }

  function handleNewMemo() {
    const newMemo = {
      id: memos.length + 1,
      text: '新規メモ'
    };

    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
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
    setSelectedMemo(newMemo);
  }

  function handleDeleteMemo(memoId) {
    setMemos(memos.filter(memo =>
      memo.id !== memoId
    ));
  }

  return (
    <div>
    <h1>メモアプリ</h1>
    <div className="container">
      <div className="memo-list">
        <MemoList memos={memos} onMemoClick={handleMemoClick} />
        <button className="plus-button" onClick={handleNewMemo}>+</button>
      </div>
      <div className="memo-detail">
        {selectedMemo && (
          <MemoDetail
            memo={selectedMemo}
            onEditClick={handleEditMemo}
            onDeleteClick={() => handleDeleteMemo(selectedMemo.id)}
          />
        )}
      </div>
    </div>
  </div>
  );
}

