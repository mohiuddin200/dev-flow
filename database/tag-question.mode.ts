import { model, models, Schema } from "mongoose";

export interface ITagQuestion {
  tag: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
}

const TagQuestionSchema = new Schema(
  {
    tag: { type: Schema.ObjectId, ref: "Tag", required: true },
    question: { type: Schema.ObjectId, ref: "Question", required: true },
  },
  {
    timestamps: true,
  }
);

const TagQuestion =
  models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);
export default TagQuestion;
