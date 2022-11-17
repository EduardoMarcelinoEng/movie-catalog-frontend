import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from './Home';
import Database from './Database';

export default function Pages(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/banco-de-dados" element={<Database />} />
            </Routes>
        </BrowserRouter>
    );
}