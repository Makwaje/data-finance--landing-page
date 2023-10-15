import Double from "../assets/double.png";
import Single from "../assets/single.png";
import triple from "../assets/triple.png";
function Cards({ id }) {
  return (
    <div className="w-full bg-white px-4 py-[10rem]" id={id || ""}>
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={Single}
            alt="One user"
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted user</p>
            <p className="mx-8 border-b py-2">Send up to 2GB</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
            Get started
          </button>
        </div>

        <div className="my-8 flex w-full flex-col rounded-lg bg-gray-200 p-4 shadow-xl duration-300 hover:scale-105 md:my-0">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-transparent"
            src={Double}
            alt="Two users"
          />
          <h2 className="py-8 text-center text-2xl font-bold">Two User</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">1TB Storage</p>
            <p className="mx-8 border-b py-2">2 Granted user</p>
            <p className="mx-8 border-b py-2">Send up to 5GB</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-black py-3 font-medium text-[#00df9a]">
            Get started
          </button>
        </div>

        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={triple}
            alt="Three users"
          />
          <h2 className="py-8 text-center text-2xl font-bold">Three Users</h2>
          <p className="text-center text-4xl font-bold">$449</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">5TB Storage</p>
            <p className="mx-8 border-b py-2">3 Granted user</p>
            <p className="mx-8 border-b py-2">Send up to 20GB</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
