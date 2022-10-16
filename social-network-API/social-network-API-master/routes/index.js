/** @format */

const apiRoutes = require("./api");
const router = require("express").Router();

router.use("/api", apiRoutes);

router.use((req, res) => {
	res.status(404).send("<h1> Error!</h1>");
});

module.exports = router;
