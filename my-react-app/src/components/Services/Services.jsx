import { motion } from "framer-motion";
import Coffee1 from "../../assets/Coffee/coffee1.png";
import Coffee3 from "../../assets/Coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Pure, Bold, Uncompromised.",
  },
  {
    id: 2, // Changed to unique id
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "Warm Comfort in Every Sip.",
  },
  {
    id: 3, // Changed to unique id
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "Chilled, Refreshing Energy.",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4"> 
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Bold and
          <span className="text-primary"> Satisfying Coffee</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Our coffee is bold and satisfying, crafted to deliver a rich, full-bodied flavor that awakens your senses with every sip. 
          Perfectly balanced with a smooth finish, it is the ideal companion for those who crave a robust, energizing brew to fuel their day.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }} 
        className="grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3
        gap-8"
      >
        {servicesData.map((service) => (
          <motion.div 
            key={service.id} // Added key prop
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img 
              src={service.image} 
              alt={service.title} // Added meaningful alt text
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">
                {service.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;