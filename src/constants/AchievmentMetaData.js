const AchievementSchemaData = {
    "BP": {
        "Title_Of_Book" : "TEXT",
        "Publishing_Year" : "NUMBER",
        "Publisher" : "TEXT",
        "ISBN" : "TEXT",
        "Authors" : "TEXT",
        "Co_Authors" : "TEXT",
        "Number_Of_Pages" : "NUMBER"
    },
    "CP":{
        "Title Of Paper" : "TEXT",
        "Conference Name" : "TEXT",
        "Conference Date" : "DATE",
        "Conference Location" : "TEXT",
        "Authors" : "TEXT",
        "Co-Authors" : "TEXT",
        "Attendees" : "NUMBER"
    }
};
const AchievementArray = [
    {
        "name": "Books Published",
        "link": "/achievements/books",
        "available": true
    },
    {
        "name": "Conference Proceedings",
        "link": "/achievements/conference",
        "available": true
    },
    {
        "name": "Attended Events",
        "link": "/achievements/books",
        "available": false
    },
    {
        "name": "Organized Seminars",
        "link": "/achievements/conference",
        "available": false
    },
    {
        "name": "Journals",
        "link": "/achievements/books",
        "available": false
    },
    {
        "name": "Student Activities",
        "link": "/achievements/conference",
        "available": false
    },
    {
        "name": "Projects",
        "link": "/achievements/books",
        "available": false
    },
    {
        "name": "View All",
        "link": "/achievements/All",
        "available": true
    }
]
export { AchievementSchemaData, AchievementArray };