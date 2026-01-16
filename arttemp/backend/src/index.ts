import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';


const app = express();
app.use(cors());


app.listen(5000, () => {
  console.log("Server is running on port 5000");

});

app.get("/api/data", async (req : Request, res: Response) => { 
  try {
    const baseURL= process.env.API_URL;
    if (!baseURL) {
      throw new Error("API_URL is not defined");
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 100;
    const url = new URL(baseURL);

    if (!url){
      throw new Error("API_URL is not defined");
    }
    const response = await fetch(url  );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    res.json({
      data: data.data,
      total: data.pagination.total,
      page: data.pagination.current_page,
      limit
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
