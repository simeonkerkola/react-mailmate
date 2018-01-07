# react-mailmate

**You have to create file** ***./config/config.json*** **provide these keys and values:**

```
{
  "development": {
    "GOOGLE_CLIENT_ID": "Your_client_ID",
    "GOOGLE_CLIENT_SECRET": "Your_secret_key",
    "MONGODB_URI": "mongodb://address.to.mongodb/mailmate",
    "COOKIE_KEY": "anymunberofrandomcharecters"
  },
  "production": {
    "...all same keys as with developmet": "Mainly for the deployment to Heroku"
  }
}
```
