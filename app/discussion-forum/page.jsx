"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PostCard from "../../components/PostCard";
import ReactPaginate from "react-paginate";
import { SubmitPostModal } from "../../components/SubmitPostModal";
import Firebase from "../../lib/firebase";
import { Spinner } from "../../components/Spinner";

const firebase = new Firebase();

export default function DiscussionForum() {
  const router = useRouter();
  const [showPrivacyPrompt, setShowPrivacyPrompt] = useState(true);

  const [posts, setPosts] = useState([]);

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (posts.length == 0) {
      firebase.getPosts().then((posts) => {
        if (posts.length > 0) {
          const sortedPosts = [...posts].sort((a, b) => {
            const dateA = new Date(a.timestamp).getTime();
            const dateB = new Date(b.timestamp).getTime();
            return dateB - dateA;
          });
          setPosts(sortedPosts);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Calculate the number of pages based on the number of posts per page
    const postsPerPage = 10; // Adjust this value as needed
    const pageCount = Math.ceil(posts.length / postsPerPage);
    setPageCount(pageCount);

    // Calculate the start and end indices for the current page
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Get the posts for the current page
    const currentPaginatedPosts = posts.slice(startIndex, endIndex);
    setPaginatedPosts(currentPaginatedPosts);
  }, [currentPage, posts]);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const [showPostModal, setShowPostModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitPost = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPostModal(false);
    }, 2000);
  };
  const handleAcceptPrivacy = () => {
     setShowPrivacyPrompt(false);
    };
  return (
    <div>
    {showPrivacyPrompt && (
        <div className="modal">
        <div className="modal-content">
          <h2>Data Privacy Compliance</h2>
          <p>
            We care about your data and want to ensure that you have control over how it&apos;s used.
          </p>
          <p>
            At this Discussion Forum, we take your privacy seriously, and we are committed to protecting your personal information. Before you engage with our platform, we want to ensure that you understand how we handle your data and your rights regarding your personal information.
          </p>
          <div className="privacy-policy-section">
            <h1>1. Data Collection</h1>
            <p>We do not collect personally identifiable information without your consent.</p>
      
            <h1>2. Data Usage</h1>
            <p>Your data is used to enable you to post, comment, and interact on our platform. Your data may be used to improve our services and enhance your experience of our Discussion Forum.</p>
      
            <h1>3. Data Security</h1>
            <p>Access to your data is restricted to authorized personnel only.</p>
      
            <h1>4. Data Sharing</h1>
            <p>We do not share your data with third parties for marketing purposes. In the interest of maintaining anonymity, we discourage sharing of personally identifiable information in public posts. We may share your data with law enforcement agencies if required by law.</p>
      
            <p>By using the Freedom Wall, you consent to this privacy policy and the processing of your data as described herein. Please take a moment to review this privacy policy carefully. By continuing to use our platform, you acknowledge that you have read and accepted this data privacy compliance notice. If you have any questions or concerns, please contact our support team.</p>
          </div>
          <div className="modal-buttons">
            <button onClick={handleAcceptPrivacy}>Accept</button>
          
          </div>
        </div>
      </div>
      
      )}
      {!showPrivacyPrompt && (
        <div>
    <Parallax pages={2.5}>
      <ParallaxLayer offset={0} speed={0} factor={2.5}>
        <div className="w-full h-full bg-gradient-to-b from-white via-yellow-50 to-yellow-50"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[45%]" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] -rotate-45" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[5%]" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[86%] -rotate-45" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[30%] rotate-180" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] " />
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[57%] -rotate-90" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[100%]" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[10%] rotate-45" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[5%] " />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[90%] " />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[30%] rotate-6" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[85%] rotate-90" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[80%] rotate-180" />
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={-0.6}>
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[14%] -rotate-90" />
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[78%]" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} factor={1 / 2}>
        <div className="flex flex-row gap-4 px-24 py-16">
          <BsArrowLeft
            size={24}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          /></div>
                  <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-montserrat font-bold text-2xl md:text-4xl text-center">
              Discussion Forum
            </h1>
            <h6 className="font-montserrat font-medium text-sm md:text-lg text-black text-center">
              Engage with our community &ndash; whether you&apos;re posting a
              new topic or diving into existing conversations, your voice
              matters here.
            </h6>
          </div>
        
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={-0.25}>
        <SubmitPostModal
          isOpen={showPostModal}
          setter={() => setShowPostModal(false)}
          onSubmit={handleSubmitPost}
          setPosts={setPosts}
          isLoading={isLoading}
        />
    <div className="flex flex-col items-center gap-4 px-8 md:px-24 py-4 md:py-6 md:mt-6">
        <button
              type="button"
              className="w-fit flex bg-[#7163DE] text-white py-4 px-8 justify-center rounded-full font-montserrat text-base font-semibold cursor-pointer mb-4"
              onClick={() => setShowPostModal(true)}
            >
              Submit a Post
            </button></div>
         
            
          

          {isLoading ? (
            <div className="h-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className="w-full flex justify-center flex-wrap gap-4 xl:gap-6 mt-10">
              {paginatedPosts?.map((post, index) => (
                <PostCard
                  key={index}
                  index={index}
                  setPosts={setPosts}
                  post_id={post.post_id}
                  subject={post.subject}
                  timestamp={post.timestamp}
                  message={post.message}
                  comments={post.comments}
                />
              ))}
            </div>
          )}
        
        <div className="flex justify-center items-center mt-10">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            /></div>
      </ParallaxLayer>
    </Parallax></div>)}</div>
  );
}
