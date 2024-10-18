import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent, Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
    { field: 'week', headerName: 'Week', headerClassName: 'custom-header', flex: 0.5 },
    { field: 'event_name', headerName: 'Event', headerClassName: 'custom-header', flex: 1 },
    { field: 'event_description', headerName: 'Description', headerClassName: 'custom-header', flex: 2 },
    { field: 'event_date', headerName: 'Date', headerClassName: 'custom-header', flex: 0.5 },
];

export default function App() {
    const [rows,setRows] = useState([]); // For DataGrid
    const [currentEvent, setCurrentEvent] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [page, setPage] = useState(0); // Current page
    const [pageSize, setPageSize] = useState(5); // Rows per page

    useEffect(() => {
        const fetchData = async () => {
            const url = new URL("https://courses.ianapplebaum.com/api/syllabus");
            const headers = {
                "Authorization": "Bearer ooBQjDWNPiyqQeWoomRju5aLwAimA5BipchjntXodd137907",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                const syllabi = data.syllabi || [];
                
                if (Array.isArray(syllabi)) {
                    var rowArr = [];
                    //for each syllabus, make an API call and add result to rowArr
                    for(const syllabus of syllabi){

                        //creating URL by adding syllabus ID
                        const syllabusURL = new URL("https://courses.ianapplebaum.com/api/syllabus/" + syllabus.id);
                        try{
                            //making API call to get events
                            const resp = await fetch(syllabusURL, {
                                method: "GET",
                                headers
                            })
                            
                            const syllabusData = await resp.json();
                            const events = syllabusData.events || [];

                            //loop to add week property to every event in events array
                            for(const event of events){

                                //get date of event as date object
                                const eventDate = new Date(event.event_date.split('-')[0], event.event_date.split('-')[1], event.event_date.split('-')[2]);

                                //get syllabus ID for event
                                const eventSyllabus = event.syllabus_id

                                //get end date of syllabus by ID and convert to date object
                                const syllabusStart = syllabi.find(syllabus => syllabus.id === event.syllabus_id).start_date;
                                const syllabusStartDate = new Date(syllabusStart.split('-')[0], syllabusStart.split('-')[1], syllabusStart.split('-')[2]);

                                //calculate and push week property onto event object
                                Object.defineProperty(event, "week", {value: (Math.round((eventDate - syllabusStartDate) / (7 * 24 * 60 * 60 * 1000)))});
                            }

                            //adding events to rowArr
                            rowArr.push.apply(rowArr, events);

                        }catch(error){
                            console.error("Error fetching the data!", error);
                            setCurrentEvent({ event: "Error fetching events", description: error.message });
                        }
                    };
                    
                    
                    setRows(rowArr); // Populate DataGrid
                    
                    // Get today's date in YYYY-MM-DD format
                    const today = new Date().toISOString().split('T')[0];
                    

                    // Find event matching today's date
                    const eventToday = rowArr.find(event => event.event_date === today);
                    // If a matching event is found, set the current event
                    if(eventToday){
                        const displayEvent = {event: eventToday.event_name, description: eventToday.event_description}
                        setCurrentEvent(displayEvent);
                    }else{
                        // If no event, show message that there are no events scheduled
                        setCurrentEvent({ event: "No events today.", description: "There are no events scheduled." });
                    }    
                    
                } else {
                    console.error("Expected an array but got:", events);
                    setCurrentEvent({ event: "No event today", description: "There are no events scheduled for today." });
                }
            } catch (error) {
                console.error("Error fetching the data!", error);
                setCurrentEvent({ event: "Error fetching events", description: error.message });
            } finally {
                setLoading(false); // End loading state
            }
        };

        fetchData();
    }, []);

    return (
        <Container maxWidth="m">
            <Box sx={{ my: 4 }}>
                <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                    Syllabus Activity
                </Typography>
                <Container maxWidth={"sm"}>
                    <Card
                        sx={{
                            minWidth: 275,
                            boxShadow: 3,
                            borderRadius: 3,
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: 10,
                                transform: 'scale(1.02)',
                            },
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} />
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <>
                                    <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
                                        Current Event: {currentEvent ? currentEvent.event : 'No events today'}
                                    </Typography>
                                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                                        {currentEvent ? currentEvent.description : 'There are no events scheduled.'}
                                    </Typography>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Container>
                <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
                    Course Events
                </Typography>
                <Paper sx={{ height: 400, width: '100%', border: 0 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pagination
                        page={page}
                        pageSize={pageSize}
                        onPageChange={(newPage) => setPage(newPage)}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10]}
                        loading={loading}
                        getRowClassName={(params) => `custom-row ${params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'}`}
                    />
                </Paper>
            </Box>
            <style>
                {`
                .custom-header {
                    background-color: #f5f5f5;
                    color: #333;
                    font-weight: bold;
                    text-align: center;
                }
                .custom-row {
                    transition: background-color 0.3s;
                }
                .custom-row.even {
                    background-color: #f9f9f9;
                }
                .custom-row.odd {
                    background-color: #ffffff;
                }
                .custom-row:hover {
                    background-color: #e0f7fa; /* Light blue on hover */
                }
                `}
            </style>
        </Container>
    );
}
