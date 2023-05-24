import { getLists } from "csc-start/utils/data";
import Link from "next/link";

const ViewLists = async ({ user_id }) => {
  const { data: lists } = await getLists(user_id);

  return (
    <div className="barge flex flex-col gap-[24px] pb-[60px]">
      {Array.isArray(lists) &&
        lists.map(({ id, listTitle }) => {
          return (
            <>
              <Link
                href={`/user/${user_id}/lists/${id}`}
                key={id}
                passHref
                legacyBehavior
              >
                <a className="flex button small">
                  {listTitle} <br></br> ListID:{id}
                </a>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default ViewLists;
