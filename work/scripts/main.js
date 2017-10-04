//Copyright 2017 Aaron Ramirez

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*****************************************************************************
 *
 * Main App Object
 *
 ****************************************************************************/

(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.container'),
    addDialog: document.querySelector('.dialog-container'),
  };

  /*****************************************************************************
   *
   * Event Listeners for main UI
   *
   ****************************************************************************/

  document.getElementById('buttonRefresh').addEventListener('click', function() {
    //Refresh main UI
    app.updateUI();
  });

  document.getElementById('buttonAdd').addEventListener('click', function() {
    // Open/show the add new workout dialog
    app.toggleAddDialog(true);
  });

  document.getElementById('buttonAddWorkout').addEventListener('click', function() {
    // Add the newly selected workout
    var select = document.getElementById('selectWorkoutToAdd');
    var selected = select.options[select.selectedIndex];
    var key = selected.value;
    var label = selected.textContent;
    // TODO init the app.selectedWorkouts array here
    app.getWorkouts(key, label);
    // TODO push the selected workout to the array and save here
    app.toggleAddDialog(false);
  });

  document.getElementById('butAddCancel').addEventListener('click', function() {
    // Close the add new workout dialog
    app.toggleAddDialog(false);
  });



})();
