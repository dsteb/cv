var bio, work, projects, education;

(function() {
  'use strict';

  bio = {
    name: 'Dmitrii Stebliuk',
    role: 'Senior Full Stack Developer',
    contacts: {
      mobile: '(+39) 327-568-43-13',
      email: 'dsteblyuk@gmail.com',
      github: 'dsteb',
      linkedin: 'dsteb',
      location: 'Milan, Italy'
    },
    welcomeMessage: 'Life is study',
    skills: ['Java', 'SQL', 'HTML5', 'CSS', 'Bootstrap', 'Javascript', 'JQuery', 'Python', 'Linux'],
    biopic: 'images/dima.jpg',
    customLocations: ['Krasnoyarsk, Russia']
  };

  bio.locationDescription = {
    'Krasnoyarsk': 'Here I was born and finished my high school.',
    'Saint Petersburg': 'Here I got Bachelor, Master degrees and my working experience',
    'Milan': 'Here I got my second Master degree and continue to work and enjoy my life'
  };

  work = {
    jobs: [{
      employer: 'VGS srl',
      title: 'Software Engineer',
      location: 'Milan, Italy',
      dates: 'Mar, 2015 - Current time',
      url: 'http://www.vgs.com/',
      description:
        'Successfully implemented and passed certification of large ' +
        'Italian fiscal system (SIAE) for an existing ticketing software.' +
        '<br><i>Tags: </i> Java8, MSSQL, Linux, Javascript, HTML, CSS, Tomcat, Apache'
    }, {
      employer: 'Itrium-SPb',
      title: 'Software Engineer',
      location: 'Saint-Petersburg, Russia',
      dates: 'Feb, 2010 -  Feb, 2014',
      url: 'http://itrium.ru',
      description:
        'Full Stack web developer. Successfully implemented and participated ' +
        'in a lot of interesting and different projects with various ' +
        'technologies.' +
        '<br><i>Tags: </i> Java, JPA, JAX-WS, Maven, MySQL, Linux, Bash, ' +
        'JS, HTML5, CSS, ' +
        'LESS, Agile, Scrum, Kanban, Continious Integration, Jenkins, ' +
        'Python, Django'
    }]
  };

  projects = {
    projects: [{
      title: 'Portfolio',
      dates: '2016',
      description:
        'Variety of frontend projects are done with the help of Udacity. ' +
        '<br><i>Tags: </i> HTML5, CSS, Bootstrap, JS, Responsiveness, ' +
        'Grunt, Semantic layout, ' +
        'JQuery, git',
      images: ['images/project.jpg'],
      url: 'https://dsteb.github.io/portfolio'
    }]
  };

  education = {
    schools: [{
      name: 'Politecnico di Milano',
      location: 'Milano, Italy',
      degree: 'MSc',
      majors: ['CS'],
      dates: '2014 — 2016',
      url: 'http://polimi.it/en/'
    }, {
      name: 'Saint-Petersburg Electrotechnical University "LETI"',
      location: 'Saint-Petersburg, Russia',
      degree: 'MSc, BSc',
      majors: ['CS'],
      dates: '2004 — 2010',
      url: 'http://eltech.ru/en'
    }],
    onlineCourses: [{
      title: 'Frontend Web Developer',
      school: 'Udacity',
      dates: '2016',
      url: 'https://udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],
    languages: ['Russian', 'English', 'Italian'],
    certifications: [{
      date: 'September, 2013',
      title: 'IELTS',
      description: 'International English Language Testing System',
    }, {
      date: 'Febraury, 2011',
      title: 'Sun SCJP',
      description: 'Oracle Sun Certified Java Programmer, SE 6'
    }]
  };

  bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedPic = HTMLbioPic.replace('%data%', this.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

    $.each(this.contacts, function(key, value) {
      var template = HTMLcontacts[key] || HTMLcontactGeneric;
      var formattedContact = template.replace('%contact%', key).replace(/%data%/g, value);
      $('#topContacts').append(formattedContact);
      $('#footerContacts').append(formattedContact);
    });

    $('#header').prepend([formattedName, formattedRole]);
    $('#header').append([formattedPic, formattedMsg]);

    $('#header').append(HTMLskillsStart);
    this.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);
    });
  };

  work.display = function() {
    this.jobs.forEach(function(job) {
      var formattedTitle = HTMLworkEmployer.replace('%data%', job.employer);
      formattedTitle = formattedTitle.replace('#', job.url);
      formattedTitle += HTMLworkTitle.replace('%data%', job.title);
      var formattedDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
      var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

      $('#workExperience').append(HTMLworkStart);
      var $entry = $('.work-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLocation,
        formattedDescription]);
    });
  };

  projects.display = function() {
    this.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      formattedTitle = formattedTitle.replace('#', project.url);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      var $entry = $('.project-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedDescription]);

      project.images.forEach(function(img) {
        var formattedImg = HTMLprojectImage.replace('%data%', img);
        formattedImg = formattedImg.replace('#', project.url);
        $entry.append(formattedImg);
      });
    });
  };

  education.display = function() {
    this.schools.forEach(function(school) {
      var formattedTitle = HTMLschoolName.replace('%data%', school.name);
      formattedTitle = formattedTitle.replace('#', school.url);
      formattedTitle += HTMLschoolDegree.replace('%data%', school.degree);
      var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
      var majors = school.majors.join(', ');
      var formattedMajor = HTMLschoolMajor.replace('%data%', majors);

      $('#schools').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLocation,
        formattedMajor]);
    });

    $('#classes').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
      formattedTitle = formattedTitle.replace('#', course.url);
      formattedTitle += HTMLonlineSchool.replace('%data%', course.school);
      var formattedDates = HTMLonlineDates.replace('%data%', course.dates);

      $('#classes').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDates]);
    });

    $('#certs').append(HTMLcertStart);
    this.certifications.forEach(function(cert) {
      var formattedTitle = HTMLcertTitle.replace('%data%', cert.title);
      formattedTitle += HTMLcertDesc.replace('%data%', cert.description);
      var formattedDate = HTMLcertDate.replace('%data%', cert.date);
      $('#certs').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDate]);
    });

    $('#languages').append(HTMLlanguagesStart);
    var languages = this.languages.join(', ');
    var formattedLanguages = HTMLlanguagesList.replace('%data%', languages);
    $('#languages').append(formattedLanguages);
  };

  bio.display();
  work.display();
  projects.display();
  education.display();

  $('#mapDiv').append(googleMap);
})();
