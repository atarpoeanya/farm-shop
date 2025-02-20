export default function PromoSection() {
  return (
    <div className="p-4">
      <div className="flex shadow-xl rounded-xl overflow-clip">
      <div className="w-1/2 max-w-full">
        <img
          className="h-48 w-full object-cover"
          src="https://img.crocdn.co.uk/images/products2/pl/20/00/01/28/pl2000012896.jpg"
          alt=""
        />
      </div>
      <div className="p-2 w-1/2 bg-pink-200 ">
        <h3>
          <b>Noteworthy technology acquisitions 2021 Here are the biggest</b>
        </h3>
        <p>
          enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
        <br />
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      </div>
    </div>
  );
}
