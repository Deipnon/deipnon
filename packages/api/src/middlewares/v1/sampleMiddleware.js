const sampleMiddleware = (req, res, next) => {
    console.log("hello middleware")
  next()
}

export default sampleMiddleware
