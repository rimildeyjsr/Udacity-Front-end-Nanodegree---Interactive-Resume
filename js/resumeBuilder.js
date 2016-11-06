/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ],
    "biopic": "images/fry.jpg"
};

//Displays information from the bio object in thier appropiate section in the resume

bio.display = function() {
    var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedBioRole);

    var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedBioName);

    var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedContactMobile);

    var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedContactEmail);

    var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedContactGithub);

    var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedContactTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);

    for (var i=0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkill);

    }

    //Displaying the contact information in the footer section


    $("#footerContacts").append(formattedContactMobile);

    $("#footerContacts").append(formattedContactEmail);

    $("#footerContacts").append(formattedContactGithub);

    $("#footerContacts").append(formattedContactTwitter);


};

var education = {
    "schools": [{
        "name": "Nova Southeastern University",
        "location": "Fort Lauderdale, FL",
        "degree": "Masters",
        "majors": ["CS"],
        "dates": "2013",
        "url": "http://example.com"
    }, {
        "name": "Eckerd College",
        "location": "St. Petersburg, FL",
        "degree": "BA",
        "majors": ["CSE"],
        "dates": "2003",
        "url": "http://example.com"
    }],
    "onlineCourses": [{
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2014",
        "url": "http://www.udacity.com/course/ud804"
    }]

};

//Displays content form the education object in the appropriate sections of the resume

education.display = function() {
    for (var k=0 ; k < education.schools.length; k++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[k].name);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[k].degree);

        var formattedSchoolInfo = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolInfo);


        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[k].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[k].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[k].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

    }



    for (var i=0; i< education.onlineCourses.length; i++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);

        var formattedCourseSchoolInfo = formattedCourseTitle + formattedCourseSchool;
        $(".education-entry:last").append(formattedCourseSchoolInfo);

        var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedCourseDates);

        var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedCourseURL);
    }

};

var work = {
    "jobs": [{
        "employer": "Planet Express",
        "title": "Delivery Boy",
        "dates": "January 3000 - Future",
        "location": "Manhattan, NY",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum quam at tempus tristique." +
        " Maecenas ac leo porta nibh tristique ornare efficitur feugiat nulla. In interdum non lectus tincidunt vulputate. " +
        "Maecenas volutpat ut neque id pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
        "Cras pharetra velit id nisi tempus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a arcu ac " +
        "justo egestas laoreet sed sit amet magna. Pellentesque ante purus, pretium eget felis vitae, semper tincidunt felis."
    }, {
        "employer": "Panucci's Pizza",
        "title": "Delivery Boy",
        "dates": "1998 - December 31, 1999",
        "location": "Brooklyn, NY",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum quam at tempus tristique." +
        " Maecenas ac leo porta nibh tristique ornare efficitur feugiat nulla. In interdum non lectus tincidunt vulputate." +
        " Maecenas volutpat ut neque id pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus" +
        " mus. Cras pharetra velit id nisi tempus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a arcu" +
        " ac justo egestas laoreet sed sit amet magna. Pellentesque ante purus, pretium eget felis vitae, semper tincidunt felis."
    }]
};

//Displays work object contents in appropriate sections of the resume

work.display = function() {
    for (var i=0; i< work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkInfo = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedWorkInfo);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);


    }
};


var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum quam at tempus tristique. Maecenas" +
        " ac leo porta nibh tristique ornare efficitur feugiat nulla. In interdum non lectus tincidunt vulputate. Maecenas volutpat" +
        " ut neque id pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras pharetra" +
        " velit id nisi tempus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a arcu ac justo egestas " +
        "laoreet sed sit amet magna. Pellentesque ante purus, pretium eget felis vitae, semper tincidunt felis.",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    }]


};

//Displays contents from the projects object in appropriate section of the resume

projects.display = function() {
    for (var i=0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j< projects.projects[i].images.length; j++) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImages);
            }
        }


    }
};


//calling the object methods to populate the resume with content from the objects defined
bio.display();
projects.display();
work.display();
education.display();

function inName(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " +name[1];
}

$("#main").append(internationalizeButton); //appends internationalize button
$("#mapDiv").append(googleMap); // appends a map to the resume