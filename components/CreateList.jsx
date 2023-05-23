"use client";
import { createNewList, getLists, refreshUser } from "csc-start/utils/data";
import useUser from "csc-start/hooks/useUser";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";

const CreateList = () => {
  const [listTitle, setListTitle] = useState("");

  const { user, refreshUser, error, loading } = useUser();
  useUserMustBeLogged(user, "in", "/login");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (listTitle.trim() === "") {
      return;
    }
    const createdList = await createNewList(user.id, listTitle);
    if (createdList.success == true) {
      setListTitle("");
      refreshUser();
    } else {
      console.error(error);
    }
  };

  return (
    <div className="barge">
      <form onSubmit={handleFormSubmit} className="m-4">
        <label className="inline-block text-center w-[200px]">
          Create A List
        </label>
        <input
          type="text"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          placeholder="Enter List Title"
          className="border border-2 border-black px-2"
        />
        <p className="m-4 text-center">
          <button type="submit" className="button small">
            Create List
          </button>
        </p>
      </form>
      <ToDoList />
    </div>
  );
};

export default CreateList;
