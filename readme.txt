https://github.com/AngularClass/awesome-angular#material-design
https://sherweb.github.io/ng2-materialize/checkbox

https://themeforest.net/item/materialize-material-design-admin-template/11446068?ref=pixinvent
https://themes.materializecss.com/pages/demo

http://dienanh.net/review.html

http://demo.geekslabs.com/materialize/v2.3/layout03/eCommerce-invoice.html
http://materialdesignblog.com/10-material-design-cards-for-web-in-css-html/



========================= Tut =================

Component	ng g component my-new-component
Directive	ng g directive my-new-directive
Pipe	    ng g pipe my-new-pipe
Service	  ng g service my-new-service
Class	    ng g class my-new-class
Guard	    ng g guard my-new-guard
Interface	ng g interface my-new-interface
Enum	    ng g enum my-new-enum
Module	  ng g module my-module


ng g c template --flat (ko tao folder)
ng g c template --inline-style  / ng g c template -is
ng g c template --inline-template / ng g c template -it


============================ Cài đặt Angular-Cli mới nhất ===========================
https://github.com/angular/angular-cli

  npm install -g @angular/cli
  ng new contact_app_client
  cd contact_app_client
  ng serve              //option:  ng serve --host 0.0.0.0 --port 4201

- Nếu đã cài đặt angular-cli thì nên update đến bản mới nhất.
  npm uninstall -g angular-cli
  npm uninstall --save-dev angular-cli

- Update global (trên máy tính)
  npm uninstall -g @angular/cli
  npm cache clean
  npm install -g @angular/cli@latest

- Update local (Trong project đã có sẵn angular-cli)
  rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
  npm install --save-dev @angular/cli@latest
  npm install



======================== Cài đặt Materialize-Css trên project ====================
https://www.npmjs.com/package/angular2-materialize

  npm install materialize-css --save
  npm install angular2-materialize --save

  npm install jquery@^2.2.4 --save    (Nếu nó đã cài luôn Jquery và Hammerjs rồi thì thôi, còn chưa thì cài thêm)
  npm install hammerjs --save


Edit the angular-cli.json : Chỗ

  styles: [
    "../node_modules/materialize-css/dist/css/materialize.css"
  ],

  scripts: [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/hammerjs/hammer.js",
    "../node_modules/materialize-css/dist/js/materialize.js"
  ]


Add to the top of web.module.ts
  import { MaterializeModule } from 'angular2-materialize';


Add MaterializeModule trong (web.module.ts):
 imports: [
    MaterializeModule,
    ...
 ]


Add this line to header of index.html
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">




================================= Install Express ========================================

  npm install --save express body-parser morgan cookie-parser

touch app.js
  // Get dependencies
  const express = require('express');
  const path = require('path');
  const http = require('http');
  const logger = require('morgan');
  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');

  // Get our API routes
  const apiMessage = require('./server/routes/apiMessage');
  const app = express();

  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use(logger('dev'));
  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  // Point static path to dist
  app.use(express.static(path.join(__dirname, 'dist')));

  app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
    next();
  });

  // Set our api routes
  app.use('/apiMessage', apiMessage);
  // Catch all other routes and return the index file
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function(){
    console.log("API running on localhost: " + port);
  });




  mkdir server
  cd server
  mkdir routes


touch apiMessage.js (server/routes/apiMessage.js)

  const express = require('express');
  const router = express.Router();
  /* GET api listing. */
  router.get('/', function (req, res){
    res.send('api message works');
  });
  module.exports = router;


  ng build  (To auto create dist/index.html)
  node app.js

  goto: localhost:3000, localhost:3000/apiUser, localhost:3000/apiMessage


- Note: Ở đây ta sẽ rất hơi khó hiểu là thế cái file : index.html trong thư mục: src/index.html dùng để làm gì.

- Ta cần phân biệt rõ: Cái file index đó code đang ở dạng es6, typescript (của angular)
- Sau khi ta dùng lệnh: ng build thì nó sẽ build các component của angular, và file index.html đó thành 1 file: index.html trong folder: dist
- Cái file dist/index.html này mới là file cần để chạy website.

- Do đó khi dùng server của express. Ta trỏ nó về dist/index.html để nó serve thằng này, chứ không phải thằng src/index.html


