import { PostComment } from "./Comment";

export type Post = {
  post_id: string;
  subject: string;
  message: string;
  timestamp: string;
  comments: PostComment[];
};
