import React, { useState, useEffect } from "react";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";
import "./App.css";

export default function App() {
  const [memos, setMemos] = useState(() => {
    const storedMemos = localStorage.getItem("memos");
    return storedMemos ? JSON.parse(storedMemos) : [];
  });
  const [selectedMemo, setSelectedMemo] = useState(null);

  function saveToLocalStorage(memos) {
    localStorage.setItem("memos", JSON.stringify(memos));
  }

  useEffect(() => {
    saveToLocalStorage(memos);
  }, [memos]);

  function handleMemoClick(memo) {
    setSelectedMemo(memo);
  }

  function handleNewMemo() {
    const maxId = Math.max(...memos.map((memo) => memo.id), 0);

    const newMemo = {
      id: maxId + 1,
      text: "新規メモ",
    };

    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  }

  function handleEditMemo(editedMemo) {
    setMemos(
      memos.map((memo) => {
        if (memo.id === editedMemo.id) {
          return editedMemo;
        } else {
          return memo;
        }
      }),
    );
    setSelectedMemo(editedMemo);
  }

  function handleDeleteMemo(memoId) {
    setMemos(memos.filter((memo) => memo.id !== memoId));

    setSelectedMemo(null);
  }

  return (
    <div>
      <h1>メモアプリ</h1>
      <div className="container">
        <div className="memo-list">
          <MemoList memos={memos} onMemoClick={handleMemoClick} />
          <button className="plus-button" onClick={handleNewMemo}>
            +
          </button>
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
