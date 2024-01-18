import React, { useState, useEffect } from "react";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";
import "./App.css";
import { useLoginStatus } from "./LoginContext";

function MemoContainer({
  isLoggedIn,
  memos,
  handleMemoClick,
  handleNewMemo,
  handleEditMemo,
  handleDeleteMemo,
  selectedMemo,
}) {
  return (
    <div className="container">
      <div className="memo-list">
        <MemoList memos={memos} onMemoClick={handleMemoClick} />
        {isLoggedIn && (
          <button className="plus-button" onClick={handleNewMemo}>
            +
          </button>
        )}
      </div>
      <div className="memo-detail">
        {selectedMemo && (
          <MemoDetail
            memo={selectedMemo}
            onClickEdit={handleEditMemo}
            onClickDelete={() => handleDeleteMemo(selectedMemo.id)}
            isLoggedIn={isLoggedIn}
          />
        )}
      </div>
    </div>
  );
}

function LoginButton({ isLoggedIn, handleLoginClick }) {
  return (
    <button className="login-button" onClick={handleLoginClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}

export default function App() {
  const { isLoggedIn, handleLoginClick } = useLoginStatus();

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
      <div className="header">
        <h1>メモアプリ</h1>
        <LoginButton
          isLoggedIn={isLoggedIn}
          handleLoginClick={handleLoginClick}
        ></LoginButton>
      </div>
      <MemoContainer
        isLoggedIn={isLoggedIn}
        memos={memos}
        handleMemoClick={handleMemoClick}
        handleNewMemo={handleNewMemo}
        handleEditMemo={handleEditMemo}
        handleDeleteMemo={handleDeleteMemo}
        selectedMemo={selectedMemo}
      ></MemoContainer>
    </div>
  );
}
