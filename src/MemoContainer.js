import React from "react";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";

export default function MemoContainer({
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
