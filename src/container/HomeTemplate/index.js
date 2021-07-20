import React from 'react'

import { Route } from "react-router-dom";
import NavBar from '../../components/NavBar';
function LayoutHome(props) {
    return (
      <div>
        <NavBar/>
        {props.children}
      </div>
    );
  }


export default function HomeTemplate({ Component}) {
    // const {Component}=props;
  
    return (
        <Route
            // {...props}
            render={(propsComponent) => (
                <LayoutHome>
                    < Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    )
}
