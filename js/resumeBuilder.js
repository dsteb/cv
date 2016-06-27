var bio, work, projects, education;

(function() {
  'use strict';

  bio = {
    name: 'Dmitrii Stebliuk',
    role: 'Senior Full Stack Developer',
    contacts: {
      mobile: '(+39) 327-568-43-13',
      email: 'dsteblyuk@gmail.com',
      github: 'https://github.com/n43jl',
      location: 'Milan, Italy'
    },
    welcomeMessage: 'Life is study',
    skills: ['Java', 'SQL', 'HTML5', 'CSS', 'Javascript', 'JQuery', 'Python'],
    biopic: 'images/fry.jpg',
  };

  work = {
    jobs: [{
      employer: 'VGS srl',
      title: 'Software Engineer',
      location: 'Milan, Italy',
      dates: 'March, 2015 - Current time',
      description:
        'Successfull implementation and certification of large ' +
        'Italian fiscal system (SIAE) for existing ticketing software. ' +
        'Rich javascript PDF editor for building reports with iText. ' +
        'Responsibility for Linux DevOps tasks.'
    }]
  };

  projects = {
    projects: [{
      title: 'Portfolio',
      dates: '2016',
      description:
        'The project is done during the Udacity ' +
        '"Frontend Web Developer" nanodegree program.',
      images: ['images/197x148.gif', 'images/197x148.gif']
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
    }],
    onlineCourses: [{
      title: 'Frontend Web Developer',
      school: 'Udacity',
      dates: '2016',
      url: 'http://udacity.com'
    }]
  };

  bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedPic = HTMLbioPic.replace('%data%', this.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

    $.each(this.contacts, function(key, value) {
      var template = HTMLcontacts[key];
      var formattedContact = template.replace('%contact%', key).replace('%data%', value);
      $('#topContacts').append(formattedContact);
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
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      var $entry = $('.project-entry:last')
      $entry.append([formattedTitle, formattedDates, formattedDescription]);

      project.images.forEach(function(img) {
        var formattedImg = HTMLprojectImage.replace('%data%', img);
        $entry.append(formattedImg);
      });
    });
  };

  education.display = function() {
    this.schools.forEach(function(school) {
      var formattedTitle = HTMLschoolName.replace('%data%', school.name);
      formattedTitle += HTMLschoolDegree.replace('%data%', school.degree);
      var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
      var majors = school.majors.join(', ');
      var formattedMajor = HTMLschoolMajor.replace('%data%', majors);

      $('#education').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLocation,
        formattedMajor]);
    });

    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
      formattedTitle += HTMLonlineSchool.replace('%data%', course.school);
      var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
      var formattedLink = HTMLonlineURL.replace('%data%', course.url);

      $('#education').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLink]);
    });
  };

  bio.display();
  work.display();
  projects.display();
  education.display();
})();
