export default function CartPage() {
  return (
    <div className="w-full flex justify-center items-center content-stretch text-center">
      <div className="w-full">
        This is Cart
        <ul>
          {/* Generated list */}
          <li className="w-full justify-evenly">
            <span>ITEM NAME</span>
            <span>ITEM quantity</span>
          </li>
        </ul>
        <div>
          <span>total price here</span>
          <button>Process order</button>
        </div>
      </div>
    </div>
  );
}
