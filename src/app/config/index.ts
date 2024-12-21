import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    port: process.env.PORT || 3000,
    database:process.env.DATABASE_URL,
    NodeDev:process.env.NODE_DEV,
    bcryptSalt:process.env.BCRYPT_SALT_ROUNDS,
    jwtSecret:process.env.JWT_SECRET,
}