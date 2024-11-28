function Footer() {
  return (
    <>
      <div id="contact" className="2xl:mx-auto 2xl:container mb-10 py-16">
        <div className="w-full relative flex items-center justify-center">
          {/* Background Images */}
          <img
            src="https://www.salleurl.edu/sites/default/files/content/nodes/View%20Page/image/21434/39069/la-salle-sport-fitness-campus-barcelona.jpg"
            alt="fitness"
            className="w-full h-fit absolute z-0 hidden xl:block"
          />
          {/* Overlay Content */}
          <div className="bg-teal bg-opacity-80 py-4 md:py-16 px-4 md:px-12 lg:py-20 w-full md:w-10/12 lg:w-8/12 flex flex-col items-center justify-center relative z-40 rounded-3xl">
            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center">
              Don’t Miss Out!
            </h1>
            {/* Description */}
            <p className="text-sm text-center text-white mt-6">
              Subscribe to our newsletter to stay in the loop. Our newsletter is sent once a week on every Friday, 
              so subscribe to get the latest news and updates.
            </p>

            {/* Subscription Form */}
            <div className="flex flex-col sm:flex-row items-center mt-8 w-full lg:w-6/12 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-white text-white placeholder:opacity-75 text-sm bg-transparent placeholder-white  p-3 sm:p-3 w-full sm:flex-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full sm:w-auto bg-soft-coral hover:bg-opacity-75 text-white text-sm  p-3 sm:p-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="bg-teal h-fit py-3 sm:py-4 w-full flex flex-col sm:flex-row items-center justify-between px-6 md:px-16 text-white text-xs sm:text-xs font-light">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Vitali Health. All Rights Reserved.
        </p>
        
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact-us" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
