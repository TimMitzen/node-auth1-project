// Update with your config settings.

module.exports = {

  
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'
    },
  
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'

    }
  }

  


