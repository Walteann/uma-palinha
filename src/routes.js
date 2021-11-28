import { Route, Routes, Navigate } from 'react-router-dom';
import { PlayListPage } from './pages/listener/components/section/pages/playlist/PlaylistPage';

import { Listener } from './pages/listener/Listener';
import { Welcome } from './pages/welcome/Welcome.jsx';
import { DetailMusicPage } from './pages/listener/components/section/pages/detail-music/DetailMusicPage';

export const RoutesApp = () => (
    <Routes>

        <Route path="/" element={<Welcome />}></Route>
        <Route path="/listener" element={<Listener />}>
            
            {/* TODO: Remover depois */}
            <Route path="/listener" element={<Navigate to="/listener/playlist" />}></Route>
            <Route path="playlist" element={<PlayListPage/>}></Route>
            <Route path="detail" element={<DetailMusicPage/>}></Route>
            
        </Route>

    </Routes>
)
