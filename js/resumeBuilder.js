var bio, work, projects;

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

    $('#header').prepend(formattedRole).prepend(formattedName);
    $('#header').append(formattedPic).append(formattedMsg);

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
      $entry.append(formattedTitle).append(formattedDates);
      $entry.append(formattedLocation).append(formattedDescription);
    });
  };

  projects.display = function() {
    this.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      var $entry = $('.project-entry:last').append(formattedTitle);
      $entry.append(formattedDates).append(formattedDescription);

      project.images.forEach(function(img) {
        var formattedImg = HTMLprojectImage.replace('%data%', img);
        $entry.append(formattedImg);
      });
    });
  };

  bio.display();
  work.display();
  projects.display();
})();
