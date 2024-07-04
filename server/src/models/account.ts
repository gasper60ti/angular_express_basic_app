// user's passport schema
import { Schema, Types, model } from 'mongoose';
import { IAccount } from '@/types/models';

const accountSchema = new Schema<IAccount>(
    {
        user_id: {
            type: Types.ObjectId,
            ref: "User"
        },
        accountNumber: String,
        balance: Number
  },
  { timestamps: true }
);

const Account = model<IAccount>('Account', accountSchema, 'account');

export default Account;