import { model, models, Schema } from "mongoose";

export interface IAccount {
  userId: string;
  name: string;
  image: string;
  authenticationMethod: string;
  providerAccountId: string;
}

const AccountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    password: { type: String, required: false },
    authenticationMethod: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Account = models?.account || model<IAccount>("Account", AccountSchema);
export default Account;
