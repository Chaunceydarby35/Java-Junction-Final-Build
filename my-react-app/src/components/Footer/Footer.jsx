import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
  } from 'react-icons/fa';
  import { FaMapLocation } from 'react-icons/fa6';
  import CreditCards from "../../assets/Website/credit-cards.webp";
  import { motion } from 'framer-motion';
  
  const Footer = () => {
    return (
      <div className='bg-gradient-to-r from-primary
      to-primaryDark pt-12 pb-8 text-white'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2
          md:grid-cols-3 gap-8">
            {/* company details section */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className='space-y-6'>
                <h1 className='text-3xl font-bold 
                uppercase'>Java Junction</h1>
                <p className='text-sm max-w-[300px]'>
                 Welcome to Java Junction, where every cup of coffee is crafted to perfection.
                 Whether you need a bold morning brew or a smooth afternoon pick-me-up,
                 we are your go-to spot for exceptional coffee and a cozy atmosphere. Sip, 
                 relax, and fuel your day with us!
                </p>
                <div>
                    <p className='flex items-center gap-2'>
                    <FaPhone />
                    +34 998-89-09-76
                    </p>
                    <p className='flex items-center gap-2 mt-2'>
                        {" "}
                        <FaMapLocation /> Madrid, Spain
                    </p>
                </div>
            </motion.div>
            {/* Footer Links section */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className='space-y-6'>
                <h1 className='text-3xl font-bold'>Quick Links</h1>
                <div className='grid grid-cols-2
                gap-3'>
                    {/* first column section */}
                    <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    {/* second column section */}
                    <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            {/* Social Links section */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className='space-y-6'>
                <h1 className='text-3xl font-bold'>Follow Us</h1>
                <div className='flex items-center gap-3'>
                    <FaFacebook className='text-3xl
                    hover:scale-105 duration-300'/>
                    <FaInstagram className='text-3xl
                    hover:scale-105 duration-300'/>
                    <FaTelegram className='text-3xl
                    hover:scale-105 duration-300'/>
                    <FaGoogle className='text-3xl
                    hover:scale-105 duration-300'/>
                </div>
                <div>
                    <h1 className='text-xl font-semibold
                    mb-2'>Payment Methods</h1>
                    <img src={CreditCards} alt="credit cards"
                    className='w-[80%}' />
                </div>
            </motion.div>
          </div>

          {/* copyright section */}
          <p className='text-white text-center mt-8 *:pt-8
          border-t-2'>
            Copyright &copy; 2024 Java Junction. All 
            rights reserved.
          </p>
        </div>
      </div>
    )
  }
  
  export default Footer