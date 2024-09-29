module.exports = (app) => {

    const view = require("../Controllers/overview_controllers")

    let router = require("express").Router()

    

    router.post("/create", view.create)

    router.put("/update/:id", view.update)

    router.get("/:id", view.get)
  

    app.use("/api/view" , router)

  }