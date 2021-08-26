import express from "express";
const routes = express.Router();
routes.get("/bootstrap", (req, res) => {
    res.render("bootstrap");
})
routes.get("/", (req, res) => {
    res.render("homepage");
})
routes.get("/review", (req, res) => {
    res.render("review");
})
routes.post("/review-thanks" , (req, res) => {
    console.log(req.body);
    let yourName = req.body.name;
    let comment = req.body.comment;
    let rating = req.body.rating;
    res.render("review-thanks", {comment, rating, yourName});
})

export default routes;