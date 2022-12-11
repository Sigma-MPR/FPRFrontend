const AchievementSchemaData = {
    "BP": {
        "modelFields": [
            {
              "name": "cid",
              "required": false,
              "type": "ObjectId"
            },
            {
              "name": "uid",
              "required": false,
              "type": "ObjectId"
            },
            {
              "name": "title",
              "required": false,
              "type": "String"
            },
            {
              "name": "publisher",
              "required": false,
              "type": "String"
            },
            {
              "name": "place",
              "required": false,
              "type": "String"
            },
            {
              "name": "isbn",
              "required": false,
              "type": "String"
            },
            {
              "name": "pubMonth",
              "required": false,
              "type": "Number"
            },
            {
              "name": "pubYear",
              "required": false,
              "type": "Number"
            },
            {
              "name": "pubCategory",
              "required": false,
              "type": "String"
            },
            {
              "name": "isHardCopy",
              "required": false,
              "type": "Boolean"
            },
            {
              "name": "remarks",
              "required": false,
              "type": "String"
            }
          ]
    },
    "CP":{
       "modelFields": [
    {
      "name": "cid",
      "required": false,
      "type": "ObjectId"
    },
    {
      "name": "uid",
      "required": false,
      "type": "ObjectId"
    },
    {
      "name": "paperTitle",
      "required": false,
      "type": "String"
    },
    {
      "name": "organizer",
      "required": false,
      "type": "String"
    },
    {
      "name": "place",
      "required": false,
      "type": "String"
    },
    {
      "name": "isbn",
      "required": false,
      "type": "String"
    },
    {
      "name": "sPageNo",
      "required": false,
      "type": "Number"
    },
    {
      "name": "ePageNo",
      "required": false,
      "type": "Number"
    },
    {
      "name": "sDate",
      "required": false,
      "type": "Number"
    },
    {
      "name": "sMonth",
      "required": false,
      "type": "Number"
    },
    {
      "name": "sYear",
      "required": false,
      "type": "Number"
    },
    {
      "name": "eDate",
      "required": false,
      "type": "Number"
    },
    {
      "name": "eMonth",
      "required": false,
      "type": "Number"
    },
    {
      "name": "eYear",
      "required": false,
      "type": "Number"
    },
    {
      "name": "pubMonth",
      "required": false,
      "type": "String"
    },
    {
      "name": "pubYear",
      "required": false,
      "type": "String"
    },
    {
      "name": "publisher",
      "required": false,
      "type": "String"
    },
    {
      "name": "isHardCopy",
      "required": false,
      "type": "Boolean"
    },
    {
      "name": "isPublished",
      "required": false,
      "type": "Boolean"
    },
    {
      "name": "finType",
      "required": false,
      "type": "String"
    },
    {
      "name": "regionType",
      "required": false,
      "type": "String"
    },
    {
      "name": "authors",
      "required": false,
      "type": "String"
    },
    {
      "name": "remarks",
      "required": false,
      "type": "String"
    }
  ]
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
];

const EndpointList = {
    "BP": "/bookspublished",
    "CP": "/conferenceproceeding"
}

const AchievementDropDown = {
    "Books Published": "BP",
    "Conference Proceedings": "CP"
};

export { AchievementSchemaData, AchievementArray, EndpointList, AchievementDropDown };