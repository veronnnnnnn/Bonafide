import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Spinner } from "./Spinner";
import Firebase from "../lib/firebase";
import { Post } from "../types/Post";

const firebase = new Firebase();

export function SubmitPostModal({ isOpen, setter, setPosts }: any) {
  const [isLoading, setIsLoading] = useState(false);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    if (subject.length == 0 || message.length == 0) {
      alert("Please fill out all fields.");
      return;
    }
    setIsLoading(true);
    try {
      const newPost: Post = {
        post_id: "",
        subject: subject,
        message: message,
        timestamp: new Date().toLocaleString(),
        comments: [],
      };
      await firebase.createPost(newPost);
      const posts = await firebase.getPosts();
      const sortedPosts = [...posts].sort((a: any, b: any) => {
        const dateA = new Date(a.timestamp).getTime();
        const dateB = new Date(b.timestamp).getTime();
        return dateB - dateA;
      });
      setPosts(sortedPosts);

      setIsLoading(false);
      setter(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={isOpen} handler={setter}>
        <DialogHeader className="justify-between">
          <Typography
            variant="h6"
            color="black"
            className="font-montserrat font-semibold"
          >
            Submit a Post
          </Typography>
          <IconButton
            color="indigo"
            size="sm"
            variant="text"
            onClick={() => setter(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody divider>
        <p className="text-[#F2184E]">
      Use no language that is offensive to others or could be interpreted as such!
      </p>
          <div className="grid gap-6">
            <Input
              label="Subject"
              className="font-montserrat font-medium"
              crossOrigin={undefined}
              color="indigo"
              maxLength={50}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Textarea
              label="Message"
              color="indigo"
              className="font-montserrat font-medium"
              maxLength={150}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p>
        {message.length}/150 characters
      </p>
    
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setter(false)}
            className="mr-1 font-montserrat text-base"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-[#7163DE] font-montserrat text-base flex flex-row gap-1 items-center"
            onClick={onSubmit}
          >
            {isLoading ? (
              <>
                <Spinner />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
