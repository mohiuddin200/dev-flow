import { model, models, Schema } from "mongoose";

export interface IInteraction {
  author: Schema.Types.ObjectId;
  actionType: "question" | "answer";
  actionId: Schema.Types.ObjectId;
}

const InteractionSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actionType: { type: String, enum: ["question", "answer"], required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Interaction =
  models?.interaction || model<IInteraction>("Interaction", InteractionSchema);
export default Interaction;
