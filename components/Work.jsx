import React from "react";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets (1)/assets/variants";
const workData = [
  {
    img: "/assets (1)/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets (1)/assets/img/work/construction.jpg",
    name: "construction",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets (1)/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets (1)/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Your short description",
    href: "",
  },
];
const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20 "
        >
          <Pretitle text="Our work" />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto ">
            Providing export services designer to deliver quality and invocation
            in every project we undertake
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center "
            >
              <Image
                src={item.img}
                quality={100}
                fill
                alt=""
                className="object-cover"
              />
              <div className="w-[90%] h-[84px] flex justify-between items-center bg-primary absolute bottom-4 text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-200 ">
                <div className="pl-8">
                  <h4 className="text-white font-primary tracking-[1px] uppercase font-semibold ">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3 "
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
