import React from 'react'
import { Link } from 'react-router-dom'

const WikiList = ({ wikiTitles }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <h2 className="text-xl font-bold text-blue-600 mb-4">강의 리스트</h2>
      <ul className="divide-y divide-gray-200">
        {wikiTitles.map((course, index) => (
          <li
            key={index}
            className={`p-4 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}
          >
            <div className="flex items-center">
              <h3 className="font-semibold text-blue-800">{course.category}</h3>
              <div>
                <Link
                  to={`/wiki/${encodeURIComponent(course.title)}`}
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  {course.title}
                </Link>
              </div>
            </div>
            <p className="text-gray-600">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WikiList