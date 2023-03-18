import Image from 'next/image'

export const FollowUsOnInstagram = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-3 text-gray-8 tablet:py-10">
      <h6 className=" mb-10 text-6xl">Follow us on Instagram</h6>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_8.jpeg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_7.jpeg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_10.jpg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_2.jpg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_3.jpg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_4.jpg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_5.jpg'}
          width={302}
          height={218}
        />
        <Image
          style={{ objectFit: 'cover' }}
          className={'h-[218px] w-[302px]'}
          alt="image"
          src={'/eats_9.jpg'}
          width={302}
          height={218}
        />
      </div>
    </div>
  )
}
