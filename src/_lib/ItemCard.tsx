"use client";
import { useEffect, useRef } from "react";

export default function ItemCard() {
  return (
    <div className="shadow rounded-xl">
      <div className="shadow-xl rounded-xl overflow-clip">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/crop.svg"
              className="object-cover object-center"
              alt=""
            />
          </a>
        <div className="p-5 shadow-2xl">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}
