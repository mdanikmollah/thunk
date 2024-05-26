import React from 'react'
import like from '../../assets/like.svg'
import unlike from '../../assets/unlike.svg'
const SingleVideoDetails = ({video}) => {
  
  
  return (
    <div className="w-full space-y-8 col-span-full lg:col-span-2">
          {/* video player */}
          <iframe
            width="100%"
            className="aspect-video"
            src={video.link}
            title="Some video title"
            frameBorder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
          {/* video description */}
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              {video.title}
            </h1>
            <div className="flex items-center pb-4 border-b space-between">
              <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                Uploaded on {video.date}
              </h2>
              {/* like/unlike */}
              <div className="flex w-48 gap-10">
                <div className="flex gap-1">
                  <div className="shrink-0">
                    <img
                      className="block w-5"
                      src={like}
                      alt="Like"
                    />
                  </div>
                  <div className="text-sm leading-[1.7142857] text-slate-600">
                    {video.views}
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="shrink-0">
                    <img
                      className="block w-5"
                      src={unlike}
                      alt="Unlike"
                    />
                  </div>
                  <div className="text-sm leading-[1.7142857] text-slate-600">
                    100K
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
              {video.description}
            </div>
          </div>
        </div>
  )
}

export default SingleVideoDetails