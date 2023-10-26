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
    if (currentPage < 7) {
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
      <Parallax ref={parallax} pages={8}>
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
          style={{ position: "absolute", zIndex: "100", marginLeft: "92%", cursor: "pointer"}}
          onClick={handleIncrement}
          
        >
          <BsChevronDown  size={50} className="text-black rounded-full bg-white p-4"/>
          
       </ParallaxLayer> 
      <ParallaxLayer
          offset={0.89}
          speed={-1}
          factor={6}
          style={{ position: "absolute", zIndex: "40", marginLeft: "95%", cursor: "pointer"}}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <BsChevronUp  size={50} className="text-black rounded-full bg-white p-4"/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={8}
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
          offset={4}
          speed={0}
          factor={1/2}
          
          style={{
            padding: "96px",
            textAlign: "center",
          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pt-4" style={{ marginTop: '650px' }}>
    We can promote healthy coping mechanisms toward fostering a supportive environment.
</h1>

          </ParallaxLayer>
          <ParallaxLayer
          offset={6}
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
          offset={6}
          speed={0.1}
          style={{ backgroundImage: "url(/assets/hn3.png)", backgroundSize: "50%",
          backgroundPosition: "left", marginTop: "50px"}}
          
        />
        
<ParallaxLayer
  offset={6}
  speed={-0.1}
  style={{ backgroundImage: "url(/assets/hn1.png)", backgroundSize:"50%",
  backgroundPosition: "right", }}/>

        <ParallaxLayer
          offset={5}
          speed={0}
          style={{backgroundColor: "#7597de"}}
        />
        <ParallaxLayer
          offset={5}
          speed={-0.1}
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
            <div className="w-full h-full bg-[url('/assets/a1.png')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a2.png')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a3.png')] bg-contain bg-no-repeat bg-bottom"></div>
          </Carousel>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.8} 
style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className="w-[100%] h-[100%] bg-[url('/assets/umb1.png')] bg-no-repeat bg-center" />
</ParallaxLayer>

        {/* 4th section */}
        
<ParallaxLayer
  offset={4}
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
<ParallaxLayer offset={3} speed={0} />
<ParallaxLayer
  offset={3.1}
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
      marginTop: '400px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.4)', // Add a shadow effect to the text
    }}
  >
    Gender inequality in the Philippines has been a serious and complicated problem in the country.
  </h1></div></ParallaxLayer>
        
        {/* 3rd section */}
        <ParallaxLayer
          offset={2}
          speed={0}
        />
        <ParallaxLayer
          offset={2}
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
  <ParallaxLayer offset={2} speed={0.8}>
          <div className="w-[80%] h-[80%] bg-[url('/assets/text.png')] bg-contain bg-no-repeat bg-center opacity-100 ml-[10%]" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
        />
        <ParallaxLayer
          offset={1}
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
        <ParallaxLayer offset={1.8} speed={0.8}>
          <div className="w-[20%] h-[20%] bg-[url('/assets/sad.png')] bg-contain bg-no-repeat opacity-10 block ml-[70%] " />
          <div className="w-[20%] h-[20%] bg-[url('/assets/sad.png')] bg-contain bg-no-repeat opacity-20 block ml-[50%] " />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.8}>
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
        {/* Footer */}
        <ParallaxLayer
  offset={7.1}
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
  offset={7}
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
