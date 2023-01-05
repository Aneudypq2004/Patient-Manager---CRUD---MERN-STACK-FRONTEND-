import { useContext } from "react";
import DashContext from "../context/DashProvider";


const useDash = () => useContext(DashContext)


export default useDash