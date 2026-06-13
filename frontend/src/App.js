import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Programs from '@/pages/Programs';
import ProgramDetail from '@/pages/ProgramDetail';
import International from '@/pages/International';
import Mission from '@/pages/Mission';
import GetInvolved from '@/pages/GetInvolved';
import Donate from '@/pages/Donate';
import NotFound from '@/pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/programs/:slug" element={<ProgramDetail />} />
                        <Route path="/international" element={<International />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/get-involved" element={<GetInvolved />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
