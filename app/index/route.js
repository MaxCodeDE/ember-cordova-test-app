import Ember from 'ember';

export default Ember.Route.extend({
    
    actions: {
        test() {
            showDoalog();
        }
    }

});

function showDoalog() {
    navigator.notification.alert(
        'Mach besser weiter so. Fische brauchen Wasser.',// message
        null,// callback
        'Gut so!',// title
        'Fertig'// buttonName
    );
}