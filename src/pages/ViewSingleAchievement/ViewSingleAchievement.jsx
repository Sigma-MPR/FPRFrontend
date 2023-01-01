import React, {useEffect, useState} from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import {getFieldsByAPI, makefields} from '../AddAchievement/functions';
const ViewSingleAchievement = () => {
    // alert('hi');</>
    const navigate = useNavigate();
    const Location = useLocation();
    const Achievement = Location.state?.prop;
    const Category = Location.state?.category;
    console.log(Achievement);
    console.log(Category);
    const [Loading, setLoading] = useState(true);
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});
    useEffect(() => {
        setLoading(true);
        getFieldsByAPI(Category.split(" ").join(""), setAchievementSchemaData)
    }, []);
    useEffect(() => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true);
        makefields(AchievementSchemaData, setLoading, Achievement)
        // ToastSuccess("Input Modal Made");
    }, [AchievementSchemaData]);

        return (
            <>
                <h1>View Single Achievement</h1>
                <div>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <div id="fields" className="add-achievement">
                    </div>
                {/* <div>
                    <input type="text" placeholder="Title" value={Achievement.title} />
                    <input type="text" placeholder="Publisher" value={Achievement.publisher} />
                    <input type="text" placeholder="Place" value={Achievement.place} />
                    <input type="text" placeholder="ISBN" value={Achievement.isbn} />
                    <input type="month" placeholder="Month" value={Achievement.pubMonth} />
                    <input type="year" placeholder="Year" value={Achievement.pubYear} />
                    <input type="text" placeholder="Category" value={Achievement.pubCategory} />
                    <input type="text" placeholder="Remarks" value={Achievement.remarks} />
                </div> */}


            </>
        );
    }
    

export default ViewSingleAchievement;