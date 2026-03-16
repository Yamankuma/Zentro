import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  
         const [allOrder , setAllOrder] = useState([]);
     useEffect(() => {
        axios.get("https://zentro-production-5266.up.railway.app/allOrder").then((res) => {
          // console.log(res.data);
          setAllOrder(res.data);
        });
      }, []);
  return (
    <div className="orders">
      {/* <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div> */}
      <div className="order-table">
        <table >
          <tr>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th>mode</th>
          </tr>

           {allOrder.map((stock, index) => {
            

            return (
              <tr key={index}>
                
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
                
              </tr>
            );
          })}

          
        </table>

      </div>
    </div>
  );
};

export default Orders;
