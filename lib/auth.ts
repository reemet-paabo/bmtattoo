import bcrypt from 'bcryptjs';
/** @todo: credentials.json just temporary solution, until DB is created */
import credentials from '@/data/credentials.json';

export interface LoginCredentials {
    username: string;
    password: string
}

export async function verifyCredentials(
    username: string,
    password: string
): Promise<boolean> {
    try {
        //Check if username exists
        if(username !== credentials.admin.username) {
            return false;
        }

        // Verify password against hash
        const isValid = await bcrypt.compare(password, credentials.admin.passwordHash);
        if(isValid) {
            console.log('Authentication is Approved!')
        }

        return isValid;
    } catch (error) {
        console.error('Authentication error:', error);
        return false;
    }
}