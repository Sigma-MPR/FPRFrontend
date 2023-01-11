import { ACHIEVEMENT_API } from '../constants';
const getAchievementsWithApiCall = async (achievement, setAchievementList) => {
    
    let str = achievement.split(' ').join('').toLowerCase();
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');
    const apiToCall = `${ACHIEVEMENT_API}/${str}/all`;
    // //console.log(apiToCall);
    const response = await fetch(apiToCall, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify({
            "filter" : {
              "uid" : id
            }
          })
    });
    const data = await response.json();
    //console.log(data);
    // //console.log(data);
    setAchievementList(data);
    return data;
}

const deleteAchievement = async(id, cat, setAchievementList) => {
    const ach = cat.split(" ").join("").toLowerCase();
    const apiToCall = `${ACHIEVEMENT_API}/${ach}?id=${id}`;
    const resp = await fetch(apiToCall, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    await resp.json();
    await getAchievementsWithApiCall(cat, setAchievementList);

    // alert(data);
    
}
export { getAchievementsWithApiCall, deleteAchievement };