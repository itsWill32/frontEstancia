import { categories } from "../../data";
import CategoryItem from "../categoryItem/CategoryItem";
import './Categories.css'

export default function Categories() {
  return (
    <>
      <div className="main-C">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
