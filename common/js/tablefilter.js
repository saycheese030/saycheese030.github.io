function classOff(a){$('.classF[data-classid="'+a+'"]').each(function(){$(this).attr("src",$(this).attr("src").replace("_4.png","_1.png"));$(this).data("choice","false")})}function classOn(a){$('.classF[data-classid="'+a+'"]').each(function(){$(this).attr("src",$(this).attr("src").replace("_1.png","_4.png"));$(this).data("choice","true")})}
function classToggle(a){$('.classF[data-classid="'+a+'"]').each(function(){"false"==$(this).data("choice")?classOn($(this).data("classid")):classOff($(this).data("classid"))})}function classAllOff(){$(".classF").each(function(){$(this).attr("src",$(this).attr("src").replace("_4.png","_1.png"));$(this).data("choice","false")})}function classAllOn(){$(".classF").each(function(){$(this).attr("src",$(this).attr("src").replace("_1.png","_4.png"));$(this).data("choice","true")})}
function rarityAllOff(){$(".rarityF").prop("checked",!1);$(".classAR").attr("onclick","rarityAllOn();")}function rarityAllOn(){$(".rarityF").prop("checked",!0);$(".classAR").attr("onclick","rarityAllOff();")}
function updateTable(){classarray.length=0;rarityarray.length=0;gTarray.length=0;for(var a=document.getElementsByClassName("classF"),b=0;b<a.length;b++)-1!=a[b].src.search("_4.png")&&classarray.push(a[b].src.substring(a[b].src.indexOf("class_")+6,a[b].src.indexOf("_4.png")));$("input[class='rarityF']").each(function(){1==$(this).prop("checked")&&rarityarray.push($(this).prop("value"))});$("input[class='getType']").each(function(){1==$(this).prop("checked")&&gTarray.push($(this).prop("value"))});var c=
0;$("tr[class='svtList']").each(function(){-1!=$.inArray($(this).data("rarityl").toString(),rarityarray)&&-1!=$.inArray($(this).data("classl").toString(),classarray)&&-1!=$.inArray($(this).data("typel").toString(),gTarray)?($(this).show(),1==c++%2?$(this).css("background-color","#fff"):$(this).css("background-color","#ECF2F3")):$(this).hide()})};