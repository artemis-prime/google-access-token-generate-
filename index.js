import google from 'googleapis'
import googleServiceAccountKey from '../luxdefi-svc-acc-pvt-key.json' with { type: "json" }

const googleJWTClient = new google.Auth.JWT(
  googleServiceAccountKey.client_email,
  null,
  googleServiceAccountKey.private_key,
  ['https://www.googleapis.com/auth/drive.readonly'], // You may need to specify scopes other than analytics
  null,
)

googleJWTClient.authorize((error, access_token) => {
   if (error) {
      return console.error("Couldn't get access token", e)
   }

   console.log("TOKEN: ", access_token)
   // ... access_token ready to use to fetch data and return to client
   // even serve access_token back to client for use in `gapi.analytics.auth.authorize`
})
