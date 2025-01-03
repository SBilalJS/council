
import './globals.css';
export default function Home() {
  return (
    <>

      {/* hero section */}
      <section className=" rounded-b-[40px] bg-[#EEF3FF]">
        <div className=" container py-16 flex justify-between m-d:flex-col">
          <div className=" flex flex-col items-start justify-evenly  m-d:w-[100%] w-[52%]">
            <h1 className=" font-manrope font-[800] text-[48px] leading-[70px]">Empowering Local Councils with <span className=" underline text-[#3A40D8]">Smarter Decisions</span>, Faster.</h1>
            <h2 className=" mt-5 text-[#202020] font-inter font-[400] text-[16px] leading-[28px]">Our AI-powered software simplifies data retrieval from disparate sources, providing instant, reliable access to the information councils need. With streamlined tools for decision-making and enhanced public transparency, we help local governments save time, foster accountability, and deliver better outcomes for their communities.</h2>
            <a className=" mt-10 py-[15px] px-[25px] text-[#fff] rounded-[100px] bg-[#3A40D8] font-inter font-[600] text-[16px] leading-[18px] no-underline " href="">
              Get a Demo
            </a>
          </div>
          <div className=" m-d:w-[100%] w-[35%]">
            <img className="w-full object-contain" src="images/hero.png" />
          </div>
        </div>
      </section>

      {/* rate payer section */}
      <section style={{ "transform": "translateY(-50px)" }} className='z-[2]'>
        <div className="container flex justify-center">
          <div style={{ "boxShadow": "0px 4px 36px 0px #00000014" }} className=' bg-white flex flex-col items-center py-9 w-[88%] border-solid rounded-[20px] border-[#EFEFEF] border-[1px]'>
            <h1 className='w-[50%] font-manrope font-[700] text-[26px] leading-[33px] text-center'>Are You a <span className=' text-[#3A40D8]'>Rate Payer</span>? Or a <span className=' text-[#3A40D8]'>Community Advocacy Group</span>?</h1>
            <h2 className=' w-[80%] mt-3 font-inter fony-[400] text-[15px] leading-[23px] text-[#545454] text-center'>Get answers with Al: Ask your Council about policies, budgets, and more. Ensure accountability from Council officers and management. Use Your Council Ai for information to develop your community project.</h2>
          </div>
        </div>
      </section>

      {/* ai knowledge section */}
      <section>
        <div className="container">
          <div className=' w-[50%]'>
            <h1 className=' inline-block text-center font-inter font-[500] text-[14px] leading-[12px] bg-[#E3ECFE]'>
              Empowering local councils
            </h1>
            <h2 className='font'>Your <span className='text-[#3A40D8]'>AI knowledge hub</span> for information</h2>
            <a href="">BOOK A DEMO TODAY <i className="fal fa-arrow-right"></i></a>
            </div>
        </div>
      </section>
    </>
  );
}
