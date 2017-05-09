/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * mathcalc module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function mathcalcContentViewModel() {
        var self = this;
        self.firstnumber = ko.observable();
        self.secondnumber = ko.observable();
        self.result = ko.observable();
        
        self.addNumbers = function () {
            var fnumber = Number(self.firstnumber());
            var snumber = Number(self.secondnumber());
            
            self.result(fnumber + snumber);
        }
    }
    
    return mathcalcContentViewModel;
});
