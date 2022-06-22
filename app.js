const express = require("express");
const bodyParser = require("body-parser");
const cheerio=require("cheerio");
const app = express();
const request = require("request");
app.set("view engine", "ejs");
const https = require("https");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(process.env.PORT||3000, function() {
  console.log("server is up and running at 3000")
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});
app.get("/news", function(req, res) {
  var category="top";

  var url="https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category="+category;
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      console.log(d.results.length)
      var title0 = d.results[0].title;
      var url0 = d.results[0].img_url;
      var content0 = d.results[0].content;
      var descrip0 = d.results[0].description;
      var link0 = d.results[0].link;
      var src0 = d.results[0].source_id;
      var title1 = d.results[1].title;
      var url1 = d.results[1].img_url;
      var content1 = d.results[1].content;
      var descrip1 = d.results[1].description;
      var link1 = d.results[1].link;
      var src1 = d.results[1].source_id;
      var title2 = d.results[2].title;
      var url2 = d.results[2].img_url;
      var content2 = d.results[2].content;
      var descrip2 = d.results[2].description;
      var link2 = d.results[2].link;
      var src2 = d.results[2].source_id;
      var title3 = d.results[3].title;
      var url3 = d.results[3].img_url;
      var content3 = d.results[3].content;
      var descrip3 = d.results[3].description;
      var link3 = d.results[3].link;
      var src3 = d.results[3].source_id;
      var title4 = d.results[4].title;
      var url4 = d.results[4].img_url;
      var content4 = d.results[4].content;
      var descrip4 = d.results[4].description;
      var link4 = d.results[4].link;
      var src4 = d.results[4].source_id;
      var title5 = d.results[5].title;
      var url5 = d.results[5].img_url;
      var content5 = d.results[5].content;
      var descrip5 = d.results[5].description;
      var link5 = d.results[5].link;
      var src5 = d.results[5].source_id;
      var title6 = d.results[6].title;
      var url6 = d.results[6].img_url;
      var content6 = d.results[6].content;
      var descrip6 = d.results[6].description;
      var link6 = d.results[6].link;
      var src6 = d.results[6].source_id;
      var title7 = d.results[7].title;
      var url7 = d.results[7].img_url;
      var content7 = d.results[7].content;
      var descrip7 = d.results[7].description;
      var link7 = d.results[7].link;
      var src7 = d.results[7].source_id;
      var title8 = d.results[8].title;
      var url8 = d.results[8].img_url;
      var content8 = d.results[8].content;
      var descrip8 = d.results[8].description;
      var link8 = d.results[8].link;
      var src8 = d.results[8].source_id;
      var title9 = d.results[9].title;
      var url9 = d.results[9].img_url;
      var content9 = d.results[9].content;
      var descrip9 = d.results[9].description;
      var link9 = d.results[9].link;
      var src9 = d.results[9].source_id;
      console.log(title0);
      res.render("news", {
        title0: title0,
        title1: title1,
        title2: title2,
        title3: title3,
        url0: url0,
        url1: url1,
        url2: url2,
        url3: url3,
        content0: content0,
        content1: content1,
        content2: content2,
        content3: content3,
        descrip0: descrip0,
        link0: link0,
        descrip1: descrip1,
        link1: link1,
        descrip2: descrip2,
        link2: link2,
        descrip3: descrip3,
        link3: link3,
        src0: src0,
        src1: src1,
        src2: src2,
        src3: src3,
        title4: title4,
        title5: title5,
        title6: title6,
        title7: title7,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        descrip4: descrip4,
        link4: link4,
        descrip5: descrip5,
        link5: link5,
        descrip6: descrip6,
        link6: link6,
        descrip7: descrip7,
        link7: link7,
        src4: src4,
        src5: src5,
        src6: src6,
        src7: src7,
        title8:title8,
        url8:url8,
        content8:content8,
        descrip8:descrip8,
        link8:link8,
        src8:src8,
        title9:title9,
        url9:url9,
        content9:content9,
        descrip9:descrip9,
        link9:link9,
        src9:src9,

      });



    });
  })
});
app.get("/news/science", function(req, res) {
  var category="science";
  var url="https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category="+category;
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      console.log(d.results.length);
      var title0 = d.results[0].title;
      var url0 = d.results[0].img_url;
      var content0 = d.results[0].content;
      var descrip0 = d.results[0].description;
      var link0 = d.results[0].link;
      var src0 = d.results[0].source_id;
      var title1 = d.results[1].title;
      var url1 = d.results[1].img_url;
      var content1 = d.results[1].content;
      var descrip1 = d.results[1].description;
      var link1 = d.results[1].link;
      var src1 = d.results[1].source_id;
      var title2 = d.results[2].title;
      var url2 = d.results[2].img_url;
      var content2 = d.results[2].content;
      var descrip2 = d.results[2].description;
      var link2 = d.results[2].link;
      var src2 = d.results[2].source_id;
      var title3 = d.results[3].title;
      var url3 = d.results[3].img_url;
      var content3 = d.results[3].content;
      var descrip3 = d.results[3].description;
      var link3 = d.results[3].link;
      var src3 = d.results[3].source_id;
      var title4 = d.results[4].title;
      var url4 = d.results[4].img_url;
      var content4 = d.results[4].content;
      var descrip4 = d.results[4].description;
      var link4 = d.results[4].link;
      var src4 = d.results[4].source_id;
      var title5 = d.results[5].title;
      var url5 = d.results[5].img_url;
      var content5 = d.results[5].content;
      var descrip5 = d.results[5].description;
      var link5 = d.results[5].link;
      var src5 = d.results[5].source_id;
      var title6 = d.results[6].title;
      var url6 = d.results[6].img_url;
      var content6 = d.results[6].content;
      var descrip6 = d.results[6].description;
      var link6 = d.results[6].link;
      var src6 = d.results[6].source_id;
      var title7 = d.results[7].title;
      var url7 = d.results[7].img_url;
      var content7 = d.results[7].content;
      var descrip7 = d.results[7].description;
      var link7 = d.results[7].link;
      var src7 = d.results[7].source_id;
      var title8 = d.results[8].title;
      var url8 = d.results[8].img_url;
      var content8 = d.results[8].content;
      var descrip8 = d.results[8].description;
      var link8 = d.results[8].link;
      var src8 = d.results[8].source_id;
      var title9 = d.results[9].title;
      var url9 = d.results[9].img_url;
      var content9 = d.results[9].content;
      var descrip9 = d.results[9].description;
      var link9 = d.results[9].link;
      var src9 = d.results[9].source_id;
      console.log(title0);
      res.render("newsscience", {
        title0: title0,
        title1: title1,
        title2: title2,
        title3: title3,
        url0: url0,
        url1: url1,
        url2: url2,
        url3: url3,
        content0: content0,
        content1: content1,
        content2: content2,
        content3: content3,
        descrip0: descrip0,
        link0: link0,
        descrip1: descrip1,
        link1: link1,
        descrip2: descrip2,
        link2: link2,
        descrip3: descrip3,
        link3: link3,
        src0: src0,
        src1: src1,
        src2: src2,
        src3: src3,
        title4: title4,
        title5: title5,
        title6: title6,
        title7: title7,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        descrip4: descrip4,
        link4: link4,
        descrip5: descrip5,
        link5: link5,
        descrip6: descrip6,
        link6: link6,
        descrip7: descrip7,
        link7: link7,
        src4: src4,
        src5: src5,
        src6: src6,
        src7: src7,
        title8:title8,
        url8:url8,
        content8:content8,
        descrip8:descrip8,
        link8:link8,
        src8:src8,
        title9:title9,
        url9:url9,
        content9:content9,
        descrip9:descrip9,
        link9:link9,
        src9:src9,

      });



    });
  })
});
app.get("/news/technology", function(req, res) {
  var category="technology";
  var url="https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category="+category;
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var title0 = d.results[0].title;
      var url0 = d.results[0].img_url;
      var content0 = d.results[0].content;
      var descrip0 = d.results[0].description;
      var link0 = d.results[0].link;
      var src0 = d.results[0].source_id;
      var title1 = d.results[1].title;
      var url1 = d.results[1].img_url;
      var content1 = d.results[1].content;
      var descrip1 = d.results[1].description;
      var link1 = d.results[1].link;
      var src1 = d.results[1].source_id;
      var title2 = d.results[2].title;
      var url2 = d.results[2].img_url;
      var content2 = d.results[2].content;
      var descrip2 = d.results[2].description;
      var link2 = d.results[2].link;
      var src2 = d.results[2].source_id;
      var title3 = d.results[3].title;
      var url3 = d.results[3].img_url;
      var content3 = d.results[3].content;
      var descrip3 = d.results[3].description;
      var link3 = d.results[3].link;
      var src3 = d.results[3].source_id;
      var title4 = d.results[4].title;
      var url4 = d.results[4].img_url;
      var content4 = d.results[4].content;
      var descrip4 = d.results[4].description;
      var link4 = d.results[4].link;
      var src4 = d.results[4].source_id;
      var title5 = d.results[5].title;
      var url5 = d.results[5].img_url;
      var content5 = d.results[5].content;
      var descrip5 = d.results[5].description;
      var link5 = d.results[5].link;
      var src5 = d.results[5].source_id;
      var title6 = d.results[6].title;
      var url6 = d.results[6].img_url;
      var content6 = d.results[6].content;
      var descrip6 = d.results[6].description;
      var link6 = d.results[6].link;
      var src6 = d.results[6].source_id;
      var title7 = d.results[7].title;
      var url7 = d.results[7].img_url;
      var content7 = d.results[7].content;
      var descrip7 = d.results[7].description;
      var link7 = d.results[7].link;
      var src7 = d.results[7].source_id;
      var title8 = d.results[8].title;
      var url8 = d.results[8].img_url;
      var content8 = d.results[8].content;
      var descrip8 = d.results[8].description;
      var link8 = d.results[8].link;
      var src8 = d.results[8].source_id;
      var title9 = d.results[9].title;
      var url9 = d.results[9].img_url;
      var content9 = d.results[9].content;
      var descrip9 = d.results[9].description;
      var link9 = d.results[9].link;
      var src9 = d.results[9].source_id;
      console.log(title0);
      res.render("newstechnology", {
        title0: title0,
        title1: title1,
        title2: title2,
        title3: title3,
        url0: url0,
        url1: url1,
        url2: url2,
        url3: url3,
        content0: content0,
        content1: content1,
        content2: content2,
        content3: content3,
        descrip0: descrip0,
        link0: link0,
        descrip1: descrip1,
        link1: link1,
        descrip2: descrip2,
        link2: link2,
        descrip3: descrip3,
        link3: link3,
        src0: src0,
        src1: src1,
        src2: src2,
        src3: src3,
        title4: title4,
        title5: title5,
        title6: title6,
        title7: title7,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        descrip4: descrip4,
        link4: link4,
        descrip5: descrip5,
        link5: link5,
        descrip6: descrip6,
        link6: link6,
        descrip7: descrip7,
        link7: link7,
        src4: src4,
        src5: src5,
        src6: src6,
        src7: src7,
        title8:title8,
        url8:url8,
        content8:content8,
        descrip8:descrip8,
        link8:link8,
        src8:src8,
        title9:title9,
        url9:url9,
        content9:content9,
        descrip9:descrip9,
        link9:link9,
        src9:src9,

      });



    });
  })
});
app.get("/news/entertainment", function(req, res) {
  var category="entertainment";
  var url="https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category="+category;
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var title0 = d.results[0].title;
      var url0 = d.results[0].img_url;
      var content0 = d.results[0].content;
      var descrip0 = d.results[0].description;
      var link0 = d.results[0].link;
      var src0 = d.results[0].source_id;
      var title1 = d.results[1].title;
      var url1 = d.results[1].img_url;
      var content1 = d.results[1].content;
      var descrip1 = d.results[1].description;
      var link1 = d.results[1].link;
      var src1 = d.results[1].source_id;
      var title2 = d.results[2].title;
      var url2 = d.results[2].img_url;
      var content2 = d.results[2].content;
      var descrip2 = d.results[2].description;
      var link2 = d.results[2].link;
      var src2 = d.results[2].source_id;
      var title3 = d.results[3].title;
      var url3 = d.results[3].img_url;
      var content3 = d.results[3].content;
      var descrip3 = d.results[3].description;
      var link3 = d.results[3].link;
      var src3 = d.results[3].source_id;
      var title4 = d.results[4].title;
      var url4 = d.results[4].img_url;
      var content4 = d.results[4].content;
      var descrip4 = d.results[4].description;
      var link4 = d.results[4].link;
      var src4 = d.results[4].source_id;
      var title5 = d.results[5].title;
      var url5 = d.results[5].img_url;
      var content5 = d.results[5].content;
      var descrip5 = d.results[5].description;
      var link5 = d.results[5].link;
      var src5 = d.results[5].source_id;
      var title6 = d.results[6].title;
      var url6 = d.results[6].img_url;
      var content6 = d.results[6].content;
      var descrip6 = d.results[6].description;
      var link6 = d.results[6].link;
      var src6 = d.results[6].source_id;
      var title7 = d.results[7].title;
      var url7 = d.results[7].img_url;
      var content7 = d.results[7].content;
      var descrip7 = d.results[7].description;
      var link7 = d.results[7].link;
      var src7 = d.results[7].source_id;
      var title8 = d.results[8].title;
      var url8 = d.results[8].img_url;
      var content8 = d.results[8].content;
      var descrip8 = d.results[8].description;
      var link8 = d.results[8].link;
      var src8 = d.results[8].source_id;
      var title9 = d.results[9].title;
      var url9 = d.results[9].img_url;
      var content9 = d.results[9].content;
      var descrip9 = d.results[9].description;
      var link9 = d.results[9].link;
      var src9 = d.results[9].source_id;
      console.log(title0);
      res.render("newsentertainment", {
        title0: title0,
        title1: title1,
        title2: title2,
        title3: title3,
        url0: url0,
        url1: url1,
        url2: url2,
        url3: url3,
        content0: content0,
        content1: content1,
        content2: content2,
        content3: content3,
        descrip0: descrip0,
        link0: link0,
        descrip1: descrip1,
        link1: link1,
        descrip2: descrip2,
        link2: link2,
        descrip3: descrip3,
        link3: link3,
        src0: src0,
        src1: src1,
        src2: src2,
        src3: src3,
        title4: title4,
        title5: title5,
        title6: title6,
        title7: title7,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        descrip4: descrip4,
        link4: link4,
        descrip5: descrip5,
        link5: link5,
        descrip6: descrip6,
        link6: link6,
        descrip7: descrip7,
        link7: link7,
        src4: src4,
        src5: src5,
        src6: src6,
        src7: src7,
        title8:title8,
        url8:url8,
        content8:content8,
        descrip8:descrip8,
        link8:link8,
        src8:src8,
        title9:title9,
        url9:url9,
        content9:content9,
        descrip9:descrip9,
        link9:link9,
        src9:src9,

      });



    });
  })
});
app.get("/news/sports", function(req, res) {
  var category="sports";
  var url="https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category="+category;
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var title0 = d.results[0].title;
      var url0 = d.results[0].img_url;
      var content0 = d.results[0].content;
      var descrip0 = d.results[0].description;
      var link0 = d.results[0].link;
      var src0 = d.results[0].source_id;
      var title1 = d.results[1].title;
      var url1 = d.results[1].img_url;
      var content1 = d.results[1].content;
      var descrip1 = d.results[1].description;
      var link1 = d.results[1].link;
      var src1 = d.results[1].source_id;
      var title2 = d.results[2].title;
      var url2 = d.results[2].img_url;
      var content2 = d.results[2].content;
      var descrip2 = d.results[2].description;
      var link2 = d.results[2].link;
      var src2 = d.results[2].source_id;
      var title3 = d.results[3].title;
      var url3 = d.results[3].img_url;
      var content3 = d.results[3].content;
      var descrip3 = d.results[3].description;
      var link3 = d.results[3].link;
      var src3 = d.results[3].source_id;
      var title4 = d.results[4].title;
      var url4 = d.results[4].img_url;
      var content4 = d.results[4].content;
      var descrip4 = d.results[4].description;
      var link4 = d.results[4].link;
      var src4 = d.results[4].source_id;
      var title5 = d.results[5].title;
      var url5 = d.results[5].img_url;
      var content5 = d.results[5].content;
      var descrip5 = d.results[5].description;
      var link5 = d.results[5].link;
      var src5 = d.results[5].source_id;
      var title6 = d.results[6].title;
      var url6 = d.results[6].img_url;
      var content6 = d.results[6].content;
      var descrip6 = d.results[6].description;
      var link6 = d.results[6].link;
      var src6 = d.results[6].source_id;
      var title7 = d.results[7].title;
      var url7 = d.results[7].img_url;
      var content7 = d.results[7].content;
      var descrip7 = d.results[7].description;
      var link7 = d.results[7].link;
      var src7 = d.results[7].source_id;
      var title8 = d.results[8].title;
      var url8 = d.results[8].img_url;
      var content8 = d.results[8].content;
      var descrip8 = d.results[8].description;
      var link8 = d.results[8].link;
      var src8 = d.results[8].source_id;
      var title9 = d.results[9].title;
      var url9 = d.results[9].img_url;
      var content9 = d.results[9].content;
      var descrip9 = d.results[9].description;
      var link9 = d.results[9].link;
      var src9 = d.results[9].source_id;
      console.log(title0);
      res.render("newssports", {
        title0: title0,
        title1: title1,
        title2: title2,
        title3: title3,
        url0: url0,
        url1: url1,
        url2: url2,
        url3: url3,
        content0: content0,
        content1: content1,
        content2: content2,
        content3: content3,
        descrip0: descrip0,
        link0: link0,
        descrip1: descrip1,
        link1: link1,
        descrip2: descrip2,
        link2: link2,
        descrip3: descrip3,
        link3: link3,
        src0: src0,
        src1: src1,
        src2: src2,
        src3: src3,
        title4: title4,
        title5: title5,
        title6: title6,
        title7: title7,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        descrip4: descrip4,
        link4: link4,
        descrip5: descrip5,
        link5: link5,
        descrip6: descrip6,
        link6: link6,
        descrip7: descrip7,
        link7: link7,
        src4: src4,
        src5: src5,
        src6: src6,
        src7: src7,
        title8:title8,
        url8:url8,
        content8:content8,
        descrip8:descrip8,
        link8:link8,
        src8:src8,
        title9:title9,
        url9:url9,
        content9:content9,
        descrip9:descrip9,
        link9:link9,
        src9:src9,

      });



    });
  })
});
app.post("/news/search",function(req,res){
  var s=req.body.key;
  var url="https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&q="+s;
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var title0 = d.results[0].title;
      var url0 = d.results[0].img_url;
      var content0 = d.results[0].content;
      var descrip0 = d.results[0].description;
      var link0 = d.results[0].link;
      var src0 = d.results[0].source_id;
      var title1 = d.results[1].title;
      var url1 = d.results[1].img_url;
      var content1 = d.results[1].content;
      var descrip1 = d.results[1].description;
      var link1 = d.results[1].link;
      var src1 = d.results[1].source_id;
      var title2 = d.results[2].title;
      var url2 = d.results[2].img_url;
      var content2 = d.results[2].content;
      var descrip2 = d.results[2].description;
      var link2 = d.results[2].link;
      var src2 = d.results[2].source_id;
      var title3 = d.results[3].title;
      var url3 = d.results[3].img_url;
      var content3 = d.results[3].content;
      var descrip3 = d.results[3].description;
      var link3 = d.results[3].link;
      var src3 = d.results[3].source_id;
      var title4 = d.results[4].title;
      var url4 = d.results[4].img_url;
      var content4 = d.results[4].content;
      var descrip4 = d.results[4].description;
      var link4 = d.results[4].link;
      var src4 = d.results[4].source_id;
      var title5 = d.results[5].title;
      var url5 = d.results[5].img_url;
      var content5 = d.results[5].content;
      var descrip5 = d.results[5].description;
      var link5 = d.results[5].link;
      var src5 = d.results[5].source_id;
      var title6 = d.results[6].title;
      var url6 = d.results[6].img_url;
      var content6 = d.results[6].content;
      var descrip6 = d.results[6].description;
      var link6 = d.results[6].link;
      var src6 = d.results[6].source_id;
      var title7 = d.results[7].title;
      var url7 = d.results[7].img_url;
      var content7 = d.results[7].content;
      var descrip7 = d.results[7].description;
      var link7 = d.results[7].link;
      var src7 = d.results[7].source_id;
      var title8 = d.results[8].title;
      var url8 = d.results[8].img_url;
      var content8 = d.results[8].content;
      var descrip8 = d.results[8].description;
      var link8 = d.results[8].link;
      var src8 = d.results[8].source_id;
      var title9 = d.results[9].title;
      var url9 = d.results[9].img_url;
      var content9 = d.results[9].content;
      var descrip9 = d.results[9].description;
      var link9 = d.results[9].link;
      var src9 = d.results[9].source_id;
      console.log(title0);
      res.render("newssearch", {
        title0: title0,
        title1: title1,
        title2: title2,
        title3: title3,
        url0: url0,
        url1: url1,
        url2: url2,
        url3: url3,
        content0: content0,
        content1: content1,
        content2: content2,
        content3: content3,
        descrip0: descrip0,
        link0: link0,
        descrip1: descrip1,
        link1: link1,
        descrip2: descrip2,
        link2: link2,
        descrip3: descrip3,
        link3: link3,
        src0: src0,
        src1: src1,
        src2: src2,
        src3: src3,
        title4: title4,
        title5: title5,
        title6: title6,
        title7: title7,
        url4: url4,
        url5: url5,
        url6: url6,
        url7: url7,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        descrip4: descrip4,
        link4: link4,
        descrip5: descrip5,
        link5: link5,
        descrip6: descrip6,
        link6: link6,
        descrip7: descrip7,
        link7: link7,
        src4: src4,
        src5: src5,
        src6: src6,
        src7: src7,
        title8:title8,
        url8:url8,
        content8:content8,
        descrip8:descrip8,
        link8:link8,
        src8:src8,
        title9:title9,
        url9:url9,
        content9:content9,
        descrip9:descrip9,
        link9:link9,
        src9:src9,

      });



    });
  })
