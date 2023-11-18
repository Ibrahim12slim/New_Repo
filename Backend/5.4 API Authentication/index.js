import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "IbrahimSlim";
const yourPassword = "123123";
const yourAPIKey = "4fc079f6-851e-45ea-9d22-78a6a160884a";
const yourBearerToken = "187f3c42-7318-4d5b-bbd0-b6cdd146a548";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const response = await axios.get( API_URL + "/random" );
  res.render("index.ejs",{
    content : JSON.stringify(response.data)
  });
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
   // https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get(API_URL + "/all?page=2",
    {
      auth:{
        username : yourUsername,
        password : yourPassword,
      },
    }
    )
    res.render("index.ejs",{content:JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send(error.message)
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  try {
    const result = await axios.get(API_URL + "/filter",{
      params: {
        score : 5 ,
        apiKey : yourAPIKey
      }
    });
    res.render("index.ejs",{content : JSON.stringify(result.data)})
  } catch (error) {
    res.status(404).send(error.message);
  }
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  try {
    const result = await axios.get(API_URL + "/secrets/42",config);
    res.render("index.ejs" ,{
      content : JSON.stringify(result.data)
    })
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
