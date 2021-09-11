import NavBar from "./component/Navbar";
import Home from './component/Home';
import Slide1 from "./component/slide/Slide";
import Icon1 from "./component/icon/icon1";
import { Box,Divider } from "@material-ui/core";
import Components1 from "./component/components/components1";
import Components2 from "./component/components/components2";
import Footer from "./component/footer/Footer";
import Upfooter from "./component/footer/upFooter";
import Slide3 from "./component/slide/Slide3";
import Slide2a from "./component/slide/Slide2a";
import Component3 from "./component/components/component3";

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: 'rgb(20,43,111)',
          height: 4,
          width:"70vw",
          marginLeft:"20%"
      }}
  />
);

const app = () => {
  return (
    <>
    <NavBar />
  <Box style={{marginTop:64,overflowX:'Hidden'}}>
    <Home/>
    <Slide1/>
    <Icon1/>
    <Components1/>
    <Slide2a/>
   <Slide3/>
   <ColoredLine style={{marginTop:10}}/>
   <Divider/>
    <Components2/>
    <Component3/>
    <Divider/>
    <Upfooter/>
    <ColoredLine/>
    <Footer/>
    </Box>
    </>
  )
}
export default app;