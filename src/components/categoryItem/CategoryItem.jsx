import "./CategoryItem.css";
import { Link } from "react-router-dom";

export default function CategoryItem({item}) {
  return (
    <>
      <div className="main-Category">
        <Link to={`/Products/${item.cat}`}>
        <img alt="img-Item" className="img-CategIt" src={item.img} />
        <div className="info-Item">
          <h1 className="title-Item">{item.title}</h1>
          <button type="submit">
            COMPRAR AHORA
            </button>
        </div>
        </Link>
      </div>
    </>
  );
}
