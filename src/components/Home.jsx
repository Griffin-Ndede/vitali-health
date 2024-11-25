function Home() {
  return (
    <>
      {/* Main Section */}
      <div className="h-auto mt-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 md:px-16">
  <div className="max-w-3xl mb-8 md:mb-0 h-auto">
    <h1 className="text-4xl font-bold text-teal mb-4">Welcome to Vitali Health</h1>
    <p className="text-xl text-gray-700 mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corrupti.
      Consectetur accusamus mollitia provident numquam quibusdam sequi quas dolor.
    </p>
    <button className="px-6 py-3 bg-teal text-white text-xl rounded-3xl hover:bg-coral transition-colors duration-300">
      Get Started
    </button>
  </div>

  <div className="max-w-sm">
    <img
      src="public/images/athlete.webp"
      alt="Lady working out"
      className="w-full h-auto object-cover rounded-xl shadow-2xl"
    />
  </div>
</div>


      {/* Cards Section */}
      <div className="px-6 md:px-16 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-2xl rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-teal mb-2">Personalized Plans</h2>
          <p className="text-gray-700">
            Get workout plans tailored specifically to your goals and fitness level.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-soft-coral shadow-2xl rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Expert Coaching</h2>
          <p className="text-white">
            Learn from top fitness experts to stay motivated and on track.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-teal mb-2">Community Support</h2>
          <p className="text-gray-700">
            Join a community of like-minded individuals on your fitness journey.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
