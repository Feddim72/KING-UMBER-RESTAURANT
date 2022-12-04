export const ItemLandingFormBirhday = () => {
  return (
    <div className="bg-gray-300 min-w-full flex flex-col items-center p-4 py-24 tablet:py-10">
      <h5 className="text-4xl text-gray-8 mb-7 text-center">
        Join our Birthday Club Newsletter for special rewards
      </h5>
      <form className="flex flex-col max-w-5xl w-full bg-white p-7 text-lg">
        <div className="flex flex-col">
          <label className="text-gray-800 " htmlFor="">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            className="border rounded-sm border-gray-500 h-9"
            type="email"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-gray-800 " htmlFor="">
            First Name<span className="text-red-600">*</span>
          </label>
          <input
            className="border rounded-sm border-gray-500 h-9"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-gray-800 " htmlFor="">
            Last Name<span className="text-red-600">*</span>
          </label>
          <input
            className="border rounded-sm border-gray-500 h-9"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-gray-800 " htmlFor="">
            Birthday<span className="text-red-600">*</span>
          </label>
          <div className="flex flex-row text-gray-800 items-center">
            <input
              className="border rounded-sm border-gray-500 h-9 w-12 text-center"
              type="text"
              placeholder="mm"
            />
            <span className="mx-2">/</span>
            <input
              className="border rounded-sm border-gray-500 h-9 w-12 text-center"
              type="text"
              placeholder="dd"
            />
            <p className="ml-2">(mm/dd)</p>
          </div>
        </div>
        <button
          type="submit"
          className="h-9 py-3 px-6 bg-gray-500 rounded-sm w-fit flex items-center justify-center mt-5 min-w-[118px]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
