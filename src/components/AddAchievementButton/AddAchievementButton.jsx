import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import "./AddAchievementButton.css"
const AddAchievementButton = (props) => {
    const achievement = props.achievement.prop;
    console.log(achievement);
    return (
        <Link to={"/addachievement"} state={{ name: achievement.name }} >
            <Button available={achievement.available} text = "Add New"/>
        </Link>
    )
}

export default AddAchievementButton;