import React from "react";
import "../index.css";
import FeatureImg from "../assets/feature.svg";
import { events } from "../data/events";
import { fests } from "../data/fests";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <AboutUs />
      <FeaturesSection />
      <LatestEventsSection />
    </>
  );
}

// about us seciton
function AboutUs() {
  return (
    <section className="backdrop-blur-sm text-white my-8 " id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl hero-heading">
            What is EventHive
          </h2>

          <p className="mt-4 text-gray-300">
            A centralized online platform that connects students with various
            events, competitions, conferences and many more activities organized
            in different colleges around them which can provide valuable
            networking opportunities, enhance their skill set, and help them
            achieve their academic and professional goals.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <h2 className="my-6 text-xl font-bold text-white  border-b-4 border-[#B169FF]">
              Events
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Get to know about upcoming events, registration deadlines,
              eligibility criteria, event format, chief guests, prizes and many
              more.
            </p>
          </div>

          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <h2 className="my-6 text-xl font-bold text-white  border-b-4 border-[#B169FF]">
              Community
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Form your own community or be a part of other community where you
              can interact, discuss projects and can have a chit chat in mean
              time.
            </p>
          </div>

          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <h2 className="my-6 text-xl font-bold text-white  border-b-4 border-[#B169FF]">
              Talent
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Showcase your talent and skills by building your profile page,
              increasing your visibility on the platform and be a part of the
              others project who need your help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <>
      <section id="features">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-start lg:gap-x-16 place-content-center">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl hero-heading">
                The Opportunity is Now and You Just Need To Realize It. Step
                into Them Today & Make it Happen.
              </h2>
            </div>

            <div className="grid  gap-4 grid-rows-3">
              <div className="flex justify-between rounded-xl border p-4 space-x-4 flex-wrap">
                <span className="mt-2 font-bold text-[#F49867]">
                  Discussion Forums
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  The discussion forum will be a place where students can
                  interact with one another and share their ideas, collaborate
                  with others, give feedback and ask questions related to the
                  events.
                </p>
              </div>

              <div className="flex justify-between rounded-xl border p-4 space-x-4 flex-wrap">
                <span className="mt-2 font-bold text-[#F49867]">
                  Building your Portfolio
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  Event Hive allows you to build your own profile which includes
                  your name, age, events you participated, your winnings, skills
                  etc which increases visibility.
                </p>
              </div>

              <div className="flex justify-between rounded-xl border p-4 space-x-4 flex-wrap">
                <span className="mt-2 font-bold text-[#F49867]">
                  Create Community
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  Event Hive allows you to build your own #(hashtag) community
                  where you can invite your friends or group members to discuss
                  your projects can have a chit chat.
                </p>
              </div>

              <div className="flex justify-between rounded-xl border p-4 space-x-4 flex-wrap">
                <span className="mt-2 font-bold text-[#F49867]">
                  Invite Others To Your Project
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  Event Hive allows you to invite like minded people or the
                  person having skills required for your project to your team
                  for their expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <section className="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center">
            <img
              alt="Violin"
              src={FeatureImg}
              className="h-full w-full object-cover"
            />
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center sm:text-left">
                <span className="text-2xl font-bold text-gray-900 md:text-3xl hero-heading text-left">
                  The possibilities are beyond your imagination
                </span>

                <p className=" text-gray-500 md:mt-4 md:block">
                  You should take part in events, conferences, fests held in
                  different organizations which is for sure more beneficial than
                  your lectures. This helps to grow your skills, broadens your
                  perspective towards a different world and help you achieve
                  success.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

function LatestEventsSection() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className=" max-w-lg  my-6">
            <span className="text-3xl font-bold sm:text-4xl hero-heading">
              A lot is happening,
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl hero-heading">
              You ready for it.
            </h2>
          </div>
          <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {events.map((event, index) => {
              return (
                <EventPost key={index} name={event.title} date={event.date} link={event.contact.website}/>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function EventPost({ name, img, date ,link}) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm sm:break-inside-avoid max-w-md mb-8">
      {img && <img alt="Office" src={img} className="h-56 w-full object-cover" />}

      <div className="p-4 sm:p-6">
        <p className="text-slate-400 my-0.5 text-sm">{date}</p>
        <Link to={link? link: '/events'}>
          <h3 className="text-lg font-medium text-gray-200">{name}</h3>
        </Link>

        <Link
          to={link? link : '/events'}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </Link>
        
      </div>
    </article>
  )
}
function FestPost() {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm sm:break-inside-avoid mb-8">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </a>

        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}