- Giờ ta sửa script vào package.json để chỉ cần gõ 1 lần là được: "build": "ng build  && node app.js",



================================== MongoDb =======================================
1. Download va Install MongoDb
    https://www.mongodb.com/
    http://mongoosejs.com/docs/guide.html

2. Run
    mongod
    mongo

3. Mongoose
    Schemas and Models
    Validation
    Intuitive Database operations

    npm install --save mongoose mongoose-unique-validator
    npm install --save bcryptjs jsonwebtoken


4. Fix app.js

  const mongoose = require("mongoose");

  // Get our API routes
  const apiMessage = require('./server/routes/apiMessage');
  const app = express();

  mongoose.connect("localhost:27017/mean-v2");


5. Creating schema

    cd server
    mkdir models
    touch message.js, user.js


message.js :
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    var messageSchema = new Schema({
      content: { type: String, required: true },
      author: { type: String, required: true }
    });
    module.exports = mongoose.model("Message", messageSchema);



6. Fixing router
- Write down in: routes/apiMessage.js

  const express = require('express');
  const router = express.Router();
  const Message = require("../models/message");

  // localhost:3000/apiMessage
  router.get("/", function(req, res, next) {

    Message.find({}, function(err, messages) {
      if(err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: "Success",
        obj: messages
      })
    });

  });


  // localhost:3000/apiMessage
  router.post('/', function (req, res, next) {

    const x = Math.random();
    const y = Math.floor((Math.random() * 10) + 1);

    var message = new Message({
      content: "" + x,
      author: "ThieuNv " + y
    });
    message.save(function (err, result) {
      if(err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(201).json({
        message: 'Saved message',
        obj: result
      })
    });

  });

  module.exports = router;


7. Thêm Message vào database mongo

  Open terminal (Ctrl + Alt + T)
  mongo
  show dbs

  use mean-v2
  show collections

  db.messages.insert({"content": "ThieuNv xin chao", "author": "ThieuNv"});
  db.messages.insert({"content": "Today is the best day of my life!", "author": "Hoang Beu"});
  db.messages.insert({"content": "Karik just get new award for single singer!", "author": "Unknow"});


  Run app:  npm run build
  Goto:     localhost:3000/apiMessage



=========================== Connect Angular 2 App with Api Express Nodejs  ================================
1. Angular route, component and provider
  ng g c messages


Add to web.module.ts (App line of import )

  // Define the routes
  const ROUTES = [
    {
      path: '', redirectTo: 'messages', pathMatch: 'full',
    },
    {
      path: 'messages', component: MessagesComponent
    }
  ];


Add this line in:
    import : [
      ...
      RouterModule.forRoot(ROUTES) // Add routes to the app
    ]


Add to app.component.html
  <div class="container">
    <div class="row">
      <router-outlet></router-outlet>
    </div>
  </div>

Run app:  npm run build
Goto:     localhost:3000 (test)



2. Connecting Component to Express API
  cd src/app/messages
  ng g s messages     (ng generate service messages)

Add this line in :
  providers: [ MessagesService ],


Make http call in service to express server:

 import {Injectable} from '@angular/core';
 import {Http} from '@angular/http';
 import 'rxjs/add/operator/map';

 @Injectable()
 export class MessagesService {

   constructor(private http: Http) {
   }

   // Get all messages from the API
   getAllMessages() {
     return this.http.get('/apiMessage')
       .map(res => res.json());
   }
 }


Inject Service in component Messages:

  import { Component, OnInit } from '@angular/core';
  import {MessagesService} from './messages.service';

  @Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
  })
  export class MessagesComponent implements OnInit {

    messages: any = [];

    constructor(private messagesService: MessagesService ) { }

    ngOnInit() {
      // Retrieve message from the API
      this.messagesService.getAllMessages().subscribe(
        (res: any) => {
        this.messages = res.obj;
      });
    }
  }




And finally, we'll just display the posts in the view. (messages.component.html)

  <div class="col lg 4" *ngFor="let message of messages">
    <div class="card" >
      <h4 class="card-title"> New </h4>
      <div class="card-content">
        <p> {{message.content}} </p>
      </div>
      <div class="card-action">
        <span>Author: </span><a href="#"> {{message.author}} </a>
      </div>

    </div>
  </div>


