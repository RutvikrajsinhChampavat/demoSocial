import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    sUserName: { type: String, default: '', required: true, unique: true },
    sName: { type: String, default: '' },
    sEmail: { type: String, default: '', required: true, unique: true },
    sMobile: { type: String, default: '' },
    sPassword: { type: String, default: '', required: true },
    sAvatar: { type: String, default: '' },
    sToken: { type: String, default: '' },
    eGender: {
      type: String,
      enum: ['male', 'female', 'other', 'unspecified'],
      default: 'unspecified',
    },
    sBio: { type: String },
    eStatus: {
      type: String,
      enum: ['active', 'pending', 'inactive', 'deleted'],
      default: 'pending',
    },
    dBirthDate: { type: Date },
    confirmationCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: { createdAt: 'dCreatedDate', updatedAt: 'dUpdatedDate' } },
);

export default mongoose.model('User', User);
