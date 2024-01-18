import React, { useState, useEffect } from "react";
import "./App.css";
import MemoContainer from "./MemoContainer";
import LoginButton from "./LoginButton";
import { useLoginStatus } from "./LoginContext";

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
