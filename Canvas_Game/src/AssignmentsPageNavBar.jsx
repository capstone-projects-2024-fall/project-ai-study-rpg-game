

//settings icon -> links to settings page 
import React from "react";

//formatting --> more options on dashboard and userprofile
import {
    Box,
    // Button,
    // IconButton,
    // Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import { tokens } from "./theme";

const AssignmentsPageNavBar = () => {
    //sets theme -> idk if this actually works
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //adjusts based on device size
    const isXlDevices = useMediaQuery("(min-width: 1260px)");
    const isMdDevices = useMediaQuery("(min-width: 724px)");
    const isXsDevices = useMediaQuery("(max-width: 436px)");


    return (
            <nav display="flex" justifyContent="space-between"> {/*idk if this formatting works for nav*/}
                <h1>Assignments</h1>

                <ul className="links">
                    <li>
                        <a href= "/create">Settings</a>
                    </li>
                </ul>
            </nav>
    ); 
}

export default AssignmentsPageNavBar