s="";
})
app.get("/music",function(req,res){
  res.sendFile(__dirname+"/music.html")
});
app.get("/movies0",function(req,res){
  res.sendFile(__dirname+"/movies.html");
});
app.get("/movies",function(req,res){
  var url="https://imdb-api.com/en/API/MostPopularMovies/k_ndonvy09";
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var mn1=d.items[0].fullTitle;
      var mn2=d.items[1].fullTitle;
      var mn3=d.items[2].fullTitle;
      var mn4=d.items[3].fullTitle;
      var mn5=d.items[4].fullTitle;
      var mn6=d.items[5].fullTitle;
      var mn7=d.items[6].fullTitle;
      var mn8=d.items[7].fullTitle;
      var mn9=d.items[8].fullTitle;
      var mn10=d.items[9].fullTitle;
      var mu1=d.items[0].image;
      var mu2=d.items[1].image;
      var mu3=d.items[2].image;
      var mu4=d.items[3].image;
      var mu5=d.items[4].image;
      var mu6=d.items[5].image;
      var mu7=d.items[6].image;
      var mu8=d.items[7].image;
      var mu9=d.items[8].image;
      var mu10=d.items[9].image;
      var mc1=d.items[0].crew;
      var mc2=d.items[1].crew;
      var mc3=d.items[2].crew;
      var mc4=d.items[3].crew;
      var mc5=d.items[4].crew;
      var mc6=d.items[5].crew;
      var mc7=d.items[6].crew;
      var mc8=d.items[7].crew;
      var mc9=d.items[8].crew;
      var mc10=d.items[9].crew;
      var mi1=d.items[0].imDbRating;
      var mi2=d.items[1].imDbRating;
      var mi3=d.items[2].imDbRating;
      var mi4=d.items[3].imDbRating;
      var mi5=d.items[4].imDbRating;
      var mi6=d.items[5].imDbRating;
      var mi7=d.items[6].imDbRating;
      var mi8=d.items[7].imDbRating;
      var mi9=d.items[8].imDbRating;
      var mi10=d.items[9].imDbRating;



      res.render("movies",{
        mn1:mn1,
        mn2:mn2,
        mn3:mn3,
        mn4:mn4,
        mn5:mn5,
        mn6:mn6,
        mn7:mn7,
        mn8:mn8,
        mn9:mn9,
        mn10:mn10,
        mu1:mu1,
        mu2:mu2,
        mu3:mu3,
        mu4:mu4,
        mu5:mu5,
        mu6:mu6,
        mu7:mu7,
        mu8:mu8,
        mu9:mu9,
        mu10:mu10,
        mc1:mc1,
        mc2:mc2,
        mc3:mc3,
        mc4:mc4,
        mc5:mc5,
        mc6:mc6,
        mc7:mc7,
        mc8:mc8,
        mc9:mc9,
        mc10:mc10,
        mi1:mi1,
        mi2:mi2,
        mi3:mi3,
        mi4:mi4,
        mi5:mi5,
        mi6:mi6,
        mi7:mi7,
        mi8:mi8,
        mi9:mi9,
        mi10:mi10,

      })

});
});
});
app.get("/tvshows",function(req,res){
  var url="https://imdb-api.com/en/API/MostPopularTVs/k_ndonvy09";
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var mn1=d.items[0].fullTitle;
      var mn2=d.items[1].fullTitle;
      var mn3=d.items[2].fullTitle;
      var mn4=d.items[3].fullTitle;
      var mn5=d.items[4].fullTitle;
      var mn6=d.items[5].fullTitle;
      var mn7=d.items[6].fullTitle;
      var mn8=d.items[7].fullTitle;
      var mn9=d.items[8].fullTitle;
      var mn10=d.items[9].fullTitle;
      var mu1=d.items[0].image;
      var mu2=d.items[1].image;
      var mu3=d.items[2].image;
      var mu4=d.items[3].image;
      var mu5=d.items[4].image;
      var mu6=d.items[5].image;
      var mu7=d.items[6].image;
      var mu8=d.items[7].image;
      var mu9=d.items[8].image;
      var mu10=d.items[9].image;
      var mc1=d.items[0].crew;
      var mc2=d.items[1].crew;
      var mc3=d.items[2].crew;
      var mc4=d.items[3].crew;
      var mc5=d.items[4].crew;
      var mc6=d.items[5].crew;
      var mc7=d.items[6].crew;
      var mc8=d.items[7].crew;
      var mc9=d.items[8].crew;
      var mc10=d.items[9].crew;
      var mi1=d.items[0].imDbRating;
      var mi2=d.items[1].imDbRating;
      var mi3=d.items[2].imDbRating;
      var mi4=d.items[3].imDbRating;
      var mi5=d.items[4].imDbRating;
      var mi6=d.items[5].imDbRating;
      var mi7=d.items[6].imDbRating;
      var mi8=d.items[7].imDbRating;
      var mi9=d.items[8].imDbRating;
      var mi10=d.items[9].imDbRating;



      res.render("tvshows",{
        mn1:mn1,
        mn2:mn2,
        mn3:mn3,
        mn4:mn4,
        mn5:mn5,
        mn6:mn6,
        mn7:mn7,
        mn8:mn8,
        mn9:mn9,
        mn10:mn10,
        mu1:mu1,
        mu2:mu2,
        mu3:mu3,
        mu4:mu4,
        mu5:mu5,
        mu6:mu6,
        mu7:mu7,
        mu8:mu8,
        mu9:mu9,
        mu10:mu10,
        mc1:mc1,
        mc2:mc2,
        mc3:mc3,
        mc4:mc4,
        mc5:mc5,
        mc6:mc6,
        mc7:mc7,
        mc8:mc8,
        mc9:mc9,
        mc10:mc10,
        mi1:mi1,
        mi2:mi2,
        mi3:mi3,
        mi4:mi4,
        mi5:mi5,
        mi6:mi6,
        mi7:mi7,
        mi8:mi8,
        mi9:mi9,
        mi10:mi10,

      })

});
});

});
app.get("/comingsoon",function(req,res){
  var url="https://imdb-api.com/en/API/ComingSoon/k_ndonvy09";
  https.get(url, function(resp) {
    let chunks = "";
    resp.on("data", function(chunk) {
      chunks += chunk;
    });
    resp.on("end", function() {
      // console.log("API Data recieved");

      let d = JSON.parse(chunks);
      var mn1=d.items[0].fullTitle;
      var mn2=d.items[1].fullTitle;
      var mn3=d.items[2].fullTitle;
      var mn4=d.items[3].fullTitle;
      var mn5=d.items[4].fullTitle;
      var mn6=d.items[5].fullTitle;
      var mn7=d.items[6].fullTitle;
      var mn8=d.items[7].fullTitle;
      var mn9=d.items[8].fullTitle;
      var mn10=d.items[9].fullTitle;
      var mu1=d.items[0].image;
      var mu2=d.items[1].image;
      var mu3=d.items[2].image;
      var mu4=d.items[3].image;
      var mu5=d.items[4].image;
      var mu6=d.items[5].image;
      var mu7=d.items[6].image;
      var mu8=d.items[7].image;
      var mu9=d.items[8].image;
      var mu10=d.items[9].image;
      var mc1=d.items[0].releaseState;
      var mc2=d.items[1].releaseState;
      var mc3=d.items[2].releaseState;
      var mc4=d.items[3].releaseState;
      var mc5=d.items[4].releaseState;
      var mc6=d.items[5].releaseState;
      var mc7=d.items[6].releaseState;
      var mc8=d.items[7].releaseState;
      var mc9=d.items[8].releaseState;
      var mc10=d.items[9].releaseState;
      var mi1=d.items[0].genres;
      var mi2=d.items[1].genres;
      var mi3=d.items[2].genres;
      var mi4=d.items[3].genres;
      var mi5=d.items[4].genres;
      var mi6=d.items[5].genres;
      var mi7=d.items[6].genres;
      var mi8=d.items[7].genres;
      var mi9=d.items[8].genres;
      var mi10=d.items[9].genres;



      res.render("comingsoon",{
        mn1:mn1,
        mn2:mn2,
        mn3:mn3,
        mn4:mn4,
        mn5:mn5,
        mn6:mn6,
        mn7:mn7,
        mn8:mn8,
        mn9:mn9,
        mn10:mn10,
        mu1:mu1,
        mu2:mu2,
        mu3:mu3,
        mu4:mu4,
        mu5:mu5,
        mu6:mu6,
        mu7:mu7,
        mu8:mu8,
        mu9:mu9,
        mu10:mu10,
        mc1:mc1,
        mc2:mc2,
        mc3:mc3,
        mc4:mc4,
        mc5:mc5,
        mc6:mc6,
        mc7:mc7,
        mc8:mc8,
        mc9:mc9,
        mc10:mc10,
        mi1:mi1,
        mi2:mi2,
        mi3:mi3,
        mi4:mi4,
        mi5:mi5,
        mi6:mi6,
        mi7:mi7,
        mi8:mi8,
        mi9:mi9,
        mi10:mi10,

      })

});
});

});
app.get("/gpa",function(req,res){
  res.sendFile(__dirname+"/gpa.html");
});
app.get("/cgpa",function(req,res){
  res.sendFile(__dirname+"/cgpa.html");
});
var elements=[];
app.get("/list", function(req, res) {
  var today = new Date();
  var date = new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long",
  };

  var day =date.toLocaleDateString('en-IN',options);
  res.render("list", {
    day: day,
    elements:elements,
  });
});
app.post("/list",function(req,res){
  elements.push(req.body.element);

  res.redirect("/list");

});
app.post("/list/clear",function(req,res){
  while(elements.length){
    elements.pop();
  };

  res.redirect("/list");
});
