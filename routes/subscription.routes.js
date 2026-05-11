import { Router } from "express";

const subscriptionRouter = Router();
subscriptionRouter.get("/", (req, res) => { res.send({ title: "get all subscriptions" }) });

subscriptionRouter.get("/:id", (req, res) => { res.send({ title: "get subscription details" }) });

subscriptionRouter.post("/", (req, res) => { res.send({ title: "Create subscription" }) });

subscriptionRouter.put("/:id", (req, res) => { res.send({ title: "subscription data update" }) });

subscriptionRouter.delete("/:id", (req, res) => { res.send({ title: "subscription data delete" }) });

subscriptionRouter.get("/user/:id", (req, res) => { res.send({ title: "get subscription particular user get" }) });
subscriptionRouter.put("/:id/cancel", (req, res) => { res.send({ title: "cancel user subscription" }) });
subscriptionRouter.get("/upcoming-renewals", (req, res) => { res.send({ title: "get upcoming renewals" }) });


export default subscriptionRouter;