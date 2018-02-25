# react-mailmate

**Email survey sending app**

Involve your customers and users by creating easy email surveys to engage!

**You have to create a file** **_./config/config.json_** **and provide this object with these keys and your own values:**

```
{
  "development": {
    "GOOGLE_CLIENT_ID": "...",
    "GOOGLE_CLIENT_SECRET": "...",
    "MONGODB_URI": "mongodb://address.to.mongodb/mailmate",
    "COOKIE_KEY": "anymunberofrandomcharecters",
    "STRIPE_PUBLISHABLE_KEY": "...",
    "STRIPE_SECRET_KEY": "...",
    "SENDGRID_KEY": "...",
    "REDIRECT_DOMAIN": "http://localhost:3000"
  }
}
```

**As well as both** **_./client/.env.development_** & **_./client/.env.production_** **With:**

```
REACT_APP_STRIPE_KEY=...
```
