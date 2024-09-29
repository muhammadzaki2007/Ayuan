module.exports = (app) => {

    const cv = require("../Controllers/cv_controllers")

    let router = require("express").Router()

    

    router.post("/create", cv.create)

    router.put("/update/:id", cv.update)

    router.get("/:id", cv.get)
  

    app.use("/api/cv" , router)

  }