function LangReplace() {
    fetch("https://raw.githubusercontent.com/Hoyostans/MangaTranslations/main/AWtest_CN.txt")
        .then(function (res) {
            return res.text();
        })
        .then(function (txtdata) {
            console.log(txtdata)
            var textdata = txtdata.split("\n");
            console.log(textdata)
            var text_items = document.getElementsByClassName("e-hotspot__direction-mask e-hotspot--tooltip-position");
    console.log(text_items)
    
    for (var q=0; q<text_items.length; q++)
    {  
      var text_node = text_items[q];
      console.log(text_node)
      var text_node_node = text_node.getElementsByTagName('p')[0];
      console.log(text_node_node)
      text_node_node.innerHTML = '<p>'+ textdata[q] + '</p>'
      console.log(text_node_node)
    }
        });
    
    
    
    console.log(text_data)
    
    
    }