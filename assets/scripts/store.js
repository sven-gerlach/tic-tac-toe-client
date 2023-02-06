'use strict'

/**
 * Signature of store is as follows:
 * {
 *   user: {
 *     _id: string,
 *     email: string,
 *     token: string,
 *   },
 *   game: {
 *     _id: string,
 *     cells: ,
 *     over: ,
 *     owner: ,
 *     createdAt: ,
 *     updatedAt: ,
 *   },
 *   games: game[],
 * }
 * @type {{}}
 */
const store = {
}

Object.assign(module.exports, {
  store
})
