var placeholders = {
    data: '%data%',
    contact: '%contact%'
};

var bio = {
    name: 'Fernando Ferreira',
    role: 'Web Developer',
    contacts: {
        mobile: '+55 83 998925130',
        email: 'fernandoodf@gmail.com',
        linkedin: 'https://www.linkedin.com/in/fernandodof',
        github: 'www.github.com/fernnadodof',
        location: 'Campina Grande'
    },
    welcomeMessage: 'Helo ninjas !!!',
    skills: ['JAVA', 'JEE', 'JSF', 'JPA', 'Hibernate', 'Eclipse Link', 'RestEasy',
        'Maven', 'Jersey', 'PHP', 'Doctrine 2', 'SmartyPHP', 'Javascript', 'Angular JS',
        'JQuery', 'NodeJS', 'ExpressJS', 'Git', 'HTML', 'CSS', 'SASS', 'SQL', 'Scrum'
    ],
    biopic: 'http://en.gravatar.com/userimage/57982035/fba451bc86c18f85d5c441cf6cd00b5e.jpg?size=400',
    display: function() {
        var formattedName = HTMLheaderName.replace(placeholders.data, bio.name);
        var formattedRole = HTMLheaderRole.replace(placeholders.data, bio.role);

        var formatedMobile = HTMLmobile.replace(placeholders.data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(placeholders.data, bio.contacts.email);
        var formattedLinkedIn = HTMLcontactGeneric.replace(placeholders.contact, 'linkedIn').replace(placeholders.data, bio.contacts.linkedin);
        var formattedGit = HTMLgithub.replace(placeholders.data, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(placeholders.data, bio.contacts.location);

        var formattedPic = HTMLbioPic.replace(placeholders.data, bio.biopic);
        var formattedMsg = HTMLwelcomeMsg.replace(placeholders.data, bio.welcomeMessage);

        var formattedSkilsStart = HTMLskillsStart;
        var formattedSkills = '';
        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkills += HTMLskills.replace(placeholders.data, bio.skills[i]);
        }

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);

        $("#topContacts, #footerContacts").append(formatedMobile, formattedEmail, formattedLinkedIn, formattedGit, formattedLocation);

        $('#header').append(formattedPic);
        $('#header').append(formattedMsg);
        $('#header').append(formattedSkilsStart);

        $('#skills').append(formattedSkills);
    }
};

