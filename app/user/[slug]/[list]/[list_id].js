import { notFound } from "next/navigation";
import TaskList from "csc-start/components/TaskList";

export const revalidate = 30;

const Page = async ({ list_id }) => {
  if (!!error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    notFound();
  }

  return (
    <>
      <TaskList list_id={list_id} />
    </>
  );
};

export default Page;
