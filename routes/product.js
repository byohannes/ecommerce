const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create, productById, read } = require("../controllers/product");
const { userById } = require("../controllers/user");

router.post("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
