import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './styles/index.scss';

import MainPage from './Pages/MainPage/index.jsx';
import Preview from './Pages/Preview/Preview.jsx';
import GamesPage from './Pages/GamesPage/index.jsx';
import CrosswordPage from './Pages/GamesPage/CrosswordPage/index.jsx';

import HistoricalPage from './Pages/HistoricalPage/index.jsx';
import PolarPage from './Pages/HistoricalPage/PolarPage/index.jsx';
import DornPage from './Pages/HistoricalPage/DornPage/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Preview />,
    },
    {
        path: '/main',
        element: <MainPage />,
    },
    {
        path: '/history',
        element: <HistoricalPage />,
    },
    {
        path: '/games',
        element: <GamesPage />,
    },
    {
        path: '/crossword',
        element: <CrosswordPage />,
    },
    {
        path: '/polar',
        element: <PolarPage />,
    },
    {
        path: '/dorn',
        element: <DornPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
