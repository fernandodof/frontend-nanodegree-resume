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
        var formatedName = HTMLheaderName.replace('%data%', bio.name);
        var formatedRole = HTMLheaderRole.replace('%data%', bio.role);

        var formaterMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formatedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formatedLinkedIn = HTMLcontactGeneric.replace('%contact%', 'linkedIn').replace('%data%', bio.contacts.linkedin);
        var formatedGit = HTMLgithub.replace('%data%', bio.contacts.github);
        var formatedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

        var formatedPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formatedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        var formatedSkilsStart = HTMLskillsStart;
        var formatedSkills = HTMLskills.replace('%data%', bio.skills.join(', '));

        $('#header').prepend(formatedRole);
        $('#header').prepend(formatedName);

        $('#topContacts').append(formaterMobile);
        $('#topContacts').append(formatedEmail);
        $('#topContacts').append(formatedLinkedIn);
        $('#topContacts').append(formatedGit);
        $('#topContacts').append(formatedLocation);

        $('#header').append(formatedPic);
        $('#header').append(formatedMsg);

        $('#header').append(formatedSkilsStart);
        $('#skills').append(formatedSkills);
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

            var formatedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
            var formatedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var formatedSchoolDate = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var formatedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var formatedSchoolMajos = HTMLschoolMajor.replace('%data%', education.schools[i].majors.join(', '));

            $('.education-entry:last').append(formatedSchoolName + formatedSchoolDegree + formatedSchoolDate + formatedSchoolLocation + formatedSchoolMajos);
        }

        $('#education').append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            $('#education').append(HTMLschoolStart);

            var formatedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
            var formatedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);;
            var formatedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);;
            var formatedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);

            $('.education-entry:last').append(formatedOnlineTitle + formatedOnlineSchool + formatedOnlineDates + formatedOnlineURL);
        }

    }
};

var work = {
    jobs: [{
        employer: 'Virtus',
        title: 'Web Developer',
        location: 'Campina Grande',
        dates: {
            from: 'April 2016',
            to: ''
        },
        description: 'Font end development of a marketing campaign creation system with Javascript, AngularJS, HTML, CSS, Sass and related. And backend development with Java, Spring, Maven, Postgree and related technologies. The company that the project is developed to is called Valid.'
    }, {
        employer: 'Stefanini',
        title: 'Software Developer',
        location: 'Campina Grande',
        dates: {
            from: 'October 2015',
            to: 'April 2015'
        },
        description: 'Click to edit position description Backend and frontend development. The project is the remodeling of the largest Bank of Brazil (Banco do Brasil) internal system and it takes place on a remote “software factory” that is constant contact with the Bank staff for the project development (JAVA, RestEasy, Maven, JBoss Seam, Javascript, JQuery, Angular, HTML5, CSS3).'
    }, {
        employer: 'Paraíba State University',
        title: 'Systems Analyst',
        location: 'Campina Grande',
        dates: {
            from: 'August 2015',
            to: 'October 2015'
        },
        description: 'Worked on the advanced development department creating systems for the institution. This project was the integration of the university database with the LATTES platform which holds data related to professors academic production for the whole country (JAVA, JSF, JPA, SQL, SVN, HTML5, CSS3, Scrum).'
    }, {
        employer: 'Recursive',
        title: 'Junior Consultant',
        location: 'Cajazeiras',
        dates: {
            from: 'August 2013',
            to: 'March 2015'
        },
        description: 'Analysis, systems development and database design. Technologies used: Java, PHP, Javascript, JQuery, HTML, CSS, MySQL and GIT.'
    }],
    display: function() {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var formatedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formaterTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formaterEmployerTitle = formatedEmployer + formaterTitle;
            $('.work-entry:last').append(formaterEmployerTitle);

            var formatedWorkDate = HTMLworkDates.replace('%data%', work.jobs[job].dates.from + ' - ' + work.jobs[job].dates.to);
            $('.work-entry:last').append(formatedWorkDate);

            var formatedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formatedDescription);

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

            var formatedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            var formatedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            var formatedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

            var formatedImages = '';
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                formatedImages += HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
            }
            $('.project-entry:last').append(formatedProjectTitle + formatedProjectDates + formatedProjectDescription + formatedImages);
        }
    }

};

var init = function() {
    bio.display();
    work.display();
    education.display();
    projects.display();

    $('#mapDiv').append(googleMap);

    $('#topContacts').children().clone().appendTo('#footerContacts');
}

init();
