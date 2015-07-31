/**
 *  George
 *  2015/7/31 1:25
 */

var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/george')
app.locals.moment = require('moment');

moment(time).format('MM/DD/YYYY')

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(express.static(__dirname))
app.listen(port);



app.get('/',function(req,res){
    res.render('index',{
        title:"电影首页",
        movies:[{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        },{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        },{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        },{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        },{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        },{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        },{
            _id:1,
            poster:'http://img3.douban.com/view/movie_poster_cover/mpst/public/p2257443441.jpg',
            title:'黑衣特工队'
        }]
    });
});


app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'详情页',
        moive:{
            title:'2222',
            doc:'22233',
            country:'qwww',
            language:'eeee',
            flash:'http://player.youku.com/player.php/Type/Folder/Fid/23574074/Ob/1/sid/XMTI5NzEyNDg4MA==/v.swf'
        }
    });
});

//后台提交给新路由 new    保存后 跳转到 res.redirect   详情页
app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'后台录入页'
    });
});



//list点击更新  提交update路由， 重新渲染 admin
app.get('/admin/list',function(req,res){
    res.render('list',{
        title:'列表页',
        movies:[{
            _id:1,
            title:'111',
            doc:'222',
            country:'country',
            language:'language'
        }]
    });
});

console.log('on port' + port);
