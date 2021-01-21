const dbURI = process.env.MONGODB_URI || 'mongodb+srv://user123:user@cluster0.qlsht.mongodb.net/the-beans?retryWrites=true&w=majority'
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'shhhhitsasecret'

module.exports = {
  dbURI,
  port,
  secret
}