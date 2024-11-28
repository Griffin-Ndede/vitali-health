// import ThemeToggle from "./ThemeToggle";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <>
    {/* <ThemeToggle/> */}
      {/* Main Section */}
      <section id="home" 
      className="h-fit mt-32 text-center md:text-left">
        {/* Text Content */}
        <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="max-w-3xl mb-8 md:mb-0 pl-10 w-2/3">
          <h1 className="text-3xl font-bold text-teal mb-6">Welcome to Vitali Health</h1>
          <p className="text-base w-5/6  mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, ipsam. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, perspiciatis.
          </p>
        <AnchorLink href="#aboutus">
          <button 
          className="px-6 py-3 bg-teal text-white text-base rounded-3xl hover:bg-coral transition-colors duration-300">
            Get Started
          </button>
          </AnchorLink>
        </div>

        {/* Image */}
        <div className="h-fit w-full md:w-1/3">
          <img
            src="/images/athlete.webp"
            alt="Lady working out"
            className="object-cover rounded-[20%_40%_26%_86%/42%_47%_53%_58%] shadow-2xl w-full"
          />
        </div>
        </div>
        <div className="px-6 md:px-16 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Card 1 */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-xl font-bold text-teal mb-2">Reduce medication</h2>
          <p className="text-base">
          Natural blood pressure management to lessen reliance on medication.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-soft-coral shadow-2xl rounded-3xl p-10">
          <h2 className="text-xl font-bold text-white mb-2">Lower health care costs</h2>
          <p className="text-white text-base">
          Preventive care to reduce medical expenses and complications.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-xl font-bold text-teal mb-2">Improve quality of life</h2>
          <p className="text-base">
          Personalized plans for better health, more energy, and improved blood pressure.
          </p>
        </div>
      </div>
     
      </section>

     

      {/* Hypertension Section */}
      <section id="aboutus" className="h-screen px-6 md:px-16 mt-12 flex flex-col md:flex-row gap-8 md:text-left items-center">
        {/* Image Section */}
        <div className="flex-1 w-full md:w-1/3">
          <img
            src="/images/undraw_personal_training_0dqn.png"
            alt="African woman exercising with focus and energy"
            className="object-cover w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-2/3">
          <h1 className="text-2xl font-extrabold mb-6 text-teal md:items-center text-center ">
            A Unified Approach to Hypertension Management
          </h1>
          <p className="text-base  mb-4">
            We provide an integrated solution combining nutrition, fitness, stress management, 
            and lifestyle changes to empower patients with hypertension to take control of their health.
          </p>
          <p className="text-base  mb-4">Our platform offers:</p>
          <ul className="list-disc pl-6 space-y-2 text-base ">
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
          <p className="text-base  mt-6">
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
