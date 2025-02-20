export default function ItemCardButtons() {
  return (
    <div className="shadow rounded-xl">
      <div className="shadow-xl rounded-xl overflow-clip">
        <a href="#" className="min-h-64">
          <img
            className="h-64 w-full object-cover object-top"
            src="https://img.crocdn.co.uk/images/products2/pl/20/00/01/28/pl2000012896.jpg"
            alt=""
          />
        </a>

        <div className="shadow-2xl">
          <div className="grid grid-cols-2 text-center">
            <div className="col-span-2 border-b p-4 text-start">
              <span>Summer</span>
            </div>
            <div className="w-full border-r p-3">
              <span>Summer 1</span>
            </div>
            <div className="w-full p-3">
              <span>Summer 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
