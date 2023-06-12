import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import TrafficInfo from "../../components/traffic/TrafficInfo";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const ServiceHealth = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="network" />
          <Widget type="memory" />
          <Widget type="cpu" />
        </div>
        <div className="charts">
          <TrafficInfo />
          <Chart title="Last 6 Months (New users)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default ServiceHealth;
