"use client";
import { createNewList, refreshUser } from "csc-start/utils/data";
import useUser from "csc-start/hooks/useUser";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import { useState } from "react";

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
      <form onSubmit={handleFormSubmit}>
        <label className="inline-block w-[75px]">Your List Title Here</label>
        <input
          type="text"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          placeholder="Enter List Title"
          className="border border-2 border-black px-2"
        />
        <p className="my-2">
          <button type="submit" className="button small">
            Create List
          </button>
        </p>
      </form>
    </div>
  );
};

export default CreateList;
