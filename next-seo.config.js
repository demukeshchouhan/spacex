import { property } from "lodash";

import uniqBy from "lodash/uniqBy";

export default (arr) => {
  const removeDuplicateYear = uniqBy(arr, "launch_year");
  return removeDuplicateYear.map((item) => {
    return {
      additionalMetaTags: [
        { property: "keywords", content: item.rocket.rocket_id },
      ],
    };
  });
};
