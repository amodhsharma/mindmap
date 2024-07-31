//making our first compnoent which is a function 
//the return value is the content of the component

import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Content from "./Content/Content";
import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";

function App(){
  return(<div> 
    <Header/>
    <LeftMenu/>
    <Breadcrumbs/>
    <Content/>
  </div>);
}

export default App;