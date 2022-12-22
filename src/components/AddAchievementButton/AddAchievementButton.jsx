import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

const AddAchievementButton = (props) => {
    return (
        <Link to={"/addachievement"} state={{ name: props.name }} >
            <Button available={props.available} text="Add New" />
        </Link>
    )
}

export default AddAchievementButton;