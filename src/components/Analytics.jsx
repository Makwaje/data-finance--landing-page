import Laptop from "../assets/laptop.jpg";

function Analytics({ id }) {
  return (
    <div
      className="grid w-full bg-white px-4 py-16 md:grid-cols-2"
      id={id || ""}
    >
      <div className="mx-auto max-w-[1240px]">
        <img
          className="mx-auto my-4 w-[500px] "
          src={Laptop}
          alt="laptop with data charts on the screen"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
        <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          Manage Data Analytics Centrally
        </h1>
        <p className="md:max-w-[500px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere eos
          ullam nostrum quis quae, mollitia similique non deserunt voluptas
          natus quos reiciendis aut fuga, qui porro eius asperiores nobis
          tempora?
        </p>
        <button className="text mx-auto my-6 w-[200px] rounded-md bg-black py-3 font-medium text-[#00df9a] md:mx-0">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Analytics;
