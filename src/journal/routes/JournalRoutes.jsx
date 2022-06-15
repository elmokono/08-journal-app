import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalHomePage } from '../pages/JournalHomePage'

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<JournalHomePage />} />

            {/* default */}
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
