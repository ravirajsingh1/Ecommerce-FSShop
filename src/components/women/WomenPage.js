import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";

function WomenPage() {
  return (
    <section>
      <ItemList items={items.filter((item) => item.for === 'female')} />
    </section>
  );
}

export default WomenPage;
