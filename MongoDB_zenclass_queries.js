// insert users collection
db.users.insertMany([{
  "userId": 1,
  "userName": "Ravi",
  "userEmail": "ravi@gmail.com",
  "batch": 35
},{
  "userId": 2,
  "userName": "Arul",
  "userEmail": "arul@gmail.com",
  "batch": 35
},{
  "userId": 3,
  "userName": "Kani",
  "userEmail": "kani@gmail.com",
  "batch": 35
},{
  "userId": 4,
  "userName": "Inba",
  "userEmail": "inba@gmail.com",
  "batch": 35
},{
  "userId": 5,
  "userName": "Mathi",
  "userEmail": "mathi@gmail.com",
  "batch": 36
},{
  "userId": 6,
  "userName": "Maaran",
  "userEmail": "maaran@gmail.com",
  "batch": 36
},{
  "userId": 7,
  "userName": "Arivu",
  "userEmail": "arivu@gmail.com",
  "batch": 36
},{
  "userId": 8,
  "userName": "Venba",
  "userEmail": "venba@gmail.com",
  "batch": 36
},{
  "userId": 9,
  "userName": "Vetri",
  "userEmail": "vetri@gmail.com",
  "batch": 37
},{
  "userId": 10,
  "userName": "Elakkiya",
  "userEmail": "elakkiya@gmail.com",
  "batch": 37
},{
  "userId": 11,
  "userName": "Anbu",
  "userEmail": "anbu@gmail.com",
  "batch": 37
},{
  "userId": 12,
  "userName": "Eniyan",
  "userEmail": "eniyan@gmail.com",
  "batch": 37
},{
  "userId": 13,
  "userName": "Malar",
  "userEmail": "malar@gmail.com",
  "batch": 38
},{
  "userId": 14,
  "userName": "Guna",
  "userEmail": "guna@gmail.com",
  "batch": 38
},{
  "userId": 15,
  "userName": "Kayal",
  "userEmail": "kayal@gmail.com",
  "batch": 38
},{
  "userId": 16,
  "userName": "Balan",
  "userEmail": "balan@gmail.com",
  "batch": 38
},{
  "userId": 17,
  "userName": "Arun",
  "userEmail": "arun@gmail.com",
  "batch": 39
},{
  "userId": 18,
  "userName": "Selvi",
  "userEmail": "selvi@gmail.com",
  "batch": 39
},{
  "userId": 19,
  "userName": "Kavin",
  "userEmail": "kavin@gmail.com",
  "batch": 39
},{
  "userId": 20,
  "userName": "Aanandhi",
  "userEmail": "aanandhi@gmail.com",
  "batch": 39
}]);
// insert codekata collection
db.codekata.insertMany([{
  "codekataId": 1,
  "codekataTitle": "Absolute Beginner",
  "solvedUsersId": [1, 3, 4, 5, 7, 9, 10, 11, 13, 14, 16, 18, 19, 20]
},{
  "codekataId": 2,
  "codekataTitle": "Looping",
  "solvedUsersId": [2, 5, 6, 8, 9, 11, 12, 15, 17, 20]
},{
  "codekataId": 3,
  "codekataTitle": "Algorithm",
  "solvedUsersId": [3, 6, 7, 10, 13, 15, 18, 19]
},{
  "codekataId": 4,
  "codekataTitle": "Data Structures",
  "solvedUsersId": [1, 2, 4, 5, 8, 9, 11, 12, 14, 16, 17, 20]
},{
  "codekataId": 5,
  "codekataTitle": "Hashing",
  "solvedUsersId": [3, 5, 8, 10, 13, 18]
},{
  "codekataId": 6,
  "codekataTitle": "Queue",
  "solvedUsersId": [2, 3, 4, 9, 12, 14, 15, 16, 19]
}]);
// insert attendance collection
db.attendance.insertMany([{
  "date": new Date("2020-09-19"),
  "absenteesId": [3, 9, 12, 17]
},{
  "date": new Date("2020-09-27"),
  "absenteesId": [2, 7, 13]
},{
  "date": new Date("2020-10-03"),
  "absenteesId": [5, 8, 11, 14, 19]
},{
  "date": new Date("2020-10-18"),
  "absenteesId": [4]
},{
  "date": new Date("2020-10-26"),
  "absenteesId": [1, 15]
},{
  "date": new Date("2020-11-05"),
  "absenteesId": [6, 10, 16, 18, 20]
}]);
// insert topics collection
db.topics.insertMany([{
  "taskId": 1,
  "topicId": 1,
  "topicName": "HTML",
  "date": new Date("2020-09-19")
},{
  "taskId": 2,
  "topicId": 2,
  "topicName": "CSS",
  "date": new Date("2020-09-27")
},{
  "taskId": 3,
  "topicId": 3,
  "topicName": "JavaScript",
  "date": new Date("2020-10-03")
},{
  "taskId": 4,
  "topicId": 4,
  "topicName": "React.js",
  "date": new Date("2020-10-18")
},{
  "taskId": 5,
  "topicId": 5,
  "topicName": "MongoDB",
  "date": new Date("2020-10-26")
},{
  "taskId": 6,
  "topicId": 6,
  "topicName": "Node.js",
  "date": new Date("2020-11-05")
}]);
// insert tasks collection
db.tasks.insertMany([{
  "taskId": 1,
  "taskName": "Form creation",
  "date": new Date("2020-09-19"),
  "submittedStudentsId": [3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 17, 18, 19],
  "notSubmittedStudId": [1, 2, 8, 12, 15, 16, 20]
},{
  "taskId": 2,
  "taskName": "Responsive web design",
  "date": new Date("2020-09-27"),
  "submittedStudentsId": [1, 2, 3, 4, 6, 7, 8, 11, 12, 15, 16, 20],
  "notSubmittedStudId": [5, 9, 10, 13, 14, 17, 18, 19]
},{
  "taskId": 3,
  "taskName": "Array methods",
  "date": new Date("2020-10-03"),
  "submittedStudentsId": [1, 2, 5, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  "notSubmittedStudId": [3, 4, 6, 7, 11]
},{
  "taskId": 4,
  "taskName": "Admin portal",
  "date": new Date("2020-10-18"),
  "submittedStudentsId": [1, 3, 6, 7, 9, 10, 12, 14, 17, 18],
  "notSubmittedStudId": [2, 4, 5, 8, 11, 13, 15, 16, 19, 20]
},{
  "taskId": 5,
  "taskName": "Product database queries",
  "date": new Date("2020-10-26"),
  "submittedStudentsId": [2, 4, 5, 8, 11, 13, 19, 20],
  "notSubmittedStudId": [1, 3, 6, 7, 9, 10, 12, 14, 15, 16, 17, 18]
},{
  "taskId": 6,
  "taskName": "Hall booking API",
  "date": new Date("2020-11-05"),
  "submittedStudentsId": [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19],
  "notSubmittedStudId": [1, 4, 6, 14, 17, 20]
}]);
// insert company_drives collection
db.company_drives.insertMany([{
  "companyId": 1,
  "companyName": "Meta",
  "driveDate": new Date("2020-08-24"),
  "appearedStudentsId": [2, 4, 5, 6, 8, 11, 13, 17, 19]
},{
  "companyId": 2,
  "companyName": "Amazon",
  "driveDate": new Date("2020-09-12"),
  "appearedStudentsId": [1, 3, 7, 9, 12, 14, 15]
},{
  "companyId": 3,
  "companyName": "Apple",
  "driveDate": new Date("2020-09-27"),
  "appearedStudentsId": [3, 5, 6, 9, 13, 16, 18, 20]
},{
  "companyId": 4,
  "companyName": "Netflix",
  "driveDate": new Date("2020-10-19"),
  "appearedStudentsId": [1, 4, 7, 11, 14, 15]
},{
  "companyId": 5,
  "companyName": "Google",
  "driveDate": new Date("2020-10-25"),
  "appearedStudentsId": [2, 3, 5, 8, 9, 10, 12, 15, 16, 17, 19]
},{
  "companyId": 6,
  "companyName": "Microsoft",
  "driveDate": new Date("2020-11-07"),
  "appearedStudentsId": [1, 3, 4, 11, 14, 18, 20]
}]);
// insert mentors collection
db.mentors.insertMany([{
  "mentorId": 1,
  "mentorName": "Ragav Kumar",
  "mentorEmail": "ragav@gmail.com",
  "menteesId": [1, 2, 3, 4, 9, 10, 11, 12, 17, 18, 19]
},{
  "mentorId": 2,
  "mentorName": "Vidhya",
  "mentorEmail": "vidhya@gmail.com",
  "menteesId": [5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20]
},{
  "mentorId": 3,
  "mentorName": "Sai Mohan",
  "mentorEmail": "mohan@gmail.com",
  "menteesId": [1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20]
},{
  "mentorId": 4,
  "mentorName": "Raja Vasanthan",
  "mentorEmail": "rv@gmail.com",
  "menteesId": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
},{
  "mentorId": 5,
  "mentorName": "Prabakaran",
  "mentorEmail": "praba@gmail.com",
  "menteesId": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
},{
  "mentorId": 6,
  "mentorName": "Arun Prakash",
  "mentorEmail": "arun@gmail.com",
  "menteesId": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
}]);

// 1. Find all the topics and tasks which are taught in the month of October
db.topics.aggregate([
  {
    $lookup: {
      from: "tasks",
      localField: "taskId",
      foreignField: "taskId",
      as: "taskDetails",
    },
  },
  {
    $project: {
      topicName: 1,
      taskName: "$taskDetails.taskName",
      date: 1,
      month: {
        $month: "$date",
      },
    },
  },
  {
    $match: {
      month: 10,
    },
  },
  {
    $unwind: "$taskName",
  },
  {
    $project: {
      month: 0,
    },
  },
]);
// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.aggregate([
  {
    $project: {
      companyName: "$companyName",
      date: "$driveDate",
    },
  },
  {
    $match: {
      date: {
        $gt: ISODate("2020-10-15"),
        $lt: ISODate("2020-10-31"),
      },
    },
  },
]);
// 3. Find all the company drives and students who are appeared for the placement
db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "appearedStudentsId",
      foreignField: "userId",
      as: "appearedStudentsDetails",
    },
  },
  {
    $project: {
      companyName: 1,
      appearedStudents: "$appearedStudentsDetails.userName",
    },
  },
]);
// 4. Find the number of problems solved by the user in codekata
db.users.aggregate([
  {
    $lookup: {
      from: "codekata",
      localField: "userId",
      foreignField: "solvedUsersId",
      as: "codekataDetails",
    },
  },
  {
    $project: {
      userName: 1,
      codekataSolved: {
        $size: "$codekataDetails",
      },
    },
  },
]);
// 5. Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([
  {
    $project: {
      mentorName: 1,
      menteesCount: {
        $size: "$menteesId",
      },
    },
  },
  {
    $match: {
      menteesCount: {
        $gt: 15,
      },
    },
  },
]);
// 6. Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([
  {
    $match: {
      date: {
        $gt: ISODate("2020-10-15"),
        $lt: ISODate("2020-10-31"),
      },
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "date",
      foreignField: "date",
      as: "taskDetails",
    },
  },
  {
    $unwind: "$taskDetails",
  },
  {
    $project: {
      date: 1,
      absenteesCount: {
        $size: "$absenteesId",
      },
      notSubmittedStudCount: {
        $size: "$taskDetails.notSubmittedStudId",
      },
    },
  },
]);