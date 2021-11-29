import { cleanEnv, num, str } from 'envalid'

export default cleanEnv(process.env, {
  PORT: num({ default: 1337 }),
  FACEBOOK_APP_ID: str(),
  FACEBOOK_APP_SECRET: str(),
  JWT: str(),
  MONGO: str(),
  TELEGRAM_LOGIN_TOKEN: str(),
})