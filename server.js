import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoute.js";

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/todo", todoRouter);

// Global error handler
app.use((err, req, res, next) => {
      console.error("error")
      res.status(500).json({message: 'Something went wrong'})
})
app.use((req, res) => res.status(404).send('Not found'));
app.listen (5000, () => console.log("listen to port 5000"));

