import app from "./app";
import connectDB from "./db";
const PORT = process.env.PORT || 5000;





app.listen(PORT, async () => {
  await connectDB();
  console.log(`Listening on http://localhost:${PORT}`);
});
