type MediaBackgroundMode = 'home' | 'menu'
const MediaBackground = ({ mode }: { mode: MediaBackgroundMode }) => {
  return (
    <div className="relative min-h-screen w-full">
      <div className={`media--${mode} min-h-screen w-full`} />
      <div className="absolute left-0 top-0 flex min-h-screen w-full  flex-col items-center bg-black-transparent" />
    </div>
  )
}

export default MediaBackground
