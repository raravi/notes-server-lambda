# notes-server-lambda

Notes App Server on AWS Lambda!

This repo contains the Microservice for Authentication of the Notes app server. It makes use of the [login-server-express](https://www.npmjs.com/package/login-server-express) NPM package (created by me for reusability!) to focus mainly on the deployment to AWS as a **Lambda function** using [Serverless](https://serverless.com/).

## Usage

You should have a `secrets.json` file to be picked up by the serverless.yml config. The `secrets.json` file should have these defined:

```
{
  "NODE_ENV": "",
  "APP_DB": "",
  "APP_SECRETORKEY": "",
  "APP_EMAIL": "",
  "APP_PASSWORD": "",
  "APP_RESETEMAIL": "",
  "APP_RESETLINK": "",
  "APP_CLIENTURL": ""
}
```

* **NODE_ENV**: `dev`/`prod` etc.
* **APP_DB**: The MongoDB URI used to connect to the DB.
* **APP_SECRETORKEY**: A Secret key for generating random strings to be used as JWTs (JSON Web Tokens).
* **APP_EMAIL**: Email from which you want to send mail.
* **APP_PASSWORD**: Password for the above APP_EMAIL.
* **APP_RESETEMAIL**: The Email that is displayed in the 'From' field in the mail sent.
* **APP_RESETLINK**: Link to reset password. For e.g., https://www.myapp.com/resetpassword
* **APP_CLIENTURL**: The URL of your Client application which will connect to this server. For e.g., https://www.myapp.com
