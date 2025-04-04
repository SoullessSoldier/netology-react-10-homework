import { useSelector } from "react-redux";
import ItemCard from "@/components/ItemCard/ItemCard";

const sortItemsByDate = (a, b) => {
  return b.dateCreated - a.dateCreated
}

export default function ItemsList() {
  const items = useSelector((state) => state.itemsList.items);
  const itemsSorted = items.sort(sortItemsByDate)

  return (
    <div className="container">
      <div className="items-list d-flex flex-wrap justify-content-start gap-3">
        {itemsSorted.length &&
          itemsSorted.map((item) => <ItemCard key={item.id} data={item} />)}
      </div>
    </div>
  );
}
