'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Banco extends Model {
    static get primaryKey () {
        return 'id_bancos'
    }
    
    static get incrementing () {
        return false
    }
}

module.exports = Banco