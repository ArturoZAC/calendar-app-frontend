import { RouterProvider } from "react-router-dom"
import { appRouter } from "./routes/AppRouter"
import { Provider } from "react-redux"
import { store } from "./store"

export const CalendarApp = () => {
  return (
    <Provider store={ store }>
      <RouterProvider router={appRouter}/>
    </Provider>
  )
}
