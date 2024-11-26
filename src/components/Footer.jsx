function Footer() {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      <div className="w-full relative flex items-center justify-center">
        {/* Background Images */}
        {/* <img
          src="https://i.ibb.co/4sYZ8gC/img-2.png"
          alt="dining"
          className="w-full h-full absolute z-0 hidden xl:block rounded-3xl"
        /> */}
        <img
          src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
          alt="dining"
          className="w-full h-full absolute z-0 hidden sm:block xl:hidden rounded-3xl"
        />
        <img
          src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
          alt="dining"
          className="w-full h-full absolute z-0 sm:hidden rounded-3xl"
        />

        {/* Overlay Content */}
        <div className="bg-gray-800 bg-opacity-80 py-10 md:py-16 px-4 md:px-12 lg:py-20 w-full md:w-10/12 lg:w-8/12 flex flex-col items-center justify-center relative z-40 rounded-3xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-9 text-white text-center">
            Don’t Miss Out!
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-center text-white mt-6">
            Subscribe to our newsletter to stay in the loop. Our newsletter is sent once a week on every Friday, 
            so subscribe to get the latest news and updates.
          </p>

          {/* Subscription Form */}
          <div className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 w-full lg:w-6/12">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-white text-white bg-transparent placeholder-white font-medium p-4 w-full sm:flex-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full sm:w-auto bg-soft-coral hover:bg-opacity-75 text-white font-semibold py-4 px-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