var education = {
    schools: [{
        name: 'Instituto Federal de Educação, Ciência e Tecnologia da Paraíba',
        location: 'Cajazeiras - PB - Brazil',
        degree: 'Analysis and Systems Development',
        majors: ['Software Engineering', 'Software Analysis', 'Project Management'], //
        dates: 'Augist 2010 - April 2015',
        url: 'http://www.ifpb.edu.br/'
    }, {
        name: 'Seneca College',
        location: 'Toronto - ON - Canada',
        degree: 'Computer Programmer (Sandwich graduation)',
        majors: ['Software Development'],
        dates: 'August 2012 - Augist 2013',
        url: 'http://www.senecacollege.ca/'
    }],
    onlineCourses: [{
        title: 'JavaScript Road Trip Part 3',
        school: 'Code School',
        dates: 'January 2015',
        url: 'https://www.codeschool.com/courses/javascript-road-trip-part-3'
    }, {
        title: 'Shaping up with Angular.js',
        school: 'Code School',
        dates: 'January 2015',
        url: 'https://www.codeschool.com/courses/shaping-up-with-angular-js'
    }, {
        title: 'Staying Sharp with Angular.js',
        school: 'Code CraftPro',
        dates: 'April 2015',
        url: 'https://www.codeschool.com/courses/staying-sharp-with-angular-js'
    }, {
        title: 'AngularJS: From Zero to Awesome',
        school: 'Code CraftPro',
        dates: 'October 2015',
        url: 'http://school.codecraftpro.com/p/angularjs-from-zero-to-awesome'
    }, {
        title: 'Real-time Web with Node.js',
        school: 'Code School',
        dates: 'Deceber 2014',
        url: 'https://www.codeschool.com/courses/real-time-web-with-node-js'
    }, {
        title: 'JavaScript Best Practices',
        school: 'Code School',
        dates: 'April 2015',
        url: 'https://www.codeschool.com/courses/javascript-best-practices'
    }, {
        title: 'JDK8 Lambdas and Streams Introduction',
        school: 'Oracle',
        dates: 'July 2015',
        url: 'https://apexapps.oracle.com/pls/apex/f?p=44785:145:0::::P145_EVENT_ID,P145_PREV_PAGE:4887,143'
    }, {
        title: 'Git Real',
        school: 'Code School',
        dates: 'April 2015',
        url: 'https://www.codeschool.com/courses/git-real'
    }, {
        title: 'Git Real 2',
        school: 'Code School',
        dates: 'April 2015',
        url: 'https://www.codeschool.com/courses/git-real-2'
    }],
    display: function() {

        for (var i = 0; i < education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace(placeholders.data, education.schools[i].name).replace('#', education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace(placeholders.data, education.schools[i].degree);
            var formattedSchoolDate = HTMLschoolDates.replace(placeholders.data, education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(placeholders.data, education.schools[i].location);
            var formattedSchoolMajos = HTMLschoolMajor.replace(placeholders.data, education.schools[i].majors.join(', '));

            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDate + formattedSchoolLocation + formattedSchoolMajos);
        }

        $('#education').append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $('#education').append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace(placeholders.data, education.onlineCourses[j].title).replace('#', education.onlineCourses[j].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace(placeholders.data, education.onlineCourses[j].school);
            var formattedOnlineDates = HTMLonlineDates.replace(placeholders.data, education.onlineCourses[j].dates);
            var formattedOnlineURL = HTMLonlineURL.replace(placeholders.data, education.onlineCourses[j].url);

            $('.education-entry:last').append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
        }

    }
};

var work = {
    jobs: [{
        employer: 'Virtus',
        title: 'Web Developer',
        location: 'Campina Grande',
        dates: 'April 2016',
        description: 'Font end development of a marketing campaign creation system with Javascript, AngularJS, HTML, CSS, Sass and related. And backend development with Java, Spring, Maven, Postgree and related technologies. The company that the project is developed to is called Valid.'
    }, {
        employer: 'Stefanini',
        title: 'Software Developer',
        location: 'Campina Grande',
        dates: 'October 2015 - April 2015',
        description: 'Click to edit position description Backend and frontend development. The project is the remodeling of the largest Bank of Brazil (Banco do Brasil) internal system and it takes place on a remote “software factory” that is constant contact with the Bank staff for the project development (JAVA, RestEasy, Maven, JBoss Seam, Javascript, JQuery, Angular, HTML5, CSS3).'
    }, {
        employer: 'Paraíba State University',
        title: 'Systems Analyst',
        location: 'Campina Grande',
        dates: 'August 2015 - October 2015',
        description: 'Worked on the advanced development department creating systems for the institution. This project was the integration of the university database with the LATTES platform which holds data related to professors academic production for the whole country (JAVA, JSF, JPA, SQL, SVN, HTML5, CSS3, Scrum).'
    }, {
        employer: 'Recursive',
        title: 'Junior Consultant',
        location: 'Cajazeiras',
        dates: 'August 2013 - March 2015',
        description: 'Analysis, systems development and database design. Technologies used: Java, PHP, Javascript, JQuery, HTML, CSS, MySQL and GIT.'
    }],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace(placeholders.data, work.jobs[i].employer);
            var formaterTitle = HTMLworkTitle.replace(placeholders.data, work.jobs[i].title);
            var formaterEmployerTitle = formattedEmployer + formaterTitle;
            $('.work-entry:last').append(formaterEmployerTitle);

            var formattedWorkDate = HTMLworkDates.replace(placeholders.data, work.jobs[i].dates);
            $('.work-entry:last').append(formattedWorkDate);

            var formattedDescription = HTMLworkDescription.replace(placeholders.data, work.jobs[i].description);
            $('.work-entry:last').append(formattedDescription);

        }
    }

};

var projects = {
    projects: [{
        title: 'Novus bet',
        dates: 'Setember 2016 - ',
        description: 'Soccer betting system',
        images: ['http://www.gamingsafe.net/images/Football1.jpg']
    }, {
        title: 'Angular Component',
        dates: 'August 2016',
        description: 'Showing the power of angular component',
        images: ['https://www.ng-book.com/images/ng2/ng2-component-code-screenshot-r13.jpg']
    }],
    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace(placeholders.data, projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace(placeholders.data, projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(placeholders.data, projects.projects[i].description);

            var formattedImages = '';
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                formattedImages += HTMLprojectImage.replace(placeholders.data, projects.projects[i].images[j]);
            }
            $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedImages);
        }
    }

};

var init = function() {
    bio.display();
    work.display();
    education.display();
    projects.display();

    $('#mapDiv').append(googleMap);
};

init();
