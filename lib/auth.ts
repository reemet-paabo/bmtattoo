import bcrypt from 'bcryptjs';


export interface LoginCredentials {
    username: string;
    password: string
}

export async function verifyCredentials(
    username: string,
    password: string
): Promise<boolean> {
    try {
        const validUsername = process.env.ADMIN_USERNAME;
        const validPasswordHash = process.env.ADMIN_PASSWORD_HASH;

        console.log("validUsername:", validUsername)
        console.log("validPasswordHash:", validPasswordHash);

        if(!validUsername || !validPasswordHash) {
            console.error('Admin credentials not configured in environment variables')
            return false;
        }

        if(username !== validUsername) {
            return false;
        }

        const isValid = await bcrypt.compare(password, validPasswordHash);

        return isValid;

    } catch (error) {
        console.error('Authentication error:', error);
        return false;
    }
}