import { notFound } from "next/navigation";
import ToDoList from "csc-start/components/ToDoList";
import { useRouter } from "next/router";

export const revalidate = 30;

const Page = () => {
  const router = useRouter();
  const { list_id } = router.query;

  if (!!error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    notFound();
  }

  return (
    <>
      <ToDoList list_id={data.id} />
    </>
  );
};

export default Page;
