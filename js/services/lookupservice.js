define(['ojs/ojcore'], function (oj) {
    var lookupService = {};
    lookupService.baseUrl = 'http://localhost:5555/api/lookup/';
    
    lookupService.CategoryCollection = function () {
        var Categories = oj.Collection.extend({
            url: this.baseUrl + 'categories',
            model: oj.Model.extend({idAttribute:'value'})
        });
        return new Categories();
    };
    
    lookupService.PublisherCollection = function () {
        var Publishers = oj.Collection.extend({
            url: this.baseUrl + 'publishers',
            model: oj.Model.extend({idAttribute:'value'})
        });
        return new Publishers();
    };
    
    
    lookupService.AuthorCollection = function () {
        var Authors = oj.Collection.extend({
            url: this.baseUrl + 'authors',
            model: oj.Model.extend({idAttribute:'value'})
        });
        return new Authors();
    };
    
    return lookupService;
});