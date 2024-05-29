const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github2").Strategy;
const cors = require("cors");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
//Configurations
app.use(bodyParser.json());

app
  .use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
    })
  ) // Basic express session initialization
  .use(passport.initialize()) // init passport on every route call
  .use(passport.session()); // allow passport to use "express-session"

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app
  .use(cors({ methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"] }))
  .use(cors({ origin: "*" }));

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      //User.findorCreate({ githubId: profile.id}, function (err, user) {
      return done(null, profile);
      //});
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/oauth/callback",
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
    session: false,
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/");
  }
);

// Routes
app.use("/", require("./routes/"));

// Handling Errors fn
app.use(async (err, req, res, next) => {
  console.error(`Error at: "${req.originalUrl}": ${err.message}`);
  res.status(500).send(`The was an error at ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
