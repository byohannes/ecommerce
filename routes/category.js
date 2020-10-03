const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create, categoryById,read } = require("../controllers/category");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", read);
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
