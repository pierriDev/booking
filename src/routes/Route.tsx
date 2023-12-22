import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Booking from '@/pages/booking/Booking'
import UpdateBooking from "@/pages/updateBooking/UpdateBooking";
import CreateBooking from "@/pages/createBooking/CreateBooking";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Booking />,
    children: [
      {
        path: "view-details/:bookingId",
        element: <Booking />,
      },
      
    ]
  },
  {
    path: "/create",
    element: <CreateBooking />,
  },
  {
    path: "update-details/:bookingId",
    element: <UpdateBooking />,
  },
  
]);

export default Routes

