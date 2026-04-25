const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json([
    {
      created_at: "2026-04-01",
      merged_at: "2026-04-03",
      deploy_date: "2026-04-04",
      bugs: 2
    },
    {
      created_at: "2026-04-05",
      merged_at: "2026-04-06",
      deploy_date: "2026-04-07",
      bugs: 1
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});