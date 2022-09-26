export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    // ...
    console.log('===========');
    console.log(error);
    console.log(context);
  }
})

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.hook("app:error", async (error) => {
//     if (error.statusCode !== 404) return;
//     const url = nuxtApp._route.path;
//     return navigateTo("/");
//   });
// });
