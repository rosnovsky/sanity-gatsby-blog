import mongoose from 'mongoose'
const Schema = mongoose.Schema

const commentFormat = {
  comment: {
    authorId: { type: String, required: true },
    postId: { type: String, required: true },
    content: { type: String, required: true },
    commentTimestamp: { type: Date, required: true },
    sentiment: { type: Number, default: 50 },
    status: { type: String, default: 'new' },
    likes: { type: Number, default: 0 },
  },
  author: {
    id: { type: String, required: true },
    email_verified: { type: Boolean, required: false },
    family_name: { type: String, required: false },
    given_name: { type: String, required: false },
    name: { type: String, required: false },
    nickname: { type: String, required: false },
    picture: { type: String, required: true },
  },
}

export const CommentSchema = new Schema(commentFormat)
