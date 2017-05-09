/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * managebooks module
 */
define(['ojs/ojcore', 'knockout', 'services/lookupservice', 'services/bookservice', 'kmapping','ojs/ojinputtext','ojs/ojselectcombobox', 'ojs/ojinputnumber','ojs/ojbutton','ojs/ojdialog', 'ojs/ojcollectiontabledatasource'
], function (oj, ko, lService, bService, kmap) {
    /**
     * The view model for the main content view template
     */
    function createContentViewModel() {
        var self = this;
        
        //observables to hold Language specific labels
        self.idLabel = ko.observable();
        self.idLabel(oj.Translations.getTranslatedString('book.id'));
        
        self.titleLabel = ko.observable();
        self.titleLabel(oj.Translations.getTranslatedString('book.title'));
        
        self.categoryLabel = ko.observable();
        self.categoryLabel(oj.Translations.getTranslatedString('book.category'));
        
        self.authorLabel = ko.observable();
        self.authorLabel(oj.Translations.getTranslatedString('book.author'));
        
        //START - Defining the book model
        self.book = {};
        self.book._id = ko.observable();
        self.book.title = ko.observable();
        self.book.description = ko.observable();
        self.book.category = ko.observableArray([0]);
        self.book.author = ko.observableArray([0]);
        self.book.publisher = ko.observableArray([0]);
        self.book.price = ko.observable();
        self.book.isbn = ko.observable();
        self.book.language = ko.observable();
        self.book.pages = ko.observable();
        self.book.avg_user_rating = ko.observable();
        self.book.avg_users_slept = ko.observable(); 
        self.categories = ko.observableArray();
        self.authors = ko.observableArray();
        self.publishers = ko.observableArray();
        //END- Defining the book model
        
        //fetch will call GET on the webservice
        lService.CategoryCollection().fetch(
                {success: function (collection, response, options) {
                        var categories = [];
                        categories.push({label: '--SELECT--', value: '-1'});
                        //Push an array in one statement, this is an 
                        categories.push(...response.categories);
                        self.categories(categories);
                }});
         
        lService.PublisherCollection().fetch(
                {success: function (collection, response, options) {
                        var publishers = [];
                        publishers.push({label: '--SELECT--', value: '-1'});
                        //Push an array in one statement, this is an 
                        publishers.push(...response.publishers);
                        self.publishers(publishers);
                }});
        
        lService.AuthorCollection().fetch(
                {success: function (collection, response, options) {
                        var authors = [];
                        authors.push({label: '--SELECT--', value: '-1'});
                        //Push an array in one statement, this is an 
                        authors.push(...response.authors);
                        self.authors(authors);
                }});
            
        //Clearing the values for the observables
        self.clearFields = function(){
            self.book._id(null);
            self.book.title('');
            self.book.description('');
            self.book.category([0]);
            self.book.author([0]);
            self.book.publisher([0]);
            self.book.price(null);
            self.book.isbn('');
            self.book.language('');
            self.book.pages(null);
            self.book.avg_user_rating(null);
            self.book.avg_users_slept(null); 
        }
        
        self.addBook = function () {
            var bookCollection = bService.BookCollection();
            //self.book has be converted to json format before calling create() on bookCollection
            var jsonBookObject = kmap.toJS(self.book);
            jsonBookObject.category = jsonBookObject.category[0];
            jsonBookObject.author = jsonBookObject.author[0];
            jsonBookObject.publisher = jsonBookObject.publisher[0];
            
            bookCollection.create(jsonBookObject, {
                wait: true,
                success: function (collection, response) {
                    console.log('success');
                    $("#message").ojDialog("open");
                },
                error: function (xhr, error, status) {
                    alert('Error!');
                }
            });
        }
    }
    
    return createContentViewModel;
});
