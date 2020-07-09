'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Banco extends Model {
    static get primaryKey () {
        return 'id_bancos'
    }
}

module.exports = Banco