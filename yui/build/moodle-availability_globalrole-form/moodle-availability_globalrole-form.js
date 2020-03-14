YUI.add('moodle-availability_globalrole-form', function (Y, NAME) {

// JavaScript for form editing role conditions.
// ...@module moodle-availability_role-form.
M.availability_globalrole = M.availability_globalrole || {};

// ...@class M.availability_role.form.
// ...@extends M.core_availability.plugin.
M.availability_globalrole.form = Y.Object(M.core_availability.plugin);

// Roles available for selection.
// ...@property roles.
// ...@type Array.
M.availability_globalrole.form.roles = null;

/**
 * Initialises this plugin.
 *
 * @method initInner
 * @param {Array} roles Array of objects containing roleid => name
 */
M.availability_globalrole.form.initInner = function(roles) {
    this.roles = roles;
};

M.availability_globalrole.form.getNode = function(json) {
    // Create HTML structure.
    var html = '<label>' + M.util.get_string('title', 'availability_role') + ' ' +
            '<span class="availability-group">' +
            '<select name="id">' +
            '<option value="choose">' + M.util.get_string('choosedots', 'moodle') + '</option>';
    Y.each(this.roles, function(role) {
        html += '<option value="' + role.id + '">' + role.name + '</option>';
    });
    html += '</select></span></label>';
    var node = Y.Node.create('<span>' + html + '</span>');

    // Set initial value if specified.
    if (json.id !== undefined &&
            node.one('select[name=id] > option[value=' + json.id + ']')) {
        node.one('select[name=id]').set('value', '' + json.id);
    }

    // Add event handlers (first time only).
    if (!M.availability_globalrole.form.addedEvents) {
        M.availability_globalrole.form.addedEvents = true;
        var root = Y.one('.availability-field');
        root.delegate('change', function() {
            // Just update the form fields.
            M.core_availability.form.update();
        }, '.availability_globalrole select');
    }

    return node;
};

M.availability_globalrole.form.fillValue = function(value, node) {
    var selected = node.one('select[name=id]').get('value');
    if (selected === 'choose') {
        value.id = 'choose';
    } else {
        value.id = parseInt(selected, 10);
    }
};

M.availability_globalrole.form.fillErrors = function(errors, node) {
    var value = {};
    this.fillValue(value, node);

    // Check grouping item id.
    if (value.id === 'choose') {
        errors.push('availability_role:error_selectrole');
    }
};


}, '@VERSION@', {"requires": ["base", "node", "event", "moodle-core_availability-form"]});
