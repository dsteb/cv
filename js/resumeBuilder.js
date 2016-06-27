var bio;

(function() {
  'use strict';

  bio = {
    name: 'Dmitrii Stebliuk',
    role: 'Senior Fullstack Developer',
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

  bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);

    $.each(this.contacts, function(key, value) {
      var template = HTMLcontacts[key];
      var formattedContact = template.replace('%contact%', key).replace('%data%', value);
      $('#topContacts').append(formattedContact);
    });

    $('#header').prepend(formattedRole).prepend(formattedName);
  };

  bio.display();
})();
