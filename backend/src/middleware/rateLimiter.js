import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // just keeping it simple
    // all the users here will get rate limited, in real world you need to implement userId or something instead of "my-rate-limit" to get success or failure.
    const { success } = await rateLimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too Many Requests, try again later...",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    next(error);
  }
};

export default rateLimiter;
