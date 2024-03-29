import { assets } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GreyButton } from "../buttons/GreyButton";

export const FeaturesComponent = ({ className }: { className?: string }) => {
  return (
    <motion.section className={`mt-[12%] ${className}`}>
      <GreyButton text="Features" />
      <motion.h3
        className="h3 md:h2 text-center my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Powerful features to boost <br /> your productivity
      </motion.h3>
      <motion.div className="md:flex justify-between">
        <motion.div className="text-center w-full md:w-1/3 pb-12 pt-16 pr-6 rounded-[40px] hover:bg-gray-50 transition-all">
          <Image
            src={assets.SecurePlatform}
            alt="secure platform"
            className="w-4/5 h-1/3 mx-auto"
          />
          <h4 className="h4 mt-3">Secure platform</h4>
          <p className="default-paragraph my-6">
            We offer a secure platform online that ensures the protection of
            sensitive information and data transmitted through the platform.
            {/* Advanced security protocols and encryption methods are employed
      to safeguard against unauthorized access and ensure compliance
      with industry standards. Regular security audits and updates are
      also performed to maintain the integrity of the system and
      provide peace of mind for users. Our platform provides a
      reliable and safe environment for you to conduct online
      transactions and exchange important information with us. */}
          </p>
          <Link href="/features" className="underline font-semibold">
            Learn More
          </Link>
        </motion.div>
        <motion.div className="text-center w-full md:w-1/3 pb-12 pt-16 px-4 rounded-[40px] hover:bg-gray-50 transition-all">
          <Image
            src={assets.AdvancedAnalytics}
            alt="secure platform"
            className="w-4/5 mx-auto h-1/3"
          />
          <h4 className="h4 mt-3">Advanced Analytics</h4>
          <p className="default-paragraph my-6">
            We offers advanced analytics to our customers, providing them with
            insights and data-driven decision making capabilities.
            {/* This includes tools to process and visualize large
      data sets, and to perform statistical and machine learning
      modeling. With this service, your customers are able to make
      more informed business decisions based on data trends, user
      behavior and many more. */}
          </p>
          <Link href="/features" className="underline font-semibold">
            Learn More
          </Link>
        </motion.div>
        <motion.div className="text-center w-full md:w-1/3 pb-12 pt-16 pl-6 rounded-[40px] hover:bg-gray-50 transition-all">
          <Image
            src={assets.PowerfulAutomation}
            alt="secure platform"
            className="w-4/5 mx-auto md:ml-auto h-1/3"
          />
          <h4 className="h4 mt-3">Powerful automation</h4>
          <p className="default-paragraph my-6">
            We provide powerful automation capabilities to streamline processes,
            increase efficiency and improve productivity.
            {/* This can include tools for automating repetitive
      tasks, scheduling, workflow management, and integration with
      other software and systems. The automation service can
      significantly reduce human error, saving time and costs for your
      customers. Additionally, Automation can provide your customers
      with the ability to scale operations, and to focus on more
      strategic and creative activities. */}
          </p>
          <Link href="/features" className="underline font-semibold">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
