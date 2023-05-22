import LinksLinks from "csc-start/components/LinksLinks";
import SocialLinks from "csc-start/components/SocialLinks";
import Username from "csc-start/components/Username";
import ViewLists from "csc-start/components/ViewLists";
import { getUserBySlug } from "csc-start/utils/data";
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
      <ViewLists user_id={user_id} />
      <SocialLinks user_id={user_id} />
      <LinksLinks user_id={user_id} />
    </>
  );
};

export default Page;
