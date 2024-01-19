fetch("https://raw.githubusercontent.com/Hoyostans/MangaTranslations/main/AWtest_CN.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (txtdata) {
        console.log(txtdata);
    });

var textdata = txtdata.split("\n");


var text_items = document.getElementsByClassName("e-hotspot elementor-repeater-item-debf4f5 e-hotspot--position-left e-hotspot--position-top");

for (var q=0; q<ib_items.length; q++)
{  
  var text_node = text_items[q];
  var text_node_node = text_node_node.getElementsByTagName('p')[0];
  ib_node.innerHTML = '<td class="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing" data-source="image"><span typeof="mw:File/Frameless"><a href="'+ib_imagelink+'" class="mw-file-description"><img src="//static.miraheze.org/hoyodexwiki/thumb/3/33/Nothing.png/250px-Nothing.png" decoding="async" width="250" height="250" srcset="//static.miraheze.org/hoyodexwiki/thumb/3/33/Nothing.png/375px-Nothing.png 1.5x, //static.miraheze.org/hoyodexwiki/3/33/Nothing.png 2x"></a></span></td>'
  text_node_node.innerHTML = '<p>'+ textdata[q] + '</p>'
}

