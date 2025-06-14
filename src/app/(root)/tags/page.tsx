import React from "react";

import { getTags } from "@/lib/actions/tag.action";

const TagsPage = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    query: "mongodb",
  });

  const { tags } = data || {};

  console.log("TAGS", JSON.stringify(tags, null, 2));

  console.log("Tags:", tags);
  return <div>TagsPage</div>;
};

export default TagsPage;
