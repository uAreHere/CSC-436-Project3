import { getLists } from "csc-start/utils/data";

const ViewLists = async ({ user_id }) => {
  const { data: lists } = await getLists(user_id);

  return (
    <div className="barge flex flex-col gap-[24px] pb-[60px]">
      {Array.isArray(lists) &&
        lists.map(({ id, listTitle }) => {
          return (
            <a key={id} title={listTitle} className="button">
              {listTitle}
            </a>
          );
        })}
    </div>
  );
};

export default ViewLists;
