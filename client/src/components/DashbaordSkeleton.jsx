const CustomSkeleton = ({type}) => {
  return (
    <div className={`mb-8 bg-white shadow-lg rounded-lg overflow-hidden ${type==="jobPage"?"flex flex-col h-[356px]":"grid grid-cols-12 h-[240px]"}`}>
        {/* Image Skeleton */}
        <div className={`shimmer overflow-hidden ${type ==="developerPage"?"col-span-5 h-full":"h-36 w-full"}`}>
        </div>

        {/* Content Skeleton */}
        <div className={`flex flex-col py-4 px-4 space-y-3 ${type === "developerPage"?"col-span-7":""}`}>
                {/* Name */}
                <div className="h-4 w-40 shimmer rounded"></div>
                {/* Job title */}
                <div className="h-3 w-28 shimmer rounded"></div>

              {/* Description */}
              <div className={`space-y-2 ${type==="developerPage"?"!mb-2":""}`}>
                  <div className="h-3 w-full shimmer rounded"></div>
                  <div className="h-3 w-5/6 shimmer rounded"></div>
                  <div className="h-3 w-2/3 shimmer rounded"></div>
                  <div className={`${type === "developerPage"?"h-3 w-1/2 shimmer rounded":""}`}></div>
              </div>
              {/* Bottom */}
              <div className="mt-auto space-y-2">
                  <div className="h-3 w-24 shimmer rounded"></div>
                  <div className="h-[1px] w-full shimmer"></div>
                  <div className="!flex justify-between items-center">
                    <div className="h-3 w-20 shimmer rounded"></div>
                    <div className="h-7 w-20 shimmer rounded-md"></div>
                  </div>
              </div>
        </div>
    </div>
  )
}
export default CustomSkeleton


