const obj = {
    "status": true,
    "message": "successfully fetched all the data from cateogory 1003",
    "data": [
      {
        "category_id": "1003",
        "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
        "title": "Laugh at My Pain",
        "authors": [
          {
            "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
            "profile_name": "Kevin Hart",
            "verified": false
          }
        ],
        "others": {
          "views": "1.1K",
          "posted_date": "13885"
        }
      },
      {
        "category_id": "1003",
        "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
        "title": "Inside Amy Schumer",
        "authors": [
          {
            "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
            "profile_name": "Amy Schumer",
            "verified": ""
          }
        ],
        "others": {
          "views": "3.6K",
          "posted_date": "15147"
        }
      },
      {
        "category_id": "1003",
        "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
        "title": "Sticks & Stones",
        "authors": [
          {
            "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
            "profile_name": "Dave Chappelle",
            "verified": true
          }
        ],
        "others": {
          "views": "113K",
          "posted_date": ""
        }
      },
      {
        "category_id": "1003",
        "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
        "title": "30 Rock",
        "authors": [
          {
            "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
            "profile_name": "Tina Fey",
            "verified": false
          }
        ],
        "others": {
          "views": "4.5K",
          "posted_date": "14800"
        }
      },
      {
        "category_id": "1003",
        "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
        "title": "Kid Gorgeous",
        "authors": [
          {
            "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
            "profile_name": "John Mulaney",
            "verified": true
          }
        ],
        "others": {
          "views": "241K",
          "posted_date": ""
        }
      },
      {
        "category_id": "1003",
        "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
        "title": "Beyond The Pale",
        "authors": [
          {
            "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
            "profile_name": "Jim Gaffigan",
            "verified": false
          }
        ],
        "others": {
          "views": "2.6K",
          "posted_date": "15400"
        }
      }
    ]
  }

  obj.data.sort((o1, o2) => o2.others.views.slice(0, o2.others.views.length - 1) - o1.others.views.slice(0, o1.others.views.length - 1))


  console.log(obj.data);
