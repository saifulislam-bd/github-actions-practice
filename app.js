import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/health", (_req, res) => {
  res.json({ Status: "OK" });
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

export default app;
