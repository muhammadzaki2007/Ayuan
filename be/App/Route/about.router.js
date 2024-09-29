module.exports = (app) => {

    const about = require("../Controllers/about_controllers")

    let router = require("express").Router()

    

    router.post("/create", about.create)

    router.put("/update/:id", about.update)

    router.get("/:id", about.get)
  

    app.use("/api/me" , router)

  }