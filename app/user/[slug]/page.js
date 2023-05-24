import TaskList from "csc-start/components/TaskList";
import Username from "csc-start/components/Username";
import ViewLists from "csc-start/components/ViewLists";
import { getUserBySlug } from "csc-start/utils/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 30;

const Page = async ({ params: { slug } }) => {
  const { data, error } = await getUserBySlug(slug);

  if (!!error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    notFound();
  }

  const { user_id } = data;

  return (
    <>
      <Username />
      <div className="text-center">
        <h3 className="h3">Choose a List Below</h3>
      </div>
      <Link href="/list/">
        <ViewLists user_id={user_id} />
      </Link>
      <div className="barge text-center border border-2 border-black px-2">
        <h2>List ALL USERS&apos; Tasks in the DB</h2>
        <TaskList user_id={user_id} />
      </div>
    </>
  );
};

export default Page;
