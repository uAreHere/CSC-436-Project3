"use client";

import useUser from "csc-start/hooks/useUser";
import Link from "next/link";

const ActionsFooter = () => {
  const { user, loading } = useUser();
  if (loading) {
    return <p className="barge">Loading</p>;
  }
  if (!user) {
    // user is not logged in
    return (
      <div className="flex justify-between mt-5">
        <Link href="/login">Login</Link>
        <h1>_|_</h1>
        <Link href="/register">Register</Link>
      </div>
    );
  }
  // user is logged in
  return (
    <div className="flex justify-between">
      <Link href="/profile">Create Lists</Link>
      <h1>_|_</h1>
      <Link href="/logout">Logout</Link>
    </div>
  );
};

export default ActionsFooter;
