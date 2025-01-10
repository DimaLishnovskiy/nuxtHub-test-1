export default defineEventHandler(async (event) => {
  console.log('request from server')

  const db = hubDatabase()

  console.log('db:', db)

  //   ProxyStub може мати властивості:
  // name: 'D1Database': Ідентифікує тип бази даних (у цьому випадку це Cloudflare D1).
  // poisoned: false: Вказує, що підключення не пошкоджене (тобто база готова до використання).

  //   const result = await db.prepare('SELECT * FROM DB').all();
  //   const result = await db.prepare('SELECT * FROM nuxt-hub-test-1').all();
  //   const result = await db.prepare('SELECT * FROM nuxtHubTest1').all();
  //   const result = await db.prepare('SELECT * FROM Customers').all();
  // const result = await db.prepare('SELECT * FROM _hub_migrations').all();

  // const { results } =  db.prepare('SELECT * FROM _hub_migrations').all();

  // const query = "SELECT * FROM Customers;";

  const query = 'SELECT * FROM TestFromTerminalCreate;'

  //   const createTableQuery = `
  //   CREATE TABLE Customers (
  //     CustomerId INTEGER PRIMARY KEY AUTOINCREMENT,
  //     CompanyName TEXT NOT NULL,
  //     ContactName TEXT
  //   );
  // `;

  const createTableQuery = `
  CREATE TABLE TestFromTerminalCreate (
    CustomerId INTEGER PRIMARY KEY AUTOINCREMENT,
    CompanyName TEXT NOT NULL,
    ContactName TEXT
  );
`

  //   const insertQuery = `
  //   INSERT INTO Customers (CompanyName, ContactName)
  //   VALUES
  //     ('Alfreds Futterkiste', 'Maria Anders'),
  //     ('Around the Horn', 'Thomas Hardy'),
  //     ('Bs Beverages', 'Victoria Ashworth'),
  //     ('GG', 'WP');
  // `;

  const insertQuery = `
  INSERT INTO TestFromTerminalCreate (CompanyName, ContactName)
  VALUES
    ('GG1', 'WP1'),
    ('GG', 'WP');
`

  // const query = "SELECT * FROM _hub_migrations;";

  // const query = "SELECT * FROM sqlite_sequence;";

  // const query = "SELECT name FROM sqlite_master WHERE type='table';";

  try {
    // дивитися що у базах є
    const statement = db.prepare(query)

    const result = await statement.all() // Використовуємо `.all()` для отримання всіх рядків

    console.log('result:', result)
    return result

    // створення таблиці
    // const createStatement = db.prepare(createTableQuery);
    // await createStatement.run();

    // додавання даних у таблицю таблиці
    // const insertStatement = db.prepare(insertQuery);
    // await insertStatement.run();
    // console.log("Дані успішно додані.");
  }
  catch (error) {
    console.error('Database query error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Database query failed',
    })
  }
  finally {
    return { message: 'Hello from Simple request!' }
  }

  //   console.log('result:', result);

  //     console.log('results:', results);

  //    return { message: 'Hello from Simple request!' }
})
