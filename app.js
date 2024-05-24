const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyparser = require("body-parser");
const db = require("./Database/db");
const users = require("./Database/Usermodel");

//EXPRESS
const app = express();
const hostname = "127.0.0.1";
const port = 80;

//EXPRESS
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json())

//PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//ENDPOINTS
app.get("/", (req, res)=>{
    const value = {"link": "/login", "linkname": "Login/Signup", "flink": "/", "slink": "/about", "tlink": "/our_cycle"}
    res.status(200).render("index.pug", value);
})
app.get("/about", (req, res)=>{
    const value = {"link": "/login", "linkname": "Login/Signup", "flink": "/", "slink": "/about", "tlink": "/our_cycles"}
    res.status(200).render("about.pug", value);
})
// app.get("/our_cycles", (req, res)=>{
//     const value = {"link": "/login", "linkname": "Login/Signup", "flink": "/", "slink": "/about", "tlink": "/our_cycles"}
//     res.status(200).render("index.pug", value);
// })
app.get("/login", (req, res)=>{
    const value = {"link": "/login", "linkname": "Login/Signup", "flink": "/", "slink": "/about", "tlink": "/our_cycles"}
    res.status(200).render("login.pug", value);
})
app.get("/signup", (req, res)=>{
    res.status(200).render("signup.pug");
})
app.post("/signup", async(req, res)=>{
    let userdata =new users(req.body);
    if(req.body.Password == req.body.Varify_Password){
        await userdata.save().then(()=>{
            const value = {"link": "/account", "linkname": "Account", "flink": "/a", "slink": "/aabout", "tlink": "/aour_cycles"}
            res.status(200).render("index.pug", value);
        }).catch(()=>{
            res.send("Something Went Wrong");
        })
    }
    else{
        const value = {"content": "Password Missmatch"}
        res.status(200).render("signup.pug", value);
    }
})
app.get("/a", (req, res)=>{
    const value = {"link": "/account", "linkname": "Account", "flink": "/a", "slink": "/aabout", "tlink": "/aour_cycles"}
    res.status(200).render("index.pug", value);
})
app.get("/aabout", (req, res)=>{
    const value = {"link": "/account", "linkname": "Account", "flink": "/a", "slink": "/aabout", "tlink": "/aour_cycles"}
    res.status(200).render("about.pug", value);
})
// app.get("/aour_cycles", (req, res)=>{
//     const value = {"link": "/account", "linkname": "Account", "flink": "/a", "slink": "/aabout", "tlink": "/aour_cycles"}
//     res.status(200).render("index.pug", value);
// })

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The app successfully running at http://${hostname}:${port}/`);
})