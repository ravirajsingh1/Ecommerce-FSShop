import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";

function MenPage() {
  return (
    <section>
      <ItemList items={items.filter((item) => item.for === 'male')} />
    </section>
  );
}

export default MenPage;
