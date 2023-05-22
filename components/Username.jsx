"use client";

import { getCurrentUser } from "csc-start/utils/data";
import { useState, useEffect } from "react";

const Username = ({ user_id }) => {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const { success, data } = await getCurrentUser(user_id);

      if (success && data) {
        const { bargeMeta } = data;
        const { name } = bargeMeta;
        setUsername(name);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="barge">
      <h1>Hello, {userName}</h1>
    </div>
  );
};

export default Username;
