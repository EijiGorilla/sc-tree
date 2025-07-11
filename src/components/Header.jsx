import { useEffect, useState } from "react";
import ContractPackageSegmentedList from "./ContractPackageSegmentedList";
import { dateUpdate } from "../Query";

function Header() {
  const [asOfDate, setAsOfDate] = useState(null);
  useEffect(() => {
    dateUpdate().then((response) => {
      setAsOfDate(response);
    });
  }, []);

  return (
    <>
      <header
        slot="header"
        id="header-title"
        style={{
          display: "flex",
          // width: "97.5%",
          padding: "0 1rem",
          borderStyle: "solid",
          height: "70px",
          borderRightWidth: 5,
          borderLeftWidth: 5,
          borderBottomWidth: 4,
          borderTopWidth: 5,
          borderColor: "#555555",
        }}
      >
        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
          alt="DOTr Logo"
          height={"55px"}
          width={"55px"}
          style={{ marginBottom: "auto", marginTop: "auto" }}
        />
        <b className="headerTitle">SC TREE</b>
        <div className="date">{!asOfDate ? "" : "As of " + asOfDate}</div>

        {/* Segmented List component */}
        <div
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            marginLeft: "auto",
            // marginRight: "40px",
            display: "flex",
          }}
        >
          <div style={{ margin: "auto" }}>
            <ContractPackageSegmentedList />
          </div>
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={"50px"}
            width={"75px"}
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              marginLeft: "1rem",
              marginRight: "20px",
            }}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
