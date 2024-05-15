// import express from "express";
// import mysql from "mysql";
// // const express = require("express");
// // const mysql = require("mysql")

// const app = express();

// const db = mysql.createConnection({
//   host: "srv984.hstgr.io",
//   user: "u256808147_nixon",
//   password: "Volvo@0987",
//   database: "u256808147_test",
// });

// app.get("/", (req, res) => {
//   res.json("hello this is the backend");
// });

// app.get("/data",(req,res)=>{
//     const q = "SELECT * FROM referencevaluea"
//     db.query(q,(err,data)=>{
// if (err) return res.json(err)
//     return res.json(data)
//     })
// })

// const PORT = 7777;
// const HOST = "localhost";

// app.listen(PORT, HOST, (err) => {
//   if (err) {
//     console.error(`Error starting server: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Connected to backend on ${HOST}:${PORT}!`);
// });

// import express from 'express';
// import routes from './routes.js'; // Corrected import

// const app = express();
// const PORT = 7777;
// const HOST = 'localhost';

// app.use('/', routes);

// app.listen(PORT, HOST, (err) => {
//   if (err) {
//     console.error(`Error starting server: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Connected to backend on ${HOST}:${PORT}!`);
// });

// import express from "express";
// import mysql from "mysql";

// const app = express();

// const db = mysql.createConnection({
//   host: "89.117.27.103",
//   user: "u256808147_nixon",
//   password: "Volvo@0987",
//   database: "u256808147_test",
// });

// // Add error event handler
// db.on('error', (err) => {
//   console.error('Error in the database connection:', err);
// });

// app.get("/", (req, res) => {
//   res.json("hello this is the backend");
// });

// app.get("/data", (req, res) => {
//   const q = "SELECT * FROM referencevaluea";
//   db.query(q, (err, data) => {
//     if (err) {
//       console.error('Error running query:', err);
//       return res.status(500).json({ message: 'Error running query' });
//     }
//     return res.json(data);
//   });
// });

// const PORT = 7777;
// const HOST = "localhost";

// app.listen(PORT, HOST, (err) => {
//   if (err) {
//     console.error(`Error starting server: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Connected to backend on ${HOST}:${PORT}!`);
// });

// import express from "express";
// import mysql from "mysql";

// const app = express();

// let retryCount = 0;
// const maxRetries = 5;
// const retryDelay = 1000; // 1 second

// const db = mysql.createConnection({
//   host: "89.117.27.103",
//   user: "u256808147_nixon",
//   password: "Volvo@0987",
//   database: "u256808147_test",
// });

// function connectToDatabase() {
//   db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       if (retryCount < maxRetries) {
//         retryCount++;
//         console.log(`Retrying connection in ${retryDelay}ms...`);
//         setTimeout(connectToDatabase, retryDelay);
//       } else {
//         console.error('Failed to connect to the database after max retries.');
//       }
//     } else {
//       console.log('Connected to the database!');
//       retryCount = 0;
//     }
//   });
// }

// connectToDatabase();

// db.on('error', (err) => {
//   if (err.code === 'ECONNRESET') {
//     console.error('Database connection lost. Reconnecting...');
//     connectToDatabase();
//   } else {
//     console.error('Error in the database connection:', err);
//   }
// });

// app.get("/", (req, res) => {
//   res.json("hello this is the backend");
// });

// app.get("/data", (req, res) => {
//   const q = "SELECT * FROM referencevaluea";
//   db.query(q, (err, data) => {
//     if (err) {
//       console.error('Error running query:', err);
//       return res.status(500).json({ message: 'Error running query' });
//     }
//     return res.json(data);
//   });
// });

// const PORT = 7777;
// const HOST = "localhost";

// app.listen(PORT, HOST, (err) => {
//   if (err) {
//     console.error(`Error starting server: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Connected to backend on ${HOST}:${PORT}!`);
// });

// import express from "express";
// import mysql from "mysql";

// const app = express();

// const db = mysql.createConnection({
//   host: "server",
//   user: "root",
//   password: "SpuAF&2X@jM=",
//   database: "branfortunedbnew",
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     process.exit(1);
//   }
//   console.log('Connected to database!');
// });

// app.get("/", (req, res) => {
//   res.json("hello this is the backend");
// });

// app.get("/data", (req, res) => {
//   const query = "SELECT * FROM branfortunedbnew.vendor_audit";
//   db.query(query, (err, data) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//     return res.json(data);
//   });
// });

// const PORT = 7777;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "99JONf8#",
  database: "test",
});

app.use(express.json());
app.use(cors())

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    process.exit(1);
  }
  console.log("Connected to database!");
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/users", (req, res) => {
  const query = "SELECT * FROM test.user";
  db.query(query, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
});

app.post("/users", (req, res) => {
  const q = "INSERT INTO `test`.`user` ( `id`, `title`, `desc`, `cover`) VALUES (?, ?, ?, ?)";
  const values = [req.body.id, req.body.title, req.body.desc, req.body.cover];
  db.query(q,values, (err, data) => {
    if (err) return res.json(err);
    return res.json("data");
  });
});

app.delete("/users/:id",(req,res)=>{
    const bookID = req.params.id;
    const q = "DELETE FROM `test`.`user` WHERE `id` = ?";
    db.query(q,bookID,(err,data)=>{
      if(err) return res.json(err);
      return res.json("book has been deleted successfully");
    })
})

app.put("/users/:id",(req,res)=>{
  const bookID = req.params.id;
  const q = "UPDATE `test`.`user` SET `id`=?,`title`=?,`desc`=?,`cover`=? WHERE `id`=?";
const values =[
  req.body.id,
  req.body.title,
  req.body.desc,
  req.body.cover,
]
  db.query(q,[...values,bookID],(err,data)=>{
    if(err) return res.json(err);
    return res.json("book has been deleted successfully");
  })
})

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import express from "express";
// import mysql from "mysql";
// const app = express();

// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "99JONf8#",
//   database: "test",
// };

// const connection = mysql.createConnection(dbConfig);

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database:", err);
//     return;
//   }
//   console.log("Connected to database");

//   app.get("/", (req, res) => {
//     // Use a cached query result with a timeout
//     const cache = require("memory-cache");
//     const cachedResult = cache.get("mytable");
//     if (cachedResult) {
//       res.send(cachedResult);
//     } else {
//       connection.query("SELECT * FROM mytable", (err, rows) => {
//         if (err) {
//           console.error("Error running query:", err);
//           res.status(500).send("Error running query");
//         } else {
//           cache.put("mytable", rows, 10000); // cache for 10 seconds
//           setTimeout(() => {
//             cache.del("mytable");
//           }, 10000);
//           res.send(rows);
//         }
//       });
//     }
//   });

//   app.listen(3000, () => {
//     console.log("Server listening on port 3000");
//   });
// });
