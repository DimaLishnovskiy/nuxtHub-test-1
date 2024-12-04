export default defineEventHandler(async (event) => {
  console.log('request from server');

//   const db = hubDatabase()

//   console.log('db:', db);

//   const result = await db.prepare('SELECT * FROM DB').all();
//   const result = await db.prepare('SELECT * FROM nuxt-hub-test-1').all();
//   const result = await db.prepare('SELECT * FROM nuxtHubTest1').all();
//   const result = await db.prepare('SELECT * FROM Customers').all();
// const result = await db.prepare('SELECT * FROM _hub_migrations').all();

// const { results } =  db.prepare('SELECT * FROM _hub_migrations').all();

  
 
//   console.log('result:', result);

//     console.log('results:', results);
  

   return { message: 'Hello from Simple request!' }
  
})