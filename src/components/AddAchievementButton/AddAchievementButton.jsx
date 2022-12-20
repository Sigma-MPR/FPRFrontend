import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

const AddAchievementButton = (props) => {
    console.log(props);
    const achievement = props.achievement.prop;
    return (
        <Link to={"/addachievement"} state={{ name: achievement.name }} >
            <Button available={achievement.available} text = "Add New" />
        </Link>
    )
}

export default AddAchievementButton;