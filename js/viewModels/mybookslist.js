
/**
 * mybookslist module
 */
define(['ojs/ojcore', 'knockout', 'services/bookservice', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource', 'ojs/ojgauge', 'ojs/ojdialog', 'ojs/ojpictochart', 'ojs/ojinputtext'
], function (oj, ko, bService) {
    /**
     * The view model for the main content view template
     */
    function mybookslistContentViewModel() {
        var self = this;
        
        self.bookCollection = ko.observable();
        self.bookCollection(bService.BookCollection())
        
        self.dsBooks = ko.observable();
        
        //CollectionTableDataSource will triger the GET on webservice
        self.dsBooks(new oj.CollectionTableDataSource(self.bookCollection()));
        
        self.currentBook = ko.observable();
        
        self.showBook = function (data, event) {
            var bookModel = bService.BookModel(data._id);
            bookModel.fetch({
                success: function (model, response) {
                    var bookInfo = response.book;
                    bookInfo.pictoChartItems = ko.observableArray([
                        {name: 'Have Sleep Problems', shape: 'human', count: 5 - bookInfo.avg_users_slept, color: '#ed6647'},
                        {name: 'Sleep Well', shape: 'human', count: bookInfo.avg_users_slept}
                    ]);
                    self.currentBook(bookInfo);
                    $('#modalDialog1').ojDialog("open");
                },
                error: function (xhr, error, status) {
                    console.log(xhr);
                    console.log(error);
                    console.log(status);
                }
            });
        };
        
        self.titleSearch = ko.observable();
        self.filterBooks = function (event, data) {
            //Execute this below code only when rawValue is changed
            if(data.option == 'rawValue') {
                console.log("inside filterBooks");
                
                if(self.originalBookCollection == undefined){
                    self.originalBookCollection = self.bookCollection().clone();
                }
                
                var filteredResults = self.originalBookCollection.where(
                        {title: {value: self.titleSearch(), comparator: self.titleFilter}});
                
                if (filteredResults.length == 0)
                {
                    while (!self.bookCollection().isEmpty())
                    {
                         self.bookCollection().pop();
                    }
                }
                else {
                    self.bookCollection().reset(filteredResults);
                }
            }
        };
        
        self.titleFilter = function (model, attr, value) {
            var title = model.get(attr);
            return (title.toLowerCase().indexOf(value.toLowerCase()) > -1);
        };
    }
    
    return mybookslistContentViewModel;
});
