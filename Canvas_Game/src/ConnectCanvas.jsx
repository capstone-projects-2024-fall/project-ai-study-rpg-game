import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';
import './index.css';
import { Box, CssBaseline, ThemeProvider, TextField, Button, FormControl } from "@mui/material";
import {Card, CardHeader, CardContent, Typography} from '@mui/material';


export default function ConnectCanvas(){
    return(
        <div>
            <Card>
                <CardHeader title='Connect To Canvas' subheader='Enter a key generated from your canvas account to turn your assignments into a game!'></CardHeader>
                <CardContent>
                    <Typography variant='body'>
                        To connect your account to canvas, follow these steps:
                            <ol>
                                <li>Log in to your institution/school's canvas site</li>
                                <li>Click "Account" in the top left</li>
                                <li>Click "Settings"</li>
                                <li>Scroll down to the bottom of the page</li>
                                <li>Find the button that says "New Access Token" and click it</li>
                                <li>Add Canvas Quest to the purpose, and don't enter en expiration date</li>
                                <li>Copy the token, paste it on this page and hit connect!</li>
                            </ol>
                            <FormControl>
                                <TextField label='Key' id='filled-basic' variant='filled'></TextField>
                                <Button>Connect</Button>
                            </FormControl>
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    );
}

