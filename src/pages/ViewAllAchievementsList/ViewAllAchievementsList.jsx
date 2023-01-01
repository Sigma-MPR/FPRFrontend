import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {AddAchievementButton, Loader, getAchievementsWithApiCall } from '../../components';
import ViewAllAchievementsAchievement from '../../components/ViewAllAchievementsAchivement/ViewAllAchievementsAchievement';
// import './ViewSingleAchievementList.css';
// import { ToastContainer } from 'react-toastify';

import { CustomToastContainer } from '../../components/Toast/Toast';

const ViewAllAchievementsList = () => {
    const Location = useLocation()
    
    // const props = Location.state?.prop||localStorage.getItem('props');
    //console.log(props);
    // localStorage.setItem('Achievement', Achievement);
    // localStorage.setItem('props', JSON.stringify(props));
    // //console.log(Achievement.state.prop.name);
    // alert(Achievement);
    const [BooksPublishedList, setBooksPublishedList] = useState({});
    const [ConferenceProceedingList, setConferenceProceedingList] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('bookspublished', setBooksPublishedList).then(() => {
            //console.log(ConferenceProceedingList);
            setLoading(false);
        });
        getAchievementsWithApiCall('conferenceproceeding', setConferenceProceedingList).then(() => {
            //console.log(ConferenceProceedingList);
            setLoading(false);
        });
    },
        // eslint-disable-next-line
        [])
    useEffect(() => {
        // //console.log(ConferenceProceedingList);
    }, [BooksPublishedList, ConferenceProceedingList])
    return (
        <div>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-secondary disabled px-12 ">Filter</button>
                <button className="btn glass bg-primary px-12">Sort</button>
            </div>
            <div id='longAddButton'>
                {/* <AddAchievementButton /> */}
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center text-white underline">Books Published</h1>
            </div>
            <div id='booksCardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    BooksPublishedList && BooksPublishedList.data && BooksPublishedList.data.length > 0 && BooksPublishedList.data.map((book) => {
                        return (
                            <ViewAllAchievementsAchievement achievement={book} category={'bookspublished'} setAchievementList={setBooksPublishedList}/>
                        )
                    })
                }
                <CustomToastContainer />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center text-white underline">Conference Proceeding</h1>
            </div>
            <div id='conferenceCardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    ConferenceProceedingList && ConferenceProceedingList.data && ConferenceProceedingList.data.length > 0 && ConferenceProceedingList.data.map((conferenceproceeding) => {
                        return (
                            <ViewAllAchievementsAchievement achievement={conferenceproceeding} category={'conferenceproceeding'} setAchievementList={setConferenceProceedingList}/>
                        )
                    })
                }
                <CustomToastContainer />
            </div>
        </div>
    );
}

export default ViewAllAchievementsList;