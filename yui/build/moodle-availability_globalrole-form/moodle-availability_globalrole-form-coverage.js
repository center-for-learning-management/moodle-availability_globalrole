if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/moodle-availability_globalrole-form/moodle-availability_globalrole-form.js']) {
   __coverage__['build/moodle-availability_globalrole-form/moodle-availability_globalrole-form.js'] = {"path":"build/moodle-availability_globalrole-form/moodle-availability_globalrole-form.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":66}}},"2":{"name":"(anonymous_2)","line":22,"loc":{"start":{"line":22,"column":43},"end":{"line":22,"column":59}}},"3":{"name":"(anonymous_3)","line":26,"loc":{"start":{"line":26,"column":41},"end":{"line":26,"column":56}}},"4":{"name":"(anonymous_4)","line":32,"loc":{"start":{"line":32,"column":23},"end":{"line":32,"column":38}}},"5":{"name":"(anonymous_5)","line":48,"loc":{"start":{"line":48,"column":32},"end":{"line":48,"column":43}}},"6":{"name":"(anonymous_6)","line":57,"loc":{"start":{"line":57,"column":43},"end":{"line":57,"column":65}}},"7":{"name":"(anonymous_7)","line":66,"loc":{"start":{"line":66,"column":44},"end":{"line":66,"column":67}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":77,"column":90}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":60}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":70}},"4":{"start":{"line":14,"column":0},"end":{"line":14,"column":44}},"5":{"start":{"line":22,"column":0},"end":{"line":24,"column":2}},"6":{"start":{"line":23,"column":4},"end":{"line":23,"column":23}},"7":{"start":{"line":26,"column":0},"end":{"line":55,"column":2}},"8":{"start":{"line":28,"column":4},"end":{"line":31,"column":96}},"9":{"start":{"line":32,"column":4},"end":{"line":34,"column":7}},"10":{"start":{"line":33,"column":8},"end":{"line":33,"column":77}},"11":{"start":{"line":35,"column":4},"end":{"line":35,"column":39}},"12":{"start":{"line":36,"column":4},"end":{"line":36,"column":58}},"13":{"start":{"line":39,"column":4},"end":{"line":42,"column":5}},"14":{"start":{"line":41,"column":8},"end":{"line":41,"column":63}},"15":{"start":{"line":45,"column":4},"end":{"line":52,"column":5}},"16":{"start":{"line":46,"column":8},"end":{"line":46,"column":58}},"17":{"start":{"line":47,"column":8},"end":{"line":47,"column":48}},"18":{"start":{"line":48,"column":8},"end":{"line":51,"column":46}},"19":{"start":{"line":50,"column":12},"end":{"line":50,"column":46}},"20":{"start":{"line":54,"column":4},"end":{"line":54,"column":16}},"21":{"start":{"line":57,"column":0},"end":{"line":64,"column":2}},"22":{"start":{"line":58,"column":4},"end":{"line":58,"column":60}},"23":{"start":{"line":59,"column":4},"end":{"line":63,"column":5}},"24":{"start":{"line":60,"column":8},"end":{"line":60,"column":28}},"25":{"start":{"line":62,"column":8},"end":{"line":62,"column":42}},"26":{"start":{"line":66,"column":0},"end":{"line":74,"column":2}},"27":{"start":{"line":67,"column":4},"end":{"line":67,"column":19}},"28":{"start":{"line":68,"column":4},"end":{"line":68,"column":32}},"29":{"start":{"line":71,"column":4},"end":{"line":73,"column":5}},"30":{"start":{"line":72,"column":8},"end":{"line":72,"column":58}}},"branchMap":{"1":{"line":5,"type":"binary-expr","locations":[{"start":{"line":5,"column":28},"end":{"line":5,"column":53}},{"start":{"line":5,"column":57},"end":{"line":5,"column":59}}]},"2":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":4},"end":{"line":39,"column":4}},{"start":{"line":39,"column":4},"end":{"line":39,"column":4}}]},"3":{"line":39,"type":"binary-expr","locations":[{"start":{"line":39,"column":8},"end":{"line":39,"column":29}},{"start":{"line":40,"column":12},"end":{"line":40,"column":71}}]},"4":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":4},"end":{"line":45,"column":4}},{"start":{"line":45,"column":4},"end":{"line":45,"column":4}}]},"5":{"line":59,"type":"if","locations":[{"start":{"line":59,"column":4},"end":{"line":59,"column":4}},{"start":{"line":59,"column":4},"end":{"line":59,"column":4}}]},"6":{"line":71,"type":"if","locations":[{"start":{"line":71,"column":4},"end":{"line":71,"column":4}},{"start":{"line":71,"column":4},"end":{"line":71,"column":4}}]}},"code":["(function () { YUI.add('moodle-availability_globalrole-form', function (Y, NAME) {","","// JavaScript for form editing role conditions.","// ...@module moodle-availability_role-form.","M.availability_globalrole = M.availability_globalrole || {};","","// ...@class M.availability_role.form.","// ...@extends M.core_availability.plugin.","M.availability_globalrole.form = Y.Object(M.core_availability.plugin);","","// Roles available for selection.","// ...@property roles.","// ...@type Array.","M.availability_globalrole.form.roles = null;","","/**"," * Initialises this plugin."," *"," * @method initInner"," * @param {Array} roles Array of objects containing roleid => name"," */","M.availability_globalrole.form.initInner = function(roles) {","    this.roles = roles;","};","","M.availability_globalrole.form.getNode = function(json) {","    // Create HTML structure.","    var html = '<label>' + M.util.get_string('title', 'availability_role') + ' ' +","            '<span class=\"availability-group\">' +","            '<select name=\"id\">' +","            '<option value=\"choose\">' + M.util.get_string('choosedots', 'moodle') + '</option>';","    Y.each(this.roles, function(role) {","        html += '<option value=\"' + role.id + '\">' + role.name + '</option>';","    });","    html += '</select></span></label>';","    var node = Y.Node.create('<span>' + html + '</span>');","","    // Set initial value if specified.","    if (json.id !== undefined &&","            node.one('select[name=id] > option[value=' + json.id + ']')) {","        node.one('select[name=id]').set('value', '' + json.id);","    }","","    // Add event handlers (first time only).","    if (!M.availability_globalrole.form.addedEvents) {","        M.availability_globalrole.form.addedEvents = true;","        var root = Y.one('.availability-field');","        root.delegate('change', function() {","            // Just update the form fields.","            M.core_availability.form.update();","        }, '.availability_globalrole select');","    }","","    return node;","};","","M.availability_globalrole.form.fillValue = function(value, node) {","    var selected = node.one('select[name=id]').get('value');","    if (selected === 'choose') {","        value.id = 'choose';","    } else {","        value.id = parseInt(selected, 10);","    }","};","","M.availability_globalrole.form.fillErrors = function(errors, node) {","    var value = {};","    this.fillValue(value, node);","","    // Check grouping item id.","    if (value.id === 'choose') {","        errors.push('availability_role:error_selectrole');","    }","};","","","}, '@VERSION@', {\"requires\": [\"base\", \"node\", \"event\", \"moodle-core_availability-form\"]});","","}());"]};
}
var __cov_k0Oq5TqUfsmyTR8HqJEP3Q = __coverage__['build/moodle-availability_globalrole-form/moodle-availability_globalrole-form.js'];
__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['1']++;YUI.add('moodle-availability_globalrole-form',function(Y,NAME){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['1']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['2']++;M.availability_globalrole=(__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['1'][0]++,M.availability_globalrole)||(__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['1'][1]++,{});__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['3']++;M.availability_globalrole.form=Y.Object(M.core_availability.plugin);__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['4']++;M.availability_globalrole.form.roles=null;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['5']++;M.availability_globalrole.form.initInner=function(roles){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['2']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['6']++;this.roles=roles;};__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['7']++;M.availability_globalrole.form.getNode=function(json){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['3']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['8']++;var html='<label>'+M.util.get_string('title','availability_role')+' '+'<span class="availability-group">'+'<select name="id">'+'<option value="choose">'+M.util.get_string('choosedots','moodle')+'</option>';__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['9']++;Y.each(this.roles,function(role){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['4']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['10']++;html+='<option value="'+role.id+'">'+role.name+'</option>';});__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['11']++;html+='</select></span></label>';__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['12']++;var node=Y.Node.create('<span>'+html+'</span>');__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['13']++;if((__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['3'][0]++,json.id!==undefined)&&(__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['3'][1]++,node.one('select[name=id] > option[value='+json.id+']'))){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['2'][0]++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['14']++;node.one('select[name=id]').set('value',''+json.id);}else{__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['2'][1]++;}__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['15']++;if(!M.availability_globalrole.form.addedEvents){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['4'][0]++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['16']++;M.availability_globalrole.form.addedEvents=true;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['17']++;var root=Y.one('.availability-field');__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['18']++;root.delegate('change',function(){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['5']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['19']++;M.core_availability.form.update();},'.availability_globalrole select');}else{__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['4'][1]++;}__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['20']++;return node;};__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['21']++;M.availability_globalrole.form.fillValue=function(value,node){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['6']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['22']++;var selected=node.one('select[name=id]').get('value');__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['23']++;if(selected==='choose'){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['5'][0]++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['24']++;value.id='choose';}else{__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['5'][1]++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['25']++;value.id=parseInt(selected,10);}};__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['26']++;M.availability_globalrole.form.fillErrors=function(errors,node){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.f['7']++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['27']++;var value={};__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['28']++;this.fillValue(value,node);__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['29']++;if(value.id==='choose'){__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['6'][0]++;__cov_k0Oq5TqUfsmyTR8HqJEP3Q.s['30']++;errors.push('availability_role:error_selectrole');}else{__cov_k0Oq5TqUfsmyTR8HqJEP3Q.b['6'][1]++;}};},'@VERSION@',{'requires':['base','node','event','moodle-core_availability-form']});
