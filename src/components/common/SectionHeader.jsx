import { motion } from "framer-motion";
import { staggerItem } from "../../utils/animations";

const SectionHeader = ({
  eyebrow,
  title,
  accent,
  description,
  className = "mb-14",
}) => {
  return (
    <motion.div className={className}>
      {eyebrow ? (
        <motion.p variants={staggerItem} className="tagline">
          {eyebrow}
        </motion.p>
      ) : null}

      <motion.h2 variants={staggerItem} className="heading-md">
        {title}
        {accent ? <span className="text-[#A3FF3F]">{accent}</span> : null}
      </motion.h2>

      {description ? (
        <motion.p variants={staggerItem} className="body-text max-w-xl">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeader;
