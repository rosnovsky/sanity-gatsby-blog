import { NowRequest, NowResponse } from '@vercel/node'
import mongoose from 'mongoose'
const Schema = mongoose.Schema
mongoose.set('debug', true)

const CommentSchema = new Schema({
  author: {
    id: String,
    profile: {
      name: String,
      email: String,
    },
    stats: {
      comments: Number,
      pending: Number,
    },
  },
  postId: { type: String, requires: true },
  content: { type: String, required: true },
  commentTimestamp: { type: Date, required: true },
  sentiment: { type: Number, default: 50 },
  status: { type: String, default: 'new' },
  likes: { type: Number, default: 0 },
  savedTimestamp: { type: Date, default: Date.now() },
})

const Comment =
  mongoose.models.Comment || mongoose.model('comments', CommentSchema)

export default async (req: NowRequest, res: NowResponse) => {
  const postId = req.query.postId

  await mongoose.connect(process.env.DB_URL || 'default', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  const comments = await Comment.find({ postId: postId })
  res.status(200).send({ comments: comments })
}
