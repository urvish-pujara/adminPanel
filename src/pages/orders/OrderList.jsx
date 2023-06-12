import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { orderColumns, orderRows } from "./OrderData";

const OrderList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={orderColumns} rows={orderRows} />
      </div>
    </div>
  );
};

export default OrderList;
