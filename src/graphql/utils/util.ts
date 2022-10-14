import User from "../entities/user";
import jwt from 'jsonwebtoken'

export const generateToken = (user: User): string => {
    const token = jwt.sign(
        {
            data: {
                id: user.id,
                username: user.username,
                display_name: user.display_name
            },
        },
        'SECRET',
        { expiresIn: '7d' }
    )

    return token
}