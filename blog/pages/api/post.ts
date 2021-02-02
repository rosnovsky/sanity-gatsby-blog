// import { NowRequest, NowResponse } from '@vercel/node'
import mongoose from 'mongoose'
import auth from '../../utils/auth'
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

const UserSchema = new Schema({
  id: String,
  profile: {
    type: Object,
  },
  stats: { type: Object },
  lastUpdated: { type: Date, default: Date.now() },
})

const Comment =
  mongoose.models.Comment || mongoose.model('comments', CommentSchema)
const User = mongoose.models.User || mongoose.model('users', UserSchema)
export default async (req: any, res: any) => {
  try {
    const session = await auth.getSession(req)
    const tokenCache = auth.tokenCache(req, res)
    const { accessToken } = await tokenCache.getAccessToken({
      scopes: ['post:comments'],
    })
    if (!accessToken) {
      throw new Error('Insufficient scope')
    }
  } catch (error) {
    console.error(error)
    res.status(error.status || 403).end(error.message)
    return
  }
  const body = JSON.parse(req.body)

  await mongoose.connect(process.env.DB_URL || 'default', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  const user = User.findOne({ id: body.author.id })
  const update = {
    $inc: { 'stats.comments': 1, 'stats.pending': 1 },
    lastUpdated: Date.now(),
  }
  await user.updateOne(update)
  const updatedDoc = await User.findOne({ id: body.author.id })

  const NewComment = new Comment({
    author: updatedDoc,
    content: body.content,
    commentTimestamp: body.meta.timestamp,
    postId: body.meta.postId,
    status: 'new',
    likes: 0,
  })

  NewComment.save({ checkKeys: false }, (err) => {
    if (err) return console.error(err)
  })

  res.status(200).send({ comment: NewComment, user: updatedDoc })
}
