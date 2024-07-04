// user's passport schema
import { Schema, Types, model } from 'mongoose';
import { IPassport } from '@/types/models';

const passportSchema = new Schema<IPassport>(
    {
        number: String,
        user_id: {
            type: Types.ObjectId,
            ref: "User"
        },
        expirationDate: Date,
        nationality: String,
  },
  { timestamps: true }
);

const Passport = model<IPassport>('Passport', passportSchema, 'passports');

export default Passport;