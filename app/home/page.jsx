
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <>

      {/* hero section */}
      <section className=" bg-[#EEF3FF]">
        <div className=" container py-16 flex justify-between m-d:flex-col">
          <div className=" flex flex-col items-start justify-evenly  m-d:w-[100%] w-[52%]">
            <h1 className=" font-manrope font-[800] text-[48px] leading-[70px]">
              Empowering Local Councils with{" "}
              <span className=" underline text-[#3A40D8]">
                Smarter Decisions
              </span>
              , Faster.
            </h1>
            <h2 className=" mt-5 text-[#202020] font-inter font-[400] text-[16px] leading-[28px]">
              Our AI-powered software simplifies data retrieval from disparate
              sources, providing instant, reliable access to the information
              councils need. With streamlined tools for decision-making and
              enhanced public transparency, we help local governments save time,
              foster accountability, and deliver better outcomes for their
              communities.
            </h2>
            <Link href="/chat">
            <p
              className=" mt-10 py-[15px] px-[25px] text-[#fff] rounded-[100px] bg-[#3A40D8] font-inter font-[600] text-[16px] leading-[18px] no-underline "
             
            >
              Get a Demo
            </p>
            </Link>
          </div>
          <div className=" m-d:w-[100%] w-[35%]">
            <img className="w-full object-contain" src="images/hero.png" />
          </div>
        </div>
      </section>

      {/* rate payer section */}
      <section style={{ transform: "translateY(-50px)" }} className="z-[2]">
        <div className="container flex justify-center">
          <div
            style={{ boxShadow: "0px 4px 36px 0px #00000014" }}
            className=" bg-white flex flex-col items-center py-9 w-[88%] border-solid rounded-[20px] border-[#EFEFEF] border-[1px]"
          >
            <h1 className="w-[50%] font-manrope font-[700] text-[26px] leading-[33px] text-center">
              Are You a <span className=" text-[#3A40D8]">Rate Payer</span>? Or
              a{" "}
              <span className=" text-[#3A40D8]">Community Advocacy Group</span>?
            </h1>
            <h2 className=" w-[80%] mt-3 font-inter fony-[400] text-[15px] leading-[23px] text-[#545454] text-center">
              Get answers with Al: Ask your Council about policies, budgets, and
              more. Ensure accountability from Council officers and management.
              Use Your Council Ai for information to develop your community
              project.
            </h2>
          </div>
        </div>
      </section>

      {/* AI Knowledge hub section */}
      <section>
        <div className="container s-m:space-y-10 flex s-m:flex-col s-m:items-center justify-center">
          <div className="flex flex-col w-[50%] s-m:w-[80%]">
            <img src="/uppercol.svg" className="w-[90%]" />

            <img src="/button.svg" className="w-[50%] pt-2 cursor-pointer" />
          </div>
          <div className="flex flex-col w-[50%] s-m:w-[80%]">
            <div className="flex flex-row pb-10">
              <div className="flex flex-row">
                <img src="/1.svg" className="w-17" />
              </div>
              <div className="flex flex-col ml-4">
                <h2 className="font-bold">The Challenge</h2>
                <p className="">
                  As a council leader, you’re tasked with making informed
                  decisions, often under tight deadlines
                </p>
              </div>
            </div>
            <div className="flex flex-row pb-10">
              <div className="flex flex-row">
                <img src="/2.svg" className="w-16" />
              </div>
              <div className="flex flex-col ml-4">
                <h2 className="font-bold">The Solution</h2>
                <p className="">
                  Our AI solution consolidates your council’s data from multiple
                  sources, providing instant insights and actionable
                  information.
                </p>
              </div>
            </div>

            <div className="flex flex-row pb-10">
              <div className="flex flex-row">
                <img src="/3.svg" className="w-16" />
              </div>
              <div className="flex flex-col ml-4">
                <h2 className="font-bold">The Benefits</h2>
                <p className="">
                  Streamline decision-making, save hours of effort, and foster
                  greater public trust with transparent, accessible
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Local Data Section */}
      <section className="bg-[#F8FAFC] py-12">
  <div className="container mx-auto text-center space-y-10">
    {/* Title Section */}
    <div className="space-y-4">
      <p className="rounded-lg text-white inline-block bg-[#E3ECFE] px-4 py-2">
        EMPOWERING DECISIONS
      </p>
      <h1 className="text-center text-3xl font-bold">
        UNLOCKING{" "}
        <span className="text-[#3a40d8]">COUNCIL'S LOCAL DATA</span>
        <br />
        WITH EASE
      </h1>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-3 gap-6  m-d:grid-cols-2 s-m:grid-cols-1 s-m:place-items-center ">
      {/* Card 1 */}
      <div className="bg-white shadow-md card rounded-lg p-6 flex flex-col items-center text-center space-y-4">
        <div className="">
          
          <img src="ellipse.svg" className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-semibold">Data Centralization</h3>
        <p className="text-gray-600">
          Access a wealth of local government data effortlessly.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md card rounded-lg p-6 flex flex-col items-center text-center space-y-4">
        <div className="">
          {/* Replace with your icon */}
          <img src="/ellipse2.svg" className="w-14 h-14" />
          
          
        </div>
        <h3 className="text-xl font-semibold">Informed Decision-Making</h3>
        <p className="text-gray-600">
          Make decisions backed by reliable local government data.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white  shadow-md card rounded-lg p-6 flex flex-col items-center text-center space-y-4">
        <div className="">
          {/* Replace with your icon */}
          <img src="/ellipse3.svg" className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-semibold">Knowledge Hub</h3>
        <p className="text-gray-600">
          Your go-to source for local government insights.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Get in touch section */}
<section className="  text-white" style={{ transform: "translateY(170px)"}}>
  <div className="flex flex-row justify-evenly container  w-[80%] h-[364px] p-4 rounded-[35px] bg-gradient-to-r from-[#454BE9] to-[#1A419C]">
    {/* Left Section: Title and Description */}
    <div className="space-y-4 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
      <p className="text-base md:text-lg text-white/80">
        We are here to help your council.
      </p>
    </div>

    {/* Right Section: Contact Details */}
    <div className="space-y-10 pt-6">
      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
        <img src="/mail.svg" className=" h-10" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-white/80">ifilenote@gmail.com</p>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
        <img src="/phone.svg" className=" h-10" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Phone Number</h3>
          <p className="text-white/80">+617 457 121 245</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
        <img src="/map.svg" className=" h-10" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Address</h3>
          <p className="text-white/80">
            Boundary Street <br />
            Cooktown, QLD 4895 AU
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* footer section */}

<section className="bg-[#E9EFFE] text-white" >
  <div className="container h-[309px] flex items-end pb-4 justify-between px-6">
    {/* Left Section */}
    <h1 className="text-[#3A40D8] text-3xl font-bold">
      My Council <span className="text-black">AI</span>
    </h1>

    {/* Right Section */}
    <div>
      <p className="text-gray-700">
        © Copyright 2022, All Rights Reserved
      </p>
    </div>
  </div>
</section>



    </>
  );
}
