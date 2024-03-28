import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  
    console.log("console from footer ");
  return (
    <div className="h-64 bg-gray-100 font-semibold m-auto font-sans text-gray-500 pt-4">
      <div className="flex justify-around">
        <div className="px-2 sm:px-5">
          <h3 className='text-xs sm:text-lg m-1 text-black'>Company</h3>
          <ul>
            <li className=' text-xs sm:text-md m-3'>About Us</li>
            <li className=' text-xs sm:text-md m-3'>Team</li>
            <li className=' text-xs sm:text-md m-3'>Careers</li>
            <li className=' text-xs sm:text-md m-3'>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='text-xs sm:text-lg m-1 text-black'>Contact</h3>
          <ul>
            <li className=' text-xs sm:text-md m-3'>Contact Us</li>
            <li className=' text-xs sm:text-md m-3'>Help & Support</li>
            <li className=' text-xs sm:text-md m-3'>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='text-xs sm:text-lg m-1 text-black'>Connect with us</h3>
          <div className="social-icons">
            <FontAwesomeIcon className=' m-1 size-4 sm:size-6' icon={faFacebook} />
            <FontAwesomeIcon className=' m-1 size-4 sm:size-6'  icon={faInstagram} />
            <FontAwesomeIcon className=' m-1 size-4 sm:size-6' icon={faTwitter} />
          </div>
        </div>
      </div>
      <div className=" text-center m-5 text-xs sm:text-md">
        <p>&copy; Titan App. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
