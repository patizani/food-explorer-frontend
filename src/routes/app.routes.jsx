import { Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Orders } from '../pages/Orders';
import { Payment } from '../pages/Payment';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/payment" element={<Payment />}/>
      <Route path="/new" element={<New />}/>
      <Route path="/edit/:id" element={<Edit />}/>

    </Routes>
  )
}