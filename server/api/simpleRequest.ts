export default defineEventHandler(async (event) => {
  console.log('request from server');

   return { message: 'Hello from Simple request!' }
  
})