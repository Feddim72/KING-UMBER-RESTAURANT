type MediaBackgroundMode = 'home' | 'menu'
const MediaBackground = ({ mode }: { mode: MediaBackgroundMode }) => {
  return (
    <div className="relative min-h-screen w-full">
      <div className={`media--${mode} min-h-screen w-full`} />
      <div className="absolute left-0 top-0 flex min-h-screen w-full  flex-col items-center bg-black-transparent" />

      {mode == 'home' && (
        <div className="absolute top-[200px] z-[99] w-full md:top-[350px] xl:top-[330px]">
          <div className={`flex w-full flex-col items-center`}>
            <h1 className="mb-4 text-center text-5xl font-normal leading-[1.1em] tracking-wide text-white ">
              KING UMBER RESTAURANT
            </h1>

            <div className="flex flex-col gap-1">
              <button className="button__nav">ORDER ONLINE</button>
              <button className="button__nav">BUY GIFT CARDS</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MediaBackground
