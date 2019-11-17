var orm = require("../config/orm");

var burger = 
{
    selectAll: function(cb)
    {
        orm.selectAll("burgers", function(res)
        {
            cb(res);
        });  
    },

    insertOne: function(burgerName, cb)
    {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, function(res)
        {
            cb(res);
        });
    },

    updateBurger: function(burgerToChange, burgerName, cb)
    {
        orm.updateOne("burgers", "burger_name", burgerToChange, "burger_name", burgerName, function(res)
        {
            cb(res);
        });
    },

    updateDevoured: function(isDevoured, burgerName, cb)
    {
        orm.updateOne("burgers", "devoured", isDevoured, "burger_name", burgerName, function(res)
        {
            cb(res);
        });
    },

    deleteOne: function(burgerName, cb)
    {
        orm.deleteOne("burgers", "burger_name", burgerName, function(res)
        {
            cb(res);
        });
    }

}

module.exports = burger;