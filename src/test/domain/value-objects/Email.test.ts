import { Email } from "../../../domain/value-objects/Email"

describe("Email", () => {
    it('Deve criar um e-mail válido', () => {
        const email = Email.create('test@exemplo.com')
        expect(email.value).toBe("test@exemplo.com")
    })
})
