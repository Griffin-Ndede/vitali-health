function Home() {
  return (
    <>
      {/* Main Section */}
      <section className="h-screen mt-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 md:px-16">
        {/* Text Content */}
        <div className="max-w-3xl mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-teal mb-6">Welcome to Vitali Health</h1>
          <p className="text-xl text-gray-700 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corrupti.
            Consectetur accusamus mollitia provident numquam quibusdam sequi quas dolor.
          </p>
          <button className="px-6 py-3 bg-teal text-white text-xl rounded-3xl hover:bg-coral transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="h-auto w-full md:w-1/3">
          <img
            src="/images/athlete.webp"
            alt="Lady working out"
            className="object-cover rounded-xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-6 md:px-16 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Card 1 */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-teal mb-2">Personalized Plans</h2>
          <p className="text-gray-700">
            Get workout plans tailored specifically to your goals and fitness level.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-soft-coral shadow-2xl rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white mb-2">Expert Coaching</h2>
          <p className="text-white">
            Learn from top fitness experts to stay motivated and on track.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-teal mb-2">Community Support</h2>
          <p className="text-gray-700">
            Join a community of like-minded individuals on your fitness journey.
          </p>
        </div>
      </section>

      {/* Hypertension Section */}
      <section className="px-6 md:px-16 mt-12 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
        {/* Image Section */}
        <div className="flex-1 w-full md:w-auto">
          <img
            src="/images/athlete.webp"
            alt="African woman exercising with focus and energy"
            className="object-cover rounded-xl shadow-2xl w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-6 text-teal">
            A Unified Approach to Hypertension Management
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            We provide an integrated solution combining nutrition, fitness, stress management, 
            and lifestyle changes to empower patients with hypertension to take control of their health.
          </p>
          <p className="text-lg text-gray-700 mb-4">Our platform offers:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Tailored Nutrition Plans:</strong> Custom dietary recommendations for optimal blood pressure.
            </li>
            <li>
              <strong>Effective Fitness Regimens:</strong> Personalized workouts to enhance cardiovascular health.
            </li>
            <li>
              <strong>Stress Management Techniques:</strong> Proven strategies to lower stress and its effects on blood pressure.
            </li>
            <li>
              <strong>Lifestyle Coaching:</strong> Expert guidance for sustainable lifestyle changes.
            </li>
          </ul>
          <p className="text-lg text-gray-700 mt-6">
            By addressing these areas, we help patients reduce medication reliance and improve overall well-being.
            We also foster a supportive community to combat isolation, enhance treatment adherence, 
            and promote better health outcomes.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
