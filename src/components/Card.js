import React from 'react'
export default function Card({ title, image, population, region, capital }) {
  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={image}
        alt={title}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-xs">
          Population:{" "}
          <span className="dark:text-gray-400 text-gray-700 text-sm">{population}</span>
        </p>
        <p className="text-xs">
          Region:{" "}
          <span className="dark:text-gray-400 text-gray-700 text-sm">{region}</span>
        </p>
        <p className="text-xs">
          Capital:{" "}
          <span className="dark:text-gray-400 text-gray-700 text-sm">{capital}</span>
        </p>
      </div>
    </div>
  )
}


