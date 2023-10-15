function Newsletter({ id }) {
  return (
    <div className="w-full px-4 py-16 text-white" id={id || ""}>
      <div className="sm:grid-col-2 mx-auto grid max-w-[1240px] lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="sm:3xl py-2 pl-2 text-2xl font-bold md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <input
              className=" w-full rounded-md p-3 text-black "
              type="email"
              placeholder="enter email"
            />
            <button className="my-6 ml-4 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
              Notify me
            </button>
          </div>
          <p>
            We care about the production of your data. Read our
            <span className="text text-[#00df9a]"> Privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
