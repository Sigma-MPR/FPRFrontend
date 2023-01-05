import { ACHIEVEMENT_API } from '../constants';
const getAchievementsWithApiCall = async (achievement, setAchievementList) => {
    
    let str = achievement.split(' ').join('').toLowerCase();
    const apiToCall = `${ACHIEVEMENT_API}/achievements/${str}/all`;
    // //console.log(apiToCall);
    const response = await fetch(apiToCall, {
        method: 'POST',
    });
    const data = await response.json();
    //console.log(data);
    // //console.log(data);
    setAchievementList(data);
    return data;
}

const deleteAchievement = async(id, cat, setAchievementList) => {
    const ach = cat.split(" ").join("").toLowerCase();
    const apiToCall = `${ACHIEVEMENT_API}/achievements/${ach}?id=${id}`;
    const resp = await fetch(apiToCall, {
        method: 'DELETE'
    })
    await resp.json();
    await getAchievementsWithApiCall(cat, setAchievementList);

    // alert(data);
    
}
export { getAchievementsWithApiCall, deleteAchievement };