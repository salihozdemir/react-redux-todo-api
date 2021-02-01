const {
  getTodos,
  createTodo,
  updateTodo,
  deleteAllTodos,
  deleteTodo,
} = require("./controller");
const router = require("express").Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/", deleteAllTodos);
router.delete("/:id", deleteTodo);

module.exports = (app) => {
  app.use("/api", router);

  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message,
    });
  });
};
