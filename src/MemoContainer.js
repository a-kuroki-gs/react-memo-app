import React from "react";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";
import { useAuth } from "./AuthContext";

export default function MemoContainer({
  memos,
  handleMemoClick,
  handleNewMemo,
  handleEditMemo,
  handleDeleteMemo,
  selectedMemo,
}) {
  const { isLoggedIn } = useAuth();

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
          />
        )}
      </div>
    </div>
  );
}
