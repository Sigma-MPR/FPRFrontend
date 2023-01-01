import React, {useEffect} from "react";
import {  useNavigate, useLocation } from "react-router-dom";

const ViewSingleAchievement = () => {
    // alert('hi');</>
    const navigate = useNavigate();
    const Location = useLocation();
    // const Achievement  = {
    //     "title": "123",
    //     "publisher": "123",
    //     "place": "123",
    //     "isbn": "123",
    //     "pubMonth": "123",
    //     "pubYear": "123",
    //     "pubCategory": "123",
    //     "remarks": "124",
    //     "id": "63a338abeada22551428b2ad"
    // }
    const Achievement = Location.state?.prop;
        return (
            <>
                <h1>View Single Achievement</h1>
                <div>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <div>
                    {/* fill Achievement fields in inputs */}
                    <input type="text" placeholder="Title" value={Achievement.title} />
                    <input type="text" placeholder="Publisher" value={Achievement.publisher} />
                    <input type="text" placeholder="Place" value={Achievement.place} />
                    <input type="text" placeholder="ISBN" value={Achievement.isbn} />
                    <input type="month" placeholder="Month" value={Achievement.pubMonth} />
                    <input type="year" placeholder="Year" value={Achievement.pubYear} />
                    <input type="text" placeholder="Category" value={Achievement.pubCategory} />
                    <input type="text" placeholder="Remarks" value={Achievement.remarks} />
                </div>


            </>
        );
    }
    

export default ViewSingleAchievement;