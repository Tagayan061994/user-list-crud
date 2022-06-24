import { configureStore } from "@reduxjs/toolkit";
import globals from "./globals";
// import middleWares from "./middlewares";

export default configureStore({
  reducer: {
    globals,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(middleWares),
});
