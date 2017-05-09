/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * products module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojinputnumber'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function productsContentViewModel() {
        var self = this;
        self.nameVal = ko.observable();
        self.sku = ko.observable();
        self.buyingPrice = ko.observable();
        self.sellingPrice = ko.observable();
        
        self.categories = ko.observableArray([
            {value: 'fr', label: 'Fruits'},
            {value: 'vg',    label: 'Vegetables'},
            {value: 'bg',   label: 'Beverages'}
        ]);
        
        self.subCategories = ko.observableArray();
        self.selectedSubCategories = ko.observableArray();
        
        self.loadSubCategories = function (event, data) {
            
            console.log(data);
            
            if(data.option == 'value') {
                self.selectedSubCategories([]);
                var scategories = [];
                if(data.value[0] == 'fr') {
                    scategories.push({label: 'Apple', value: 'ap'});
                    scategories.push({label: 'Orange', value: 'or'});
                }
                else if(data.value[0] == 'vg') {
                    scategories.push({label: 'Potato', value: 'to'});
                    scategories.push({label: 'Cucumber', value: 'cu'});
                }
                else if(data.value[0] == 'bg') {
                    scategories.push({label: 'Tea', value: 'te'});
                    scategories.push({label: 'Coffee', value: 'co'});
                }
                self.subCategories(scategories);
            }
        }
    }
    
    return productsContentViewModel;
});
