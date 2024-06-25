import React from "react";
import Item from "../item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function ItemList({ items }) {
  return (
    <Row className="item-list">
      {items.map((item) => (
        <Col xs={5} md={3} lg={3} xl={3} xxl={2}>
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
          />
        </Link>
        </Col>
      ))}
    </Row>
  );
}

export default ItemList;


