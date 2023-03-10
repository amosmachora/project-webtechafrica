import { motion } from "framer-motion";
import React from "react";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";
import { GreyButton } from "../Components/GreyButton";
import { pageTransition } from "../FramerMotion/PageTransitions";

const About = () => {
  return (
    <motion.div variants={pageTransition}>
      <CircleBackGround />
      <div className="z-10 relative">
        <section className="text-center mt-[8%]">
          <h1 className="h2 mb-4">About our company</h1>
          <p className="default-paragraph bg-white">
            At our company, we specialize in providing comprehensive web
            development solutions for businesses of all sizes. From custom
            website design and development to hosting and domain name
            registration, we have everything you need to establish a
            professional online presence. Our team of experts also offers
            unlimited customer support, social media management, and custom ads
            management to help you promote your brand and sell products online.
            Let us help you take your business to the next level with our
            comprehensive web development services.
          </p>
          <div className="flex mt-9 mb-[3%] justify-between h-96">
            <img
              alt="Three Woman in Front of Laptop Computer"
              src="https://images.pexels.com/photos/3182780/pexels-photo-3182780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-[64%] rounded-3xl object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="people looking at a web design"
              className="w-1/3 object-cover rounded-3xl"
            />
          </div>
          <div className="flex justify-between">
            <h3 className="h3 whitespace-nowrap mr-9">What we do</h3>
            <div className="text-left">
              <p className="default-paragraph">
                Our custom website design and development service will create a
                unique and professional website tailored to your business needs.
                We also provide hosting options to ensure your website is always
                live and accessible to your customers
              </p>
              <p className="default-paragraph mt-6">
                Our social media management service will help you establish a
                strong online presence across multiple platforms, increase brand
                awareness and engage with your target audience. We will create a
                content strategy, design graphics, and manage your accounts to
                ensure that your social media presence is consistent, effective
                and aligned with your business objectives. Our custom ads
                management service will create and run effective campaigns to
                drive traffic, increase conversions and help you reach your
                target audience. We will use our expertise to create, launch,
                and monitor campaigns across different platforms to help you
                achieve your business goals.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 rounded-[40px] py-14 px-12 flex justify-between mt-[10%]">
          <div>
            <p className="text-5xl font-extrabold">
              100<span className="text-primaryOne">M</span>
            </p>
            <p className="font-semibold text-xl">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">
              24<span className="text-primaryOne"> h</span>
            </p>
            <p className="font-semibold text-xl">Expert Support Team</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">
              72<span className="text-primaryOne"> k+</span>
            </p>
            <p className="font-semibold text-xl">Sales Count</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">
              335<span className="text-primaryOne"> +</span>
            </p>
            <p className="font-semibold text-xl">Client Worldwide</p>
          </div>
        </section>
        <section className="mt-[10%] flex justify-between">
          <div className="pr-3">
            <h2 className="h2">Our Mission</h2>
            <p className="default-paragraph mt-[2%]">
              Our mission is to provide businesses with comprehensive web
              development and social media management services that will help
              them establish a strong online presence and reach their target
              audience. We aim to empower our clients to achieve their business
              goals by providing them with the tools and resources they need to
              succeed in the digital world.
            </p>
            <p className="default-paragraph mt-[2%]">
              We strive to deliver exceptional service and support, and to build
              lasting relationships with our clients. We are committed to
              staying at the forefront of the latest industry trends and
              technologies, and to delivering solutions that are innovative,
              effective and affordable. Our ultimate goal is to help our clients
              achieve their business objectives and grow their online presence
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="yellow tie"
            className="w-2/5 object-cover rounded-2xl"
          />
        </section>
        <section className="mt-[10%]">
          <GreyButton text="Our values" />
          <h2 className="h2 text-center mt-[3%]">
            The story and values behind <br />
            our company
          </h2>
          <div className="flex flex-wrap mt-[1%] gap-8 text-xs">
            <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-[48%]">
              <img src={assets.Bulb} alt="Bulb" className="mr-4 w-16 h-20" />
              <div>
                <h4 className="h4">Innovation</h4>
                <p className="default-paragraph mt-2">
                  We are constantly pushing the boundaries to deliver
                  cutting-edge solutions that will help our clients stay ahead
                  of the competition.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-[48%]">
              <img
                src={assets.teamwork}
                alt="Bulb"
                className="mr-4 w-16 h-20"
              />
              <div>
                <h4 className="h4">Team work</h4>
                <p className="default-paragraph mt-2">
                  We believe that by working together, we can achieve more. We
                  foster a collaborative environment where everyone's ideas and
                  contributions are valued.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-[48%]">
              <img src={assets.Award} alt="Bulb" className="mr-4 w-16 h-20" />
              <div>
                <h4 className="h4">Excellence</h4>
                <p className="default-paragraph mt-2">
                  We are committed to delivering the highest quality service and
                  support to our clients.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-[48%]">
              <img src={assets.Paper} alt="Bulb" className="mr-4 w-16 h-20" />
              <div>
                <h4 className="h4">Responsibility</h4>
                <p className="default-paragraph mt-2">
                  We take responsibility for our actions and are committed to
                  conducting business in an ethical and responsible manner.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
