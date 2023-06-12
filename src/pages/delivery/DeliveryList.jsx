import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { deliveryColumns, deliveryRows } from "./DeliveryData";

const DeliveryList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={deliveryColumns} rows={deliveryRows} />
      </div>
    </div>
  );
};

export default DeliveryList;
