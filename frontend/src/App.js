
import './App.css';
import { MainImage, Description, PriceReview, CustomerCategories, CustomerFeedback } from "./Componets/CustomerEngagement/CusEng";

function App() {
    return (
        <div className="App">
            <MainImage />
            <Description />
            <PriceReview />
            <CustomerCategories />
            <CustomerFeedback />
        </div>
    );
}

export default App;
