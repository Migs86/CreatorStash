import React from "react";
import CategoryContentCardsSection from "./../components/CategoryContentCardsSection";
import { useRouter } from "./../util/router.js";

function CategoryPage(props) {
  const {
    items
  } = props;

  const router = useRouter();

  return (
    <CategoryContentCardsSection
      items={items}
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title={router.query.category}
      subtitle=""
    />
  );
}

export default CategoryPage;
