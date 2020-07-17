'use strict'

const User = use ('App/Models/User')

class AuthController {
    async register({ request }) {
        const data = request.only(['username','email','password'])

        const user = await User.create(data)

        return user
    }

    async authenticate({ request, auth }) {
        const { email, password } = request.all()

        const token = await auth.attempt(email, password)

        return token
    }

    async login({ request, auth }) {
        const { email, password } = request.all()

        const user = await auth.validate(email, password, true)
        
        // const minutos = 60 * 8
        
        const token = await auth.generate(user, false, { expiresIn: '480m' }) // 480 min = 8 hs
        
        return { token, user }
      }
}

module.exports = AuthController
