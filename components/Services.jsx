"use client";
import React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets (1)/assets/variants";
const services = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "Providing high-quality construction services for residential and commercial projects with a focus on safety and efficiency",
    serviceList: [
      "General Contracting",
      "Project Management",
      "Renovation",
      "Site Preparation",
      "Concrete Work",
    ],
    thumbs: [
      { url: "/assets (1)/assets/img/services/thumb-1.jpg" },
      { url: "/assets (1)/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      " Transforming spaces with innovative designs and expert craftsmanship that exceed client expectations while ensuring satisfaction",
    serviceList: [
      "Interior Design",
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Home Additions",
      "Exterior Renovation",
    ],
    thumbs: [
      { url: "/assets (1)/assets/img/services/thumb-3.jpg" },
      { url: "/assets (1)/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      " Restoring and preserving the beauty of spaces through skilled craftsmanship and attention to detail while ensuring long-lasting results and customer satisfaction",
    serviceList: [
      "Water Damage Restoration",
      "Fire Damage Restoration",
      "Mold Remediation",
      "Emergency Cleanup",
      "Historic Preservation",
    ],
    thumbs: [
      { url: "/assets (1)/assets/img/services/thumb-4.jpg" },
      { url: "/assets (1)/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      " Offering expert guidance and tailored solutions to optimize project outcomes and enhance client satisfaction to enhance project efficiency and drive successful outcomes.",
    serviceList: [
      "Project Consulting",
      "Cost Estimation",
      "Risk Assessment",
      "Feasibility Studies",
      "Regulatory Compliance and Quality Assurance",
    ],
    thumbs: [
      { url: "/assets (1)/assets/img/services/thumb-5.jpg" },
      { url: "/assets (1)/assets/img/services/thumb-6.jpg" },
    ],
  },
];
const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};
const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <div id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          onClick={() => setActiveTab(item.name)}
          className="text-center max-w-[540px] mx-auto "
        >
          <Pretitle text={"Our Services"} center />
          <h2 className="h2 mb-3"> Solutions We Provide </h2>
          <p className="mb-11 max-w-[480px] mx-auto ">
            {" "}
            We offer a comprehensive range of services to meet your needs and
            exceed your expectations.{" "}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          <Tabs
            defaultValue="construction"
            className="flex flex-col xl:flex-row gap-[30px] "
          >
            <TabsList
              className="grid w-full md:grid-cols-2 xl:grid-cols-1 gap-[20px] rounded-none p-0 bg-transparent
       grid-cols-1 h-full xl:w-[345px] "
            >
              {services.map((item, index) => {
                return (
                  <TabsTrigger
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 gap-14 outline-none text-primary "
                    key={index}
                    value={item.name}
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary "
                      } `}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div className="uppercase font-primary font-semibold tracking-[.6px] w-[100px] ml-16 text-base">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px] ">
              {services.map((item) => {
                return (
                  <TabsContent
                    key={item.name}
                    value={item.name}
                    className="m-0"
                  >
                    <motion.div
                      variants={fadeInVariant}
                      initial="hidden"
                      whileInView={"show"}
                      exit={"hidden"}
                      className="flex flex-col md:flex-row gap-[30px] "
                    >
                      <div className="flex md:flex-col gap-5 xl:gap-[30px]  ">
                        {item.thumbs.map((thumb, index) => {
                          return (
                            <div
                              key={index}
                              className="relative w-[140px] xl:w-[200px] h-[140px] "
                            >
                              <Image src={thumb.url} fill alt="" />
                            </div>
                          );
                        })}
                      </div>
                      {/* text & button */}
                      <div>
                        <div>
                          <h3 className="h3 mb-6">{item.title}</h3>
                          <p className="mb-10">{item.description}</p>
                          {/* service list */}
                          <ul className="grid grid-cols-2 gap-4 mb-12">
                            {item.serviceList.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex items-center gap-4"
                                >
                                  <div className="w-[6px] h-[6px] bg-accent "></div>
                                  <div className="capitalize font-medium text-primary">
                                    {item}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          {/* btn */}
                          <Button text="Read More" />
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
