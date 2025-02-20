import Cart from "@/_lib/cartLogic/HandleCart";
import CategorySelector from "@/_lib/CategorySelector";
import { NextRequest } from "next/server";
import PocketBase, { RecordModel, RecordService } from "pocketbase";
import { ParsedUrlQuery } from "querystring";

export interface CategoryDataItem {
  category_name: string;
  id: string;
  subcategory_name?: string;
}

export type CategoryData = CategoryDataItem[];

interface CatalogPageProps {
  searchParams: {
    category: string;
    currentPage?: number;
  };
}

const db = new PocketBase("http://localhost:8090/");

async function getCategories() {
  const data = await db.collection("categories");
  if (!data) {
    throw new Error("Unable to fetch data");
  }
  return data;
}

async function getMainCategories(
  categories: RecordService<RecordModel>
): Promise<CategoryData> {
  const categoryObject = (await categories.getFullList({
    filter: "subcategory_name = null",
  })) as CategoryData;

  const data: CategoryData = Object.values(categoryObject);
  return data;
}

async function getProductFiltered(
  categories: RecordService<RecordModel>,
  selected_category_id: string,
  currentPage: number
) {
  const filter =
    selected_category_id != ""
      ? `subcategory_name = "${selected_category_id}"`
      : "";

  const paginator = currentPage != null ? currentPage : 1;
  console.log(filter);

  const subCategoryId = (
    await categories.getFullList({ fields: "id", filter: filter })
  ).map((item) => item.id);

  const data = await db.collection("products").getList(1, 10, {
    page: paginator,
    filter: subCategoryId
      .map((id) => db.filter("category_id ?= {:id}", { id }))
      .join("||"),
  });

  return data;
}

async function checkCart(user_id: string) {
  Cart.create(user_id)
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  // console.log(searchParams.category)
  const { category = "", currentPage = 1 } = await searchParams;
  const allCategories = await getCategories();
  checkCart("ntgv42o7318ao19");
  const mainCategories = await getMainCategories(allCategories);
  const data = await getProductFiltered(allCategories, category, currentPage);

  return (
    <div className="px-2 w-full">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <CategorySelector data={mainCategories} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.items.map((item) => (
          <div key={item.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            ></img>
            <span>{cleanCategory(item.product_name)}</span>
            <button className="category-button">+</button>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly align-middle">
        <a
          href={
            "/catalog?currentPage=" +
            calcPage(currentPage) +
            "&category=" +
            category
          }
        >
          {calcPage(currentPage)}
        </a>
        {currentPage}
        <a
          href={
            "/catalog?currentPage=" +
            calcPage(currentPage, true) +
            "&category=" +
            category
          }
        >
          {calcPage(currentPage, true)}
        </a>
      </div>
    </div>
  );
}

function calcPage(pageNumber: number, add: boolean = false): number {
  if (typeof pageNumber == "string") {
    pageNumber = parseInt(pageNumber);
  }
  if (pageNumber === 1 && add === false) {
    return pageNumber;
  } else if (add) {
    return pageNumber + 1;
  }
  return pageNumber - 1;
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
