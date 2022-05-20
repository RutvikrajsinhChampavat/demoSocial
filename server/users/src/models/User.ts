import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    sUserName: { type: String, default: '' }, // unique field
    sName: { type: String, default: '' },
    sEmail: { type: String, default: '' },
    sMobile: { type: String, default: '' },
    sPassword: { type: String, default: '' },
    sAvatar: { type: String, default: '' },
    sToken: { type: String, default: '' },
    eGender: {
      type: String,
      enum: ['male', 'female', 'other', 'unspecified'],
    },
    sBio: { type: String },
    eStatus: {
      type: String,
      enum: ['y', 'n', 'd'],
      default: 'y',
    },
    dBirthDate: { type: Date },
  },
  { timestamps: { createdAt: 'dCreatedDate', updatedAt: 'dUpdatedDate' } },
);

export default mongoose.model('User', User);
