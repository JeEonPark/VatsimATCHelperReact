import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import DirectionsIcon from '@material-ui/icons/Directions';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import CloudIcon from '@material-ui/icons/Cloud';

export const SidebarData = [
    {
        title: "Delivery",
        icon: <AssignmentIcon />,
        link: "/delevery_1"
    },
    {
        title: "Ground 1",
        icon: <DirectionsIcon />,
        link: "/ground_1"
    },
    {
        title: "Tower 1",
        icon: <ApartmentIcon />,
        link: "/tower_1"
    },
    {
        title: "Dep / App 1",
        icon: <FlightTakeoffIcon />,
        link: "/depapp_1"
    },
    {
        title: "Center / Control",
        icon: <CloudIcon />,
        link: "/control"
    },
    {
        title: "Dep / App 2",
        icon: <FlightLandIcon />,
        link: "/depapp_2"
    },
    {
        title: "Tower 2",
        icon: <ApartmentIcon />,
        link: "/tower_2"
    },
    {
        title: "Ground 2",
        icon: <DirectionsIcon />,
        link: "/ground_2"
    }
]