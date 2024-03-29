import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="./logo.svg"
          alt="logo"
          width={100}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-black lg:max-w-lg font-bold leading-[120%]">
        Dive Into  
      <span className="red-gradient">The World of </span> Anime Wonders
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-fit" />
      </div>
    </header>
  );
}

export default Hero;
