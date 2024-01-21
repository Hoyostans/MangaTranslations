<button type="button" onclick="LangReplace()">Change Language</button> <div class="selectedlanguagetext"><p>0</p></div>
<script>function LangReplace() {
    var doc_lang_id = document.getElementsByClassName("selectedlanguagetext")[0];
    var doc_lang_id_node = doc_lang_id.getElementsByTagName('p')[0];
    var sel_lang_buffer = doc_lang_id_node.outerHTML.replace('<p>','');
    var sel_lang_buffer = sel_lang_buffer.replace('</p>','');
    var sel_lang = parseInt(sel_lang_buffer);
    try {
    if (sel_lang < languages.length-1) {
        sel_lang++
    }
    else {
        var sel_lang = 0;
    }
    }
    catch(err) {
        var sel_lang = 0;
    }
    var sel_lang_id = languages[sel_lang];
    var linkid = 'https://raw.githubusercontent.com/Hoyostans/MangaTranslations/main/'+manid+'_'+sel_lang_id+'.txt';
    try {
    fetch(linkid)
        .then(function (res) {
            return res.text();
        })
        .then(function (txtdata) {
            var textdata = txtdata.split("\n");
            var text_items = document.getElementsByClassName("e-hotspot__direction-mask e-hotspot--tooltip-position");
    
    for (var q=0; q<text_items.length; q++)
    {  
      var text_node = text_items[q];
      var text_node_node = text_node.getElementsByTagName('p')[0];
      text_node_node.innerHTML = '<p>'+ textdata[q] + '</p>'
    }
      doc_lang_id_node.innerHTML = sel_lang


        });
    
    }
    catch(err) {
        sel_lang++
        call.LangReplace();
    }



    }</script>
