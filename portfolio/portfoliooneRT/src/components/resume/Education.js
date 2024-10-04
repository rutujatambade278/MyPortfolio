import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Science (MCS)"
            subTitle="Passout - (2022 - 2024)"
            College="Dr. D.Y. Patil College, Akurdi, Pune"
          />
          <ResumeCard
            title="Bachelor of Computer Science (BCS)"
            subTitle="Passout - (2019 - 2022)"
            College="Maharshi Karve Stree Shikshan Sanstha (MKSSS), Karvenagar, Pune"
          />
          <ResumeCard
            title="12th Grade"
            subTitle="Passout - (2019)"
            College="Mahatma Gandhi Junior College, Manchar"
          />
          <ResumeCard
            title="10th Grade"
            subTitle="Passout - (2017)"
            School="Shree Bhairvanath Vidyalay, Awasari Khurd"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
