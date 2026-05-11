import { Router } from "express";

const userRoute = Router();
userRoute.get("/",(req,res)=>{res.send({title:"fetch GET all user"})})
userRoute.get("/:id",(req,res)=>{res.send({title:"GET user details "})})
userRoute.post("/",(req,res)=>{res.send({title:"Create new user"})})
userRoute.put("/:id",(req,res)=>{res.send({title:"user data update"})})
userRoute.delete("/:id", (req, res) => { res.send({ title: "user data delete" }) });

export default userRoute;