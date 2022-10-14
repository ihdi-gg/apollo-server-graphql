import User from "../../entities/user"
import { generateToken } from "../util"

it('should generate JWT token', async () => {
    const mockedDate = new Date('2025-02-14T12:54:59.218Z')
    
    const data: User = {
        id: 1,
        username: "admin",
        email: "admin@admin.id",
        password: "testing",
        created_at: mockedDate,
        updated_at: mockedDate,
        display_name: "admin"
    }
    
    const token = generateToken(data)
    expect(token).toBeDefined()
    expect(typeof token).toBe('string')
})