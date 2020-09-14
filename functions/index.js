const functions = require('firebase-functions');
const express = require("express")
const cors =  require("cors");
const { response } = require('express');
const stripe = require("stripe")("sk_test_51HR1WYKUlkyrhLaUoUuB2M1Wv8QzwkudBpMLn5AFYmUl9I2KXgKsmOENHw2j5o3pNFewa7GSmH1Zng3DYa10lm4i00aRBlPESp")
//API


// App config
const app = express();
//Middlewares
app.use(cors({origin:true}));
app.use(express.json())
//API Route
app.get('/',(request,response) => response.status(200).send('hello world'))
// app.get('/test',(request,response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request,response)=>{
const total = request.query.total;
console.log('Payement request recieved       BOOM   >>>>',total)
const paymentIntent = await stripe.paymentIntents.create({
    amount : total,
    currency:"usd",
});
response.status(201).send({
    clientSecret: paymentIntent.client_Secret,
 });
});
//Listen command 
exports.api = functions.https.onRequest(app)
















// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
