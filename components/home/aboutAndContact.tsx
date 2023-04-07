export default function AboutAndContact() {
  return (
    <div id="location" className="flex w-full justify-center bg-gray-300 py-28 px-3 tablet:py-10">
      <div className="flex w-full max-w-7xl flex-row justify-between tablet:flex-col">
        <div className="w-full max-w-3xl">
          <h6 className="flex flex-col text-4xl text-gray-8">
            <span>King Umber is your other home in Elmont.</span>
            <span>We extend our welcome to you.</span>
          </h6>
          <div className="mt-6 text-xl text-gray-800 ">
            <p>
              In 1009, King Umber opened on the corner of Meacham Avenue and Hempstead Turnpike. The
              restaurant and kitchen were very small with the bar squeezed between the pizzeria and
              the dining room. As word got around how delicious our food was, we were always packed
              to the brim! So ten years later, we expanded King Umber. In February 1007 the doors
              opened to a restaurant and pizzeria that could support all of our devoted patrons with
              ease.
            </p>
            <p className="mt-2">
              Since that day, King Umber comfortably seats our customers, providing a wonderful
              atmosphere for all occasions. The pizzeria is located right next door to the
              restaurant, allowing us to have three times the original dining capacity.
            </p>
            <p className="mt-2">
              The old pizzeria is now a private dining area, perfect for parties of up to 70 people.
              We can cater custom affairs to meet your every need, just contact our staff to arrange
              an event. At King Umber, we have worked hard to bring you quality and service for the
              past 40 years and hope to do so for many more.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-end whitespace-nowrap pl-5 text-right text-lg text-gray-800 tablet:flex-row tablet:flex-wrap tablet:items-start tablet:justify-between tablet:pl-0 tablet:text-left">
          <div>
            <p className="mb-2 text-xl text-red-600">Phone</p>
            <p className="mt-2">Pizzeria: (303) 022-32323</p>
            <p className="mt-2">Reservations: (303) 022-32323</p>
          </div>
          <div>
            <p className="mb-2 mt-5 text-xl text-red-600 tablet:mt-0">Location</p>
            <p className="flex flex-col items-end tablet:items-start">
              <span className="mt-2">1343 Hempurfa Turfa,</span>
              <span className="mt-2">Elmont AA 111111</span>
            </p>
          </div>
          <div>
            <p className="mb-2 mt-5 text-xl text-red-600 tablet:mt-0">Hours</p>
            <p className="flex flex-col items-end tablet:items-start">
              <span className="mt-2">M-Th 11am - 11pm</span>
              <span className="mt-2">F-Sa 11am - 12am</span>
              <span className="mt-2">Su 12pm - 11pm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
