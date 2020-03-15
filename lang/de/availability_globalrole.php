<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Availability globalrole
 *
 * @package    availability_globalrole
 * @copyright  2020 Center for Learningmanagement (www.lernmanagement.at)
 * @author     Robert Schrenk
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['description'] = 'Eine globale Rolle als Voraussetzung einstellen.';
$string['error_selectrole'] = 'Sie müssen eine Rolle wählen';
$string['missing'] = '[Rolle fehlt]';

$string['pluginname'] = 'Voraussetzung Globale Rolle';
$string['requires_role'] = 'Verfügbar für: <em>{$a}</em>';
$string['requires_notrole'] = 'Sie sind nicht: <em>{$a}</em>';

$string['setting:roles'] = 'Unterstützte Rollen';
$string['setting:roles:description'] = 'Bitte legen Sie fest, welche globalen Rollen zur Auswahl stehen.';
$string['title'] = 'Globale Rolle';
