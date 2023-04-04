export default function FormBirhdaySpecialRewards() {
  return (
    <div
      id="formBirhdaySpecialRewards"
      className="flex min-w-full flex-col items-center bg-gray-300 p-4 py-24 tablet:py-10"
    >
      <h5 className="mb-7 text-center text-4xl text-gray-8">
        Join our Birthday Club Newsletter for special rewards
      </h5>
      <form className="flex w-full max-w-5xl flex-col bg-white p-7 text-lg">
        <div className="flex flex-col">
          <label className="text-gray-800 " htmlFor="">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input className="h-9 rounded-sm border border-gray-500" type="email" />
        </div>
        <div className="mt-6 flex flex-col">
          <label className="text-gray-800 " htmlFor="">
            First Name<span className="text-red-600">*</span>
          </label>
          <input className="h-9 rounded-sm border border-gray-500" type="text" />
        </div>
        <div className="mt-6 flex flex-col">
          <label className="text-gray-800 " htmlFor="">
            Last Name<span className="text-red-600">*</span>
          </label>
          <input className="h-9 rounded-sm border border-gray-500" type="text" />
        </div>
        <div className="mt-6 flex flex-col">
          <label className="text-gray-800 " htmlFor="">
            Birthday<span className="text-red-600">*</span>
          </label>
          <div className="flex flex-row items-center text-gray-800">
            <input
              className="h-9 w-12 rounded-sm border border-gray-500 text-center"
              type="text"
              placeholder="mm"
            />
            <span className="mx-2">/</span>
            <input
              className="h-9 w-12 rounded-sm border border-gray-500 text-center"
              type="text"
              placeholder="dd"
            />
            <p className="ml-2">(mm/dd)</p>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 flex h-9 w-fit min-w-[118px] items-center justify-center rounded-sm bg-gray-500 py-3 px-6"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
