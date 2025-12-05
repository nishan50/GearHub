
import './App.css';
import { BrowserRouter, Route, Router ,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

       

export default App;
