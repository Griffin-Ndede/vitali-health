import { useState , useRef} from "react";
import emailjs from 'emailjs-com';
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
  })

  const form = useRef()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Newsletter_subscription', 'template_eiikc1b', form.current, 'UJSCICIDjktvtT98k')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
          <div className="bg-teal bg-opacity-80 py-4 md:py-10 px-4 md:px-6 lg:py-10 w-full md:w-10/12 lg:w-8/12 flex flex-col items-center justify-center relative z-40 rounded">
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
            <form onSubmit={handleSubmit} ref={form}
            className="flex flex-col sm:flex-row items-center mt-8 w-full gap-4">
               <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="border border-white text-white placeholder:opacity-75 text-sm bg-transparent placeholder-white  p-3 sm:p-3 w-full sm:flex-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="border border-white text-white placeholder:opacity-75 text-sm bg-transparent placeholder-white  p-3 sm:p-3 w-full sm:flex-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
                />
              <button 
              type="submit"
              className="w-full sm:w-auto bg-soft-coral hover:bg-opacity-75 text-white text-sm  p-3 sm:p-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white">
                Subscribe
              </button>
            </form>
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
          <AnchorLink href="#home">
            <button>Back to top</button>
          </AnchorLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
