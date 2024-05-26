import React from 'react'
import { Link } from 'react-router-dom'

const SingleVideo = ({video}) => {
  
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
    <div className="flex flex-col w-full">
      <div className="relative">
        <Link to={`/${video.id}`}>
          <img
            src={video.thumbnail}
            className="w-full h-auto"
            alt="Some video title"
          />
        </Link>
        <p className="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py">
          {video.duration}
        </p>
      </div>
      <div className="flex flex-row gap-2 mt-2">
        <a href="#" className="shrink-0">
          <img
            src={video.avatar}
            className="w-6 h-6 rounded-full"
            alt="Learn with Sumit"
          />
        </a>
        <div clas="flex flex-col">
          <a href="video.html">
            <p className="text-sm font-semibold text-slate-900">
              {video.title}
            </p>
          </a>
          <a
            className="mt-2 text-xs text-gray-400 hover:text-gray-600"
            href="#"
          >
            {video.author}
          </a>
          <p className="mt-1 text-xs text-gray-400">
            {video.views} views . {video.date}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleVideo