import React from "react";
import Pretitle from "./Pretitle";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets (1)/assets/variants";
const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretitle */}
              <Pretitle text={"About us"} />
              <h2 className="h2 mb-6">
                Focused On Excellence In Every Project
              </h2>
              <p className="mb-11">
                Our unweavering commitment to excellence drives every project we
                undertake. From concept to completion , we strive to deliver
                exceptional results that exceed our clients' expectations.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  width={154}
                  alt=""
                  height={30}
                  src="/assets (1)/assets/img/about/signature.svg"
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact us" />
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative ">
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10 "></div>
              <Image
                width={444}
                height={493}
                alt=""
                className="object-cover"
                src="/assets (1)/assets/img/about/img.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
