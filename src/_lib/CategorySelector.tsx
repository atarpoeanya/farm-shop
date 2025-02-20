import { CategoryData } from "@/app/catalog/page";


interface CategoryButtonProps {
  data: CategoryData
}

export default function CategorySelector({data}: CategoryButtonProps) {

  return (
    <ul className="flex">
      <li className="category-button">
        <a href="/catalog">All Categories</a>
      </li>
      {data.map((category) => {
        return (
          <li  className="category-button" key={category.id}>
            <a href={"/catalog?category="+category.id}>
              {cleanCategory(category.category_name)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function cleanCategory(name: string): string {
  const parts = name.split("_");

  if (parts.length === 0) {
    return ""; // Handle empty string input
  }

  const formattedParts = parts.map((part) => {
    if (part.length === 0) return ""; // Handle parts with only spaces or empty strings
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  });

  return formattedParts.join(" ");
}
