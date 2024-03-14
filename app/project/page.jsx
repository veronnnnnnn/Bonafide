"use client";

import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { Carousel } from "@material-tailwind/react";
import { BsChevronDown, BsChevronLeft, BsChevronUp} from "react-icons/bs"
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function Project() {
  const parallax = useRef();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0); // Assuming the initial page is 1

  const handleIncrement = () => {
    if (currentPage < 13) {
      setCurrentPage((prevPage) => prevPage + 1);
      parallax.current.scrollTo(currentPage + 1); // Adjust this line based on how you need to handle the scrolling
    }
  };

  const handleDecrement = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
      parallax.current.scrollTo(currentPage - 1); // Adjust this line based on how you need to handle the scrolling
    }
  };

  return (
    <div className="w-full h-full top-0 left-0 ">
      
      
      {/* 1st section */}
      <Parallax ref={parallax} pages={13}>
      <ParallaxLayer
    offset={0}
    speed={-1}
    style={{
      position: "absolute",
      zIndex: "10",
      marginLeft: "5%",
      marginTop: "5%", 
    }}
  >
    <BsChevronLeft
      size={50}
      className="text-black rounded-full bg-white p-4 cursor-pointer"
      onClick={() => router.push("/")}

    />
  </ParallaxLayer>


       <ParallaxLayer
          offset={0.89}
          speed={-1}
          style={{ position: "absolute", zIndex: "150", marginLeft: "95%", cursor: "pointer"}}
          onClick={handleDecrement}
        >
          <BsChevronUp  size={50} className="text-black rounded-full bg-white p-4"/>
          
       </ParallaxLayer>
       <ParallaxLayer
          offset={0.89}
          speed={-1}
          style={{ position: "absolute", zIndex: "100", marginLeft: "90%", cursor: "pointer"}}
          onClick={handleIncrement}
          
        >
          <BsChevronDown  size={50} className="text-black rounded-full bg-white p-4"/>
          
       </ParallaxLayer> 
      {/* <ParallaxLayer
          offset={0.89}
          speed={-1}
          factor={6}
          style={{ position: "absolute", zIndex: "40", marginLeft: "95%", cursor: "pointer"}}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <BsChevronUp  size={50} className="text-black rounded-full bg-white p-4"/>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={13}
          style={{
            backgroundImage:
              "url(/assets/star.png), linear-gradient(#2b1055, #7597de)",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        />
        <ParallaxLayer offset={0} speed={-0.7} factor={1}>
        <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-8xl text-center text-white py-8 md:py-12 lg:py-16" style={{ marginTop: "50px" }}>
            Move Katropa
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
  offset={0}
  speed={1}
  style={{
    backgroundImage: "url(/assets/dd.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    minHeight: "200px", backgroundPosition: "bottom"
  }}
/>

<ParallaxLayer
  offset={0}
  speed={0.3}
  style={{
    backgroundImage: "url(/assets/b2.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    minHeight: "200px", backgroundPosition: "bottom"
  }}
/>
        {/* 5th section */}
        <ParallaxLayer
          offset={7.2}
          speed={-0.1}
          
          
          style={{
            padding: "96px",
            textAlign: "center",
          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pt-4" style={{ marginTop: '500px' }}>
    We can promote healthy coping mechanisms toward fostering a supportive environment.
</h1>

          </ParallaxLayer>
          <ParallaxLayer
          offset={11}
          speed={0.1}
          factor={1}
          style={{
            padding: "96px",
            textAlign: "center",
          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pt-4">
            Together Let us break down the gender-based barriers{" "}
          </h1>
        
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          speed={0.1}
          style={{ backgroundImage: "url(/assets/hn3.png)", backgroundSize: "50%",
          backgroundPosition: "left", marginTop: "50px"}}
          
        />
        
<ParallaxLayer
  offset={11}
  speed={-0.1}
  style={{ backgroundImage: "url(/assets/hn1.png)", backgroundSize:"50%",
  backgroundPosition: "right", }}/>

        <ParallaxLayer
          offset={9}
          speed={0}
          style={{backgroundColor: "#7597de"}}
        />
        <ParallaxLayer
          offset={9}
          speed={-0.1}
          className="z-40"
          style={{
            padding: "96px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           <h1 className="font-montserrat font-extrabold text-3xl text-white pb-4 text-center">
          By amplifying the voices of male advocates for gender equality, we can create a more inclusive dialogue that addresses the unique challenges faced by men.          </h1>
          <Carousel loop={true} autoplay={true} className="">
          <div className="w-full h-full bg-[url('/assets/c1.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
          <div className="w-full h-full bg-[url('/assets/c2.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a1.png')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a2.png')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a3.png')] bg-contain bg-no-repeat bg-bottom"></div>
          </Carousel>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0.8} 
style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className="w-[100%] h-[100%] bg-[url('/assets/umb1.png')] bg-no-repeat bg-center" />
</ParallaxLayer>

        {/* 4th section */}
        
<ParallaxLayer
  offset={7}
  speed={-0.2}
  
  style={{
    padding: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Set the flex direction to column
    textAlign: "center",
    
  }}
>
  <h1 className="font-montserrat font-extrabold text-4xl text-white pt-4">
    SAFE SPACE
  </h1>

</ParallaxLayer>
<ParallaxLayer offset={8} speed={0} />
<ParallaxLayer
  offset={8.1}
  speed={-0.1}
  style={{
    padding: '96px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Set the flex direction to column
    position: 'relative', // Set position to relative to allow for positioning of elements
  }}
  
> <div
    style={{
      position: 'absolute',
      width: '100vw', // Set width to 100vw for full viewport width
      height: '100vh', // Set height to 100vh for full viewport height
      top: 0,
      left: 0,
      zIndex: -1, // Set a negative z-index to place it behind other elements
      overflow: 'hidden', // Hide overflowing content
    }}
  >
    
    <video autoPlay loop muted style={{ width: '100%', height: '80%', objectFit: 'cover' }}>
      <source src="/assets/vid3.mp4" type="video/mp4" />
    </video> 
  </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
  <h1
    className="font-montserrat font-extrabold text-3xl text-white pb-4"
    style={{
      textAlign: 'center',
      marginTop: '300px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.4)', // Add a shadow effect to the text
    }}
  >
    Gender inequality in the Philippines has been a serious and complicated problem in the country.
  </h1></div></ParallaxLayer>
        
        {/* 3rd section */}
        <ParallaxLayer
          offset={6}
          speed={0}
        />
        <ParallaxLayer
          offset={6}
          speed={-0.1}
          style={{
            padding: "96px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column", // Set the flex direction to column

          }}
        >  
        
  
  </ParallaxLayer>
  <ParallaxLayer offset={6} speed={0.8}>
          <div className="w-[80%] h-[80%] bg-[url('/assets/text.png')] bg-contain bg-no-repeat bg-center opacity-100 ml-[10%]" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0}
        />
        <ParallaxLayer
          offset={5}
          speed={-0.09}
          style={{
            padding: "96px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column", // Set the flex direction to column

          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pb-4 mt-5">
          Men often face social pressure to uphold typical notions of masculinity          </h1>       
          <Image
                src={"/assets/sad.png"}
                width={500}
                height={500}
                alt=""
                
              // Adjust the style according to your requirements
/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.8}>
          <div className="w-[20%] h-[20%] bg-[url('/assets/sad.png')] bg-contain bg-no-repeat opacity-10 block ml-[70%] " />
          <div className="w-[20%] h-[20%] bg-[url('/assets/sad.png')] bg-contain bg-no-repeat opacity-20 block ml-[50%] " />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.8}>
          <div className="w-[20%] h-[20%] bg-[url('/assets/sad.png')] bg-contain bg-no-repeat opacity-10 block ml-[20%]" />
          <div className="w-[20%] h-[20%] bg-[url('/assets/sad.png')] bg-contain bg-no-repeat opacity-20 block ml-[10%]" />
        </ParallaxLayer>
      
          {/* 2nd section */}
          <ParallaxLayer
          offset={0.999}
          speed={1}
          style={{
            backgroundColor: "#1c0522",
            padding: "5%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "200px",
          }}
        >
         <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl text-white pb-2 md:pb-4">
            The CVSU Move Katropa
          </h1>
          <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white">
            In a patriarchal society, where men dominate and rule our community,
            violence and abuses against women and girls are rampant. Undeniably,
            the masculinity ideology as part of our people&apos;s attitude may
            cause gender-based violence and other practices of gender
            discrimination. In these changing times, it is necessary to use the
            power of men and boys in ending different forms of violence and
            criminalities. <br></br>
            <br></br> In the Philippines, the violence against women may be one
            of the first crimes against a person because of their gender.
            Despite of the government initiatives and efforts to stop all forms
            of violence against women, reported cases of VAW is still
            increasing. Likewise, gender-based violence remains pervasive
            despite of the passage of laws and policies such as RA 9262:
            (Anti-Violence Against and Women and Children Law), RA 9710 (Magna
            Carta of Women), the amended RA 8353 (Anti Rape Law), RA 7877
            (Anti-Sexual Harassment Act) and the recent RA 11313 (Safe Spaces
            Law). <br></br>
            <br></br> In the 2017 report of the National Demographic Health
            Survey (NDHS), one (1) in four (4) married women aged 15 to 49 have
            experienced spousal violence (this act includes physical, sexual, or
            emotional violence) by their most recent and or current partners.
            The report also shows the only one of three women who experience
            sexual and physical abuses asked help, the most common source of
            assistance was not directed to the law enforcing authorities but
            with victim&apos;s own family (65%) and trusted friends (18%). In
            these reported cases, 41% of victims never sought help or even told
            to anyone. Moreover, 11% of women justified that a husband is
            beating his spouse for any of these causes: neglects children, going
            out without husband&apos;s permission, argues with him, burns food,
            and refusal to have sex
          </p>
        </ParallaxLayer>

        
        <ParallaxLayer
  offset={1} // Adjust the offset as needed
  speed={0.5} // Adjust the speed as needed
  style={{
    padding: "5%", // Adjust the padding as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Set the flex direction to column
    backgroundColor: "#2b1055",
  }}
>
  <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl text-white pb-2 md:pb-4">
  61 New Move Advocates Join the Movement for Gender and Development!   </h1>
  <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white text-center">
  In a momentous stride towards gender equality, the Commission on Filipinos Overseas and Gad Cvsu 
  (Gender and Development- Resource Center) have welcomed 61 passionate advocates to the cause. 
  This incredible opportunity marks a significant achievement in the GAD (Gender and Development) journey.  </p>

  <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
    <Image
      src="/assets/event2.jpg"
      alt="Image 1"
      width={500} // Set the desired width here
      height={500} // Set the desired height here
      style={{ marginRight: '8px' }}/>
    <Image
      src="/assets/event1.jpg"
      alt="Image 2"
      width={540} // Set the desired width here
      height={600} // Set the desired height here
      style={{ marginLeft: '8px'}}/>
  </div>

</ParallaxLayer>

<ParallaxLayer
  offset={2} // Adjust the offset as needed
  speed={0.5} // Adjust the speed as needed
  className="z-40"
  style={{
    padding: "5%", // Adjust the padding as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Set the flex direction to column
    backgroundColor: "#4A133F",
  }}
>
  <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl text-white pb-2 md:pb-4">
  LGU Bagong Trece Launches MOVE KATROPA Advocacy!    </h1>
  <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white text-center">
  In a groundbreaking move towards gender inclusivity, LGU Bagong Trece (Trece Martires City) 
  has officially established MOVE KATROPA, a transformative initiative aimed at fostering Gender and Development (GAD) 
  integration across all municipal services and programs.
  Witness the recently elected officers and Technical Working Group (TWG)
   of MOVE KATROPA, led by the dynamic Vice Mayor Bobby Montehermoso. 
   We also extend our warm congratulations to the industrious Mayor Gemma Buendia Lubigan. </p>

   <Carousel loop={true} autoplay={true} className="" style={{ marginTop: '50px' }}>
            <div className="w-full h-full bg-[url('/assets/e1.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/e2.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/e3.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/e4.jpg')] bg-contain bg-no-repeat bg-bottom"></div>

          </Carousel>

</ParallaxLayer>

<ParallaxLayer
  offset={3} // Adjust the offset as needed
  speed={0.5} // Adjust the speed as needed
  style={{
    padding: "5%", // Adjust the padding as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Set the flex direction to column
    backgroundColor: "#8D3A73",
  }}
>
  <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl text-white pb-2 md:pb-4">
  Exciting News from Diverse Government Agencies    </h1>
  <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white text-center">
  Yesterday&apos;s validation team for MOVE Training Modules welcomed a dedicated participant into their esteemed ranks. 
  Mr. King David Agreda immersed in the company of conscientious men, stands poised to champion the cause of establishing a 
  violence-free community for all. Heartfelt gratitude extends to the Philippine Commission on Women for providing 
  this invaluable opportunity to engage with MOVE Philippine representatives.
  Appreciation is also extended to Cavite State University and GAD-RC for their unwavering support in advancing the causes of GAD 
  (Gender and Development) and GEDSI (Gender Equality and Social Inclusion). Their steadfast commitment is a testament to the shared advocacy for positive change.</p>

  <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
    <Image
      src="/assets/e5.jpg"
      alt="Image 1"
      width={500} // Set the desired width here
  height={500} // Set the desired height here
  style={{ marginLeft: '8px', maxWidth: '40%', width: '100%', height: 'auto' }} // Adjust the marginRight and width as needed
    />
    <Image
      src="/assets/e6.jpg"
      width={500} // Set the desired width here
  height={500} // Set the desired height here
  style={{ marginLeft: '8px', maxWidth: '40%', width: '100%', height: 'auto' }} // Adjust the marginLeft and width as needed
    />
  </div>

</ParallaxLayer>

<ParallaxLayer
  offset={4} // Adjust the offset as needed
  speed={0.5} // Adjust the speed as needed
  className="z-40"
  style={{
    padding: "5%", // Adjust the padding as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Set the flex direction to column
    backgroundColor: "#2b1055",
  }}
>    <Carousel loop={true} autoplay={true} className="" style={{ marginTop: '50px' }}>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content for the first slide */}
        <div>
          <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl text-white pb-2 md:pb-4">
            The Tourism Infrastructure and Enterprise Zone Authority of the Philippines (TIEZA) extends gratitude to the distinguished Resource Speaker for their pivotal role in the Gender Sensitivity Orientation for Men and the MOVE & KATROPA Advocacy Orientation.
          </h1>
          <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white text-left">
            A hearty congratulations resonates with the newly inducted MOVE & KATROPA members, marking a significant step towards their commitment to the causes of GAD, MOVE, KATROPA, and Advocacy. Anticipate an upcoming collaboration as TIEZA looks forward to fostering a partnership with CvSU. Stay tuned for more exciting developments!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Images for the first slide */}
          <Image
            src="/assets/e7.jpg"
            alt="Image 1"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
          <Image
            src="/assets/e8.jpg"
            alt="Image 2"
            width={300} // Adjust the width as needed
            height={200} // Adjust the height as needed
          />
          <Image
            src="/assets/e9.jpg"
            alt="Image 3"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
          <Image
            src="/assets/e10.jpg"
            alt="Image 4"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
        </div>
</div></div>    
    

    {/* Additional Carousel items can be added here */}
     <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Images for the first slide */}
          <Image
            src="/assets/cvsu1.jpg"
            alt="Image 1"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
          <Image
            src="/assets/cvsu2.jpg"
            alt="Image 2"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
          <Image
            src="/assets/cvsu3.jpg"
            alt="Image 3"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
          <Image
            src="/assets/cvsu4.jpg"
            alt="Image 4"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
          /></div>
        {/* Content for the first slide */}
        <div>
        <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white text-left">
          In a dedicated effort to address gender-related issues, CvSU MOVE KATROPA, in collaboration with the Campus Extension Services Office, recently organized an orientation session on Men Opposed to Violence Against Women Everywhere (MOVE) and Kalalakihang Tapat sa Responsibilidad at Obligasyon sa Pamilya (KATROPA) on February 8, 2023, at the campus AVR. This insightful event witnessed the active participation of faculty and staff members from the campus.
          </p><br></br>
          <p className="font-montserrat font-normal text-sm md:text-base lg:text-xl text-white text-left">
          Prof. Janine B. Bacosmo, extending a warm welcome to the participants, provided an overview of the program and underscored the individual duties and responsibilities of the attendees. Additionally, she emphasized the program&apos;s expectations and highlighted its significance in the context of extension efforts.

The event featured Prof. Maria Andrea C. Francia, Chair of the Department of Management, introducing Prof. King David J. Agreda as the esteemed resource speaker, adding further expertise and insights to the orientation.
          </p>
        </div>
        
        </div></div>
      
    
  </Carousel>
</ParallaxLayer>

        {/* Footer */}
        <ParallaxLayer
  offset={12}
  speed={0.1}
  factor={1}
  style={{
    padding: "96px",
    textAlign: "center",
    zIndex: 100, // Make sure the z-index is high enough to bring the element to the front
  }}
>
<h1 className="font-montserrat font-extrabold text-3xl text-white pt-4">
    Join the Move Katropa Community and show your support!
  </h1>
  <h2 className="font-montserrat font-extrabold text-3xl text-white pt-4">
    Visit our{" "}
    <a
      href="https://www.facebook.com/CvSUGADResourceCenter"
      style={{ textDecoration: "underline", color: "white", cursor: "pointer" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>{" "}
    page for more information.
  </h2>

</ParallaxLayer>
        
<ParallaxLayer
  offset={12}
  speed={1}
  style={{
    backgroundImage: "url(/assets/dd.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    minHeight: "200px", backgroundPosition: "bottom"
  }}
/>
</Parallax>
    </div>
  );
}
