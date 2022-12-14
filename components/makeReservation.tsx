import A from "./A";

export const MakeReservation = () => {
  return (
    <div className="landingThree py-24 px-3 flex flex-col justify-center  items-center">
      <h3 className="text-4xl mb-6 text-center">
        {`Looking for a night out that's both cozy`}
        <span className="italic"> and</span> delicious?
      </h3>
      <p className="font-raleway text-base text-gray-500">
        Call (516) 352–3232 from 11a – 11p daily, or book online with OpenTable.
      </p>
      <h4 className="text-5xl mt-16 mb-3">MAKE A RESERVATION</h4>
      <p className="text-xs">POWERED BY OPENTABLE</p>
      <A
        text=""
        href=""
        className="mt-7 py-3 px-8 text-white bg-gray-800 rounded-full "
      >
        Find a Table
      </A>
    </div>
  );
};
