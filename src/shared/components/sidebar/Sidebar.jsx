import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { MENU } from './../../../constant';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(location.pathname)

    console.log('called')
  }, [location.pathname])

  const check = (route) => {

    navigate(`${route}`)
    console.log({ route, location: location.pathname })
    // console.log("currentPath", currentPath)
    // console.log("route", route);
  }


  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        {MENU.map((ele, i) => {
          return <ListItem

            key={i}
            style={{
              backgroundColor: currentPath == ele.route && 'rgb(224 224 224)' 
            }}
            onClick={() => check(ele.route)}>
            <ListItemPrefix>
              {ele.icon}
            </ListItemPrefix>
            {ele.name}
          </ListItem>
        })}
      </List>
    </Card>
  );
}