Add more css to be cool.(messages.component.css)
  .card-title {
    color: red;
    padding: 10px 0 10px 15px;
    background-color: #cecece;
  }


---> Vậy là quá trình tạo project MEAN-V2 đã hoàn thành.

- Note: Giờ mỗi khi chạy lại code ta phải: npm run build
- Còn nếu bạn: npm run start có nghĩa là bạn đang chạy code của file src/index.html (không phải của server nodejs)






=================================== Develop ====================================

18/5/2017
  customer

  manager : {

  	role_author (Sua thong tin, Viet bai)
  	role_category (Sua thong tin, Viet bai, Them category)
  	role_admin (Sua thong tin, Viet bai, Them category, Xoa orders, Xoa user)
  	role_root ( Sua thong tin, Viet bai, Them category, Xoa orders, Xoa user, Cap quyen cho customer)


  1. Update code phan client view for customer, connected to database and update profile
  2. Write api for manager


19/5/2017

  1. Write form for manager detail.
  2. Connect to database and update manager detail
  3. Write table to manage user.
    https://datatables.net/


20/5/2017
  4. Write form for author write a new post
  5. Adding new Editor in Project
  6. Connect post of author to database

editor:
  https://github.com/chymz/ng2-ckeditor
  https://libraries.io/explore/typescript-angular2-libraries?keywords=ckeditor

25/5/2017
  7. Update and Delete product done with database and client
  8. Fixing frontend page categories and tab in page detail-product

29/5/2017
  9. Pull out product data from data and push into categories page done.
  10. Fixing data push into detail-product page.

30/5/2017
  11. Improve the lack of data specs of product when create new product
      https://angular.io/docs/ts/latest/api/forms/index/AbstractControl-class.html
      https://angular.io/docs/ts/latest/api/forms/index/FormArray-class.html
      http://www.lazada.vn/apple-iphone-7-32gb-den-nham-hang-nhap-khau-2763425.html?spm=a2o4n.campaign-1646.0.0.vAmQR1&ff=1&sc=IW4G&campaign=deal-cong-nghe-gia-soc&boost=1
      https://material.io/icons/#ic_delete_forever

	12. Add more directives to frontend and add changing background-color for nav and footer in frontend
	


// Not done
  11. Completed the form about detail product in manager page

  11. Create Cart Collection in database.

  12. Fixing frontend page cart.
  13. Add functionality to add to cart.

  14. CRUD Cart
  15. Update Cart Collection connect with User collection and Product collection
  16. .....

ThieuNv (nguyenthieu20133750)
- Dự kiến 1: Xem được film nào sẽ liệt kê hết lại.
  + Thông tin film
  + Ngày xem (Ngày, thời gian)
  + Cảm nhận về film
  + Liệt kê nó vào category
  + Xem trên trang nào

http://www.wikihow.vn/Vi%E1%BA%BFt-M%E1%BB%99t-B%C3%A0i-Ph%C3%AA-B%C3%ACnh-Phim (Cách bình luận film)

1. Địch nhân kiệt thông thiên đế quốc
+ Thông tin :
	Đạo diễn: Hark Tsui
	Diễn viên: Andy Lau (Lưu Đức Hòa), Bingbing Li (Lý Băng Băng), Carina Lau (Lưu Gia Linh), ...
	Thể loại: Phiêu Lưu
	Quốc gia: Trung Quốc
	Nhà sản xuất: H. Brothers
	Năm sản xuất: 2010
+ 8h30 -> 10h50 a.m 30/5/2017
+ Category: Film phá án, hành động, gay cấn, hồi hộp.
+ http://phimnhanh.com/xem-phim/dich-nhan-kiet-chi-thong-thien-de-quoc-detective-dee-and-the-mystery-of-the-phantom-flame-2010-2010
+ Cảm nhận :
	_Bộ film khá hay, nhiều tình tiết hấp dãn và hồi hộp.
	_Mang đến nhiều cảm xúc lúc tình cảm, lúc hài hước, lúc buồn.
	_Về mặt hành động, đánh nhau, kĩ xảo tốt.
	_Lúc đầu xem thì không đoán được cốt truyện, về sau gần cuối mới đoán được là
		Tịnh Nhi là Quốc Sư và Uông Lý là kẻ cầm đầu chủ mưu.
+ Chấm điểm:
	_kịch bản: 8
	_Biên tập (công tác đạo diễn): 8.2
	_kỹ thuật quay phim: 8.5
	_hiệu quả hình ảnh(hóa trang): 8.2
	_Diễn xuất: 8.7
	_bối cảnh: 7.7
	_Âm thanh: 8.5



- Dự kiến 2: Liệt kê các hoạt động trong ngày lại, cộng với 1 video tự quay miêu tả về ngày hôm đó.
  + Thời gian làm gì, làm gì.
  + Mỗi ngày sẽ giành 1h để tổng hợp lại các hoạt động trong ngày  + Quay video
  + Dự kiến sẽ làm bằng tiếng anh để khi miêu tả về các hoạt động sẽ học thêm được tiếng anh nói.
  
30/5/2017 
	8h dây 
	8h30 - 11h: Xem film Địch nhân kiệt thông thiên đế quốc 
	11h-12h : Facebook 
	12h-1h: Ăn cơm 
	1h - 4h30: Xem 4 tập film: Tranh đấu vương quyền (Tập 3-6) 
	4h40-5h30: Tập gym tại nhà 
	6h-7h30: Mua ổi, mận, cơm. Ăn cơm 
	7h30-8h30: Rửa bát, Đi tắm.
	9h-12h30: Viết tiếp code website: mongo_market_mean 
	12h30-1h: Tổng hợp hết ngày.
	
	+ Làm việc hàng ngày (Đánh răng, mua cơm, mua hoa quả, giặt quần áo, ăn cơm, đi tắm ...) : 3h
	+ Chơi, xem film, facebook: 9h
	+ Làm việc học: 4h 
	+ Ngủ: 6h 
	+ Unknow: 2h 
	
	=> Kiến thức mới: Directives angular 2.
	=> Hiệu quả làm việc: 4/(3*0.15 + 9*0.6 + 6*0.15 + 2*0.2) = 56%  
	
	
31/5/2017 	
	  
  
  

- Dự kiến 3: Kết bạn trên zalo, lấy được list ảnh của người đó về.




==== New today : 30/5/2017

- Ta có thể tìm các hiệu ứng của các template bootstrap sau: https://bootstrapmade.com/,
  Ví dụ như hiển thị 1 dòng, sau đó hover qua product sẽ show ra chi tiết

- http://emails.castellab.com/idea/
Trang này ta có thể thêm chức năng : Remove, Duplicate, Change Background, Change Color
Rất nhiều tính năng hay có thể học từ nó.

- trang này chức toàn theme mất tiền nhưng có thể xem các chức năng của nó.   http://bootstrapbay.com/

- Mình có thể dùng theme bootstrap này cho admin : https://jumpstartthemes.com/demo/v/3.0.0/templates/admin-2/dashboard-3.html


- tài nguyên về bootstrap : https://expo.getbootstrap.com/resources/

- 2 Template mà mình download trộm được:
  options-admin_v12.rar     (http://preview.themeforest.net/item/options-admin-responsive-web-application-ui-kit/full_screen_preview/19796742?_ga=2.138678906.877920770.1496154958-380759513.1496152485)
   neon                          (http://themes.laborator.co/#theme=neon)

https://getmdl.io/templates/


================================ Learning Directive=========================
https://angular.io/docs/ts/latest/guide/attribute-directives.html

1. Overview
There are three kinds of directives in Angular:

  Components—directives with a template.
  Structural directives—change the DOM layout by adding and removing DOM elements.
  Attribute directives—change the appearance or behavior of an element, component, or another directive.

Components are the most common of the three directives. You saw a component for the first time in the QuickStart guide.
Structural Directives change the structure of the view. Two examples are NgFor and NgIf. Learn about them in the Structural Directives guide.
Attribute directives are used as attributes of elements. The built-in NgStyle directive in the Template Syntax guide, for example, can change several element styles at the same time.

2. Viết 1 directive đơn giản
- Ta cần đánh dấu nó bằng @Directive. Class bên trong sẽ quyết định các hành động của DOM
- Ví dụ khi hover qua thẻ p thì nó sẽ được hightlight. Ta áp dụng như sau:
  <p myHighlight>Highlight me!</p>

3. Viết code

hightlight.directive.ts

  import { Directive, ElementRef, Input } from '@angular/core';

  @Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {

    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

The import statement specifies symbols from the Angular core:

1. Directive provides the functionality of the @Directive decorator.
2. ElementRef injects into the directive's constructor so the code can access the DOM element.
3. Input allows data to flow from the binding expression into the directive.

Next, the @Directive decorator function contains the directive metadata in a configuration object as an argument.
1. After the @Directive metadata comes the directive's controller class, called HighlightDirective, which contains the logic for the directive. Exporting HighlightDirective makes it accessible to other components
2. Angular creates a new instance of the directive's controller class for each matching element, injecting an Angular ElementRef into the constructor. ElementRef is a service that grants direct access to the DOM element through its nativeElement property.


4. Thêm vào component host
- Ta thêm vào thẻ p (host): <p myHighlight>Highlight me!</p>
- Cần import HighlightDirective vào trong app.module.ts


5. Phản ứng lại hành động của người dùng.
- Giờ ta có thể khiến directive động hơn bằng cách đáp trả lại khi người dùng di chuột qua host, click vào host. ..
- Ta cần import : HostListener

  import { Directive, ElementRef, HostListener, Input } from '@angular/core';

- Sau đó ta thêm 2 sự kiện di chuột vào và chuột đỉ ra, cả 2 đều trang trí bằng HostListener

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

- The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive, the <p> in this case.

- Of course you could reach into the DOM with standard JavaScript and and attach event listeners manually. There are at least three problems with that approach:
  1. You have to write the listeners correctly.
  2. The code must detach the listener when the directive is destroyed to avoid memory leaks.
  3. Talking to DOM API directly isn't a best practice.

- Tiếp ta cần tiêm service ElementRef vào Directive đẻ có thể truy cập trực tiếp vào DOM :
  constructor(private el: ElementRef) { }


6. Truyền dynamic color vào Directive bằng Input (Amazing ở chỗ này này)
  @Input() highlightColor: string;    // Nói rằng thuộc tính này được lấy từ bên ngoài vào

7. Binding vào @Input
- Vì có input nên mới có binding từ biểu thức bên ngoài vào trong directive được.

  <p myHighlight highlightColor="yellow">Highlighted in yellow</p>
  <p myHighlight [highlightColor]="'orange'">Highlighted in orange</p>


  export class AppComponent {
    color = 'yellow';
  }

- Giờ ta dùng đến highlightColor : <p appHighlight [highlightColor]="color">Highlighted with parent component's color</p>

- Ta có thể làm như sau: <p [appHighlight]="color">Highlight me!</p>

- Đó là cú pháp phức tạp, vừa sử dụng highlight directive cho thẻ p, vừa set hightlight color bằng property binding. Quá phức tạp.
- và ta còn phải đổi tên cho input nữa:
  @Input() myHighlight: string;

==> Đây là lý do nghĩ ra alias

8. Bind to an @Input alias
- May mắn rằng ta có thể đặt tên directive property thế nào cũng được, và alias nó với mục đích binding luôn.

  @Input('appHighlight') highlightColor: string;

Inside the directive the property is known as highlightColor. Outside the directive, where you bind to it, it's known as myHighlight.
You get the best of both worlds: the property name you want and the binding syntax you want:

  <p [myHighlight]="color">Highlight me!</p>

- Giờ khi ta đã binding highlightColor, thay đổi onMouseEnter().
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || 'red');
    }

- Viet lai:
  <h1>My First Attribute Directive</h1>

  <h4>Pick a highlight color</h4>
  <div>
    <button type="button" class="light-green" (click)="color='lightgreen'">Light Green</button>
    <button type="button" class="yellow" (click)="color='yellow'">Yellow</button>
    <button type="button" class="cyan" (click)="color='cyan'">Cyan</button>
  </div>
  <p [appHighlight]="color">Highlight me!</p>


9. Bind to a second property
- trong thực tế ta sẽ cần nhiều hơn 1 thuộc tính trong directive.
- Vd như trong trường hợp này ta sẽ có thểm thuộc tính mặc định màu ban đầu (Hiện tại là màu đỏ)

  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  <p [myHighlight]="color" defaultColor="violet">
    Highlight me too!
  </p>





