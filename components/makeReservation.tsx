import Link from 'next/link'

export const MakeReservation = () => {
  return (
    <div className="landingThree flex flex-col items-center justify-center py-24  px-3">
      <h3 className="mb-6 text-center text-4xl">
        {`Looking for a night out that's both cozy`}
        <span className="italic"> and</span> delicious?
      </h3>
      <p className="font-raleway text-base text-gray-500">
        Call (516) 352–3232 from 11a – 11p daily, or book online with OpenTable.
      </p>
      <h4 className="mt-16 mb-3 text-5xl">MAKE A RESERVATION</h4>
      <p className="mb-7 text-xs">POWERED BY OPENTABLE</p>
      <Link href="">
        <span className="rounded-full bg-gray-800 py-3 px-8 text-white ">Find a Table</span>
      </Link>
    </div>
  )
}
