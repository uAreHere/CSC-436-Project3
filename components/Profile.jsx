"use client";

import useUser from "csc-start/hooks/useUser";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import CreateList from "./CreateList";
import ToDoList from "./ToDoList";

const Profile = () => {
  const { user, refreshUser, error, loading } = useUser();
  useUserMustBeLogged(user, "in", "/login");

  return (
    <div className="barge">
      {!!error && (
        <div
          className={`bg-red-200 border-2 border-red-800 text-red-800 py-2 px-5 my-10 text-center`}
        >
          <span className="font-bold">{error.message}</span>
        </div>
      )}
      {!error && loading && <p>Loading...</p>}
      {!error && !loading && (
        <>
          <CreateList />
          <ToDoList />
        </>
      )}
    </div>
  );
};

export default Profile;
