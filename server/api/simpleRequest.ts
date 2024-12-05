export default defineEventHandler(async (event) => {
  console.log('request from server')

  const db = hubDatabase()

  console.log('db:', db)

  //   const result = await db.prepare('SELECT * FROM DB').all();
  //   const result = await db.prepare('SELECT * FROM nuxt-hub-test-1').all();
  //   const result = await db.prepare('SELECT * FROM nuxtHubTest1').all();
  //   const result = await db.prepare('SELECT * FROM Customers').all();
  // const result = await db.prepare('SELECT * FROM _hub_migrations').all();

  // const { results } =  db.prepare('SELECT * FROM _hub_migrations').all();

  const query = 'SELECT * FROM Customers;'
  try {
    // Виконання запиту
    const statement = db.prepare(query)
    // row bellow make error
    // const result = await statement.all() // Використовуємо `.all()` для отримання всіх рядків

    // console.log('result:', result)
    // return result
  }
  catch (error) {
    console.error('Database query error:', error)
    throw createError({ statusCode: 500, statusMessage: 'Database query failed' })
  }
  finally {
    return { message: 'Hello from Simple request!' }
  }

  //   console.log('result:', result);

  //     console.log('results:', results);

  //    return { message: 'Hello from Simple request!' }
})