import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db=new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "To_do",
  password: "sangmesh",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  try{
    const result=await db.query("select *from items order by id asc")
    items=result.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });

  }
  catch(err){
    console.log(err);
  }
  
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  //items.push({ title: item });
  try{
    const s=await db.query("insert into items(title) values ($1)",[item])
    res.redirect("/");

  }
  catch(err){
    console.log(err);
  }
 
});

app.post("/edit",async (req, res) => {
  const t=req.body.updatedItemTitle;
  const i=req.body.updatedItemId;
  try{
    await db.query("update items set title=($1) WHERE id = $2 ",[t,i])
    res.redirect("/");

  }
  catch(err){
    console.log(err);
  }

});

app.post("/delete", async (req, res) => {
  const id=req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");

  }
  catch(err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
