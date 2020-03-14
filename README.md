moodle-availability_globalrole
========================

This plugin mainly builds upon the existing plugin availability_role. The intention is to make it possible for course trainers to restrict access based on a global role.


Requirements
------------

This plugin requires Moodle 3.5+


Motivation for this plugin
--------------------------

If your teachers want to restrict activities / resources / sections in their course to a subset of the course participants and these course participants share a common global role, this plugin is for you.

Have a look at an example:

* You have a global role for all teachers, but within your particular course, they are not enrolled as teachers
* You have courses with guest access, but only users with a global role are allowed to see certain resources, WITHOUT being enrolled to that course.


Installation
------------

Install the plugin like any other plugin to folder
/availability/condition/globalrole

See http://docs.moodle.org/en/Installing_plugins for details on installing Moodle plugins


Usage & Settings
----------------

After installing the plugin, you need to select which global roles are visible to end users.


Translating this plugin
-----------------------

This Moodle plugin is shipped with an english language pack only. All translations into other languages must be managed through AMOS (https://lang.moodle.org) by what they will become part of Moodle's official language pack.

As the plugin creator, we manage the translation into german for our own local needs on AMOS. Please contribute your translation into all other languages in AMOS where they will be reviewed by the official language pack maintainers for Moodle.
