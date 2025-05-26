import { model, models, Schema, Types } from "mongoose";

export interface IVote {
  author: Types.ObjectId;
  contentId: Types.ObjectId;
  contentType: "question" | "answer";
  voteType: "upvote" | "downvote";
  createdAt?: Date;
  updatedAt?: Date;
}

const VoteSchema = new Schema<IVote>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    contentId: { type: Schema.Types.ObjectId, required: true },
    contentType: { type: String, enum: ["question", "answer"], required: true },
    voteType: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  {
    timestamps: true,
  }
);

const Vote = models?.vote || model<IVote>("Vote", VoteSchema);
export default Vote;
