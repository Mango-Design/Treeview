/** PRESERVE **
    Treeview Module 2.0 - Ivan Sollima ISDesign.tv
    Author: Ivan Sollima.
    License: GNU GENERAL PUBLIC LICENSE,
    version: 2.0,

 */
 
//INIT ALL THE ENVIRONMENT VARS NEEDED TO CREATE A TREEVIEW
var data = (function {
    //************************

    var item = {
        //UNIQUE IDENTIFIER FOR THE ITEM
        id:"id0",
        //ADD CSS CLASSES
        classes:"",
        //DISPLAYED IMAGE
        img:"dummy-images/1.jpg",
        //TITLE
        title:"Fiat Group",
        //DESCRIPTION
        description:"Oggetto Offerta",
        //ARRAY OF OPTIONS ID, EVERY ELEMENT OF THE ARRAY CORRESPOND TO AN OPTION ID YOU'LL CREATE.
        parameters:["00", "01", "02", "03"],
        //DISABLED BUT VISIBLE OPTION FROM THE OPTION ARRAY
        disabled_parameters:["00", "01"],
        //DISABLE THE INTERACTION WITH THE ITEM
        disabled_item:false,
        //ARRAY OF GROUPS ID, EVERY ELEMENT OF THE ARRAY CORRESPOND TO A GROUP YOU'LL CREATE.
        groups:["group0","group1"],
        //SELECT ITEM
        selected:false,
        //SET THE PRIORITY OF THE ITEM:
        // With priority "all" when this item will be selected, all the other items will be deselected, and
        // viceversa.
        // With priority "group" when this item will be selected, all the other items that share the same group
        // will be deselected, and viceversa.

        priority:"all",

        //MODULE EXTRA PARAMS - sidebarTitle_changer
        sbar_title: "Every Item can have it's own sidebar title, and HAVE different options set"
    },
    item1 = {
        id:"id1",
        classes:"",
        img:"dummy-images/1.jpg",
        title:"Fiat Group",
        description:"All the fiats",
        parameters:["10", "11", "00", "03"],
        disabled_parameters:["10", "12"],
        disabled_item:false,
        groups:["group1","group2"],
        selected:false,
        priority:"group"
    },
    item2 = {
        id:"id2",
        classes:"",
        img:"dummy-images/2.jpg",
        title:"Station Wagon",
        description:"Good Stability",
        parameters:["12", "13"],
        disabled_parameters:[],
        disabled_item:false,
        groups:["group2","group3"],
        selected:false,
        priority:""
    },
    item3 = {
        id:"id3",
        classes:"",
        img:"dummy-images/3.jpg",
        title:"Punto",
        description:"Big Spaces",
        parameters:["10", "00"],
        disabled_parameters:[],
        disabled_item:false,
        groups:["group0","group1","group2"],
        selected:false,
        priority:""
    },
    item4 = {
        id:"id4",
        classes:"",
        img:"dummy-images/4.jpg",
        title:"A3",
        description:"Elegant, Simple",
        parameters:["00","01","02","03","10","11","12", "13","14"],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    item5 = {
        id:"id5",
        classes:"",
        img:"dummy-images/5.jpg",
        title:"500",
        description:"Small Space, Big Parking Space",
        parameters:["03","10","14"],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    item6 = {
        id:"id6",
        classes:"",
        img:"dummy-images/6.jpg",
        title:"600",
        description:"Small, low consumption",
        parameters:["14"],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    item7 = {
        id:"id7",
        classes:"",
        img:"dummy-images/7.jpg",
        title:"Ibiza",
        description:"Warm Party!",
        parameters:["03","10","11","13","14"],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    item8 = {
        id:"id8",
        classes:"",
        img:"dummy-images/8.jpg",
        title:"Giulietta",
        description:"Elegant, Romantic",
        parameters:[],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    item9 = {
        id:"id9",
        classes:"",
        img:"dummy-images/9.jpg",
        title:"Romeo",
        description:"Alfa, Beta, Gamma Y",
        parameters:[],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    item10 = {
        id:"id10",
        classes:"",
        img:"dummy-images/10.jpg",
        title:"Malaga",
        description:"You know this One?",
        parameters:[],
        disabled_parameters:[],
        disabled_item:false,
        groups:[],
        selected:false,
        priority:""
    },
    paramlist = {
        id:"paramlist0",
        title:"Mechanic Options",
        items_id:["00", "01", "02", "03"],
        items_title:["Extend-Warranty", "Multi-Color", "Full Fuel", "Modded Engine"]
    },
    paramlist1 = {
        id:"paramlist1",
        title:"Interior Customizations",
        items_id:["10", "11", "12", "13"],
        items_title:["Leather Seats", "TV on Seats", "+1 Seats", ".."]
    },
    filter = {
        id:"all",
        title:"All Cars",
        contents:"items"
    },
    filter0 = {
        id:"group0",
        title:"Race Cars",
        contents:"items"
    },
    filter1 = {
        id:"group1",
        title:"Hibryd Cars",
        contents:"items"
    },
    filter2 = {
        id:"group2",
        title:"GPL or Diesel",
        contents:"items"
    },
    filter3 = {
        id:"selected",
        title:"Selected",
        contents:"items"
    };

    return {
        itemVect : [item,item1,item2,item3,item4,item5,item6,item7,item8,item9,item10],
        paramVect : [paramlist,paramlist1],
        filterVect : [filter,filter0,filter1,filter2,filter3]
    }
})


var treeview = {
    items:data.itemVect,
    params:data.paramVect,
    filters:data.filterVect,
    title:"<span class='lBlue'>Treeview 2.0</span>",
    classes:"shadow round5-left",
    sidebarTitle:"<span class='red'>Selection option (per item)</span>",
    sidebarClass:"",
    selectionMode:"multi",
    extend_modules:function(){
        return[
            //manual_interactionW(treeview),
            sidebarTitle_changer(treeview),
            //scrollbars_module(treeview),
            selectors_deselectors(treeview)
        ];
    },
    onConfirm:function () {
        console.log(filterArray(treeview.items, "selected", true));
    },
    onCancel:function () {
        treeview.close();
    },
    onCreate:function () {
        $(".treeview")
            .draggable({distance:30, scroll:false, handle:".treeview", cancel:".appender, .itemGroups li, .buttons > *"})
            .trigger("change");
    },
    onClose:function(){}
};


//TREEVIEW MAIN CONSTRUCTOR
function TreeviewConstructor(arg){

    //NORMALIZE INPUT PREVENTING CRASHES
    arg = init_optional(arg,true);

    //WRAPPER EXPORT FUNCTION TO OBTAIN HTML
    arg.wrapped = function(){
        var wrapper, search, closeTrev;
        search = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHonAACAgwAA+mQAAIDSAAB2hgAA7OkAADmeAAAV/sZ+0zoAAARJSURBVHjanJVPbBNHFMa/2Z3d9a6dGJCA2NQ2cVCJU1oCMeqfA+kFqPpHpKJUQkg5lGMlJNQTN45ce6kiIWEp6qHKKemloBS1kSoahahqKhCugDTaJaGtEydxZM/O7sxsD8TUBINoP+m7vfnp6c2bb0gURWiV67p7ARwF0AMgAYADWATwM4Bf8BLKZrOgLcAkgPcZY6fr9XpBKdUFIEYIEbqur1iWdS8ej48DmPI87/ZLgV3X7QTwQbVa/SIIgsOGYSAWi4FSCkIIACSklLlarfZqIpEoZjKZrzzPu/UieLPjD5tQ27Zh27ZLKf0dQA2ApZTaSyntU0plGWMnHMcRmUzmN8/z+HPBruvuZYydajQahx3HgeM4M4ZhjAK4CWAZQFzTtP4gCM5KKU/oup7yff9127bfVUpd33pHrR0Prq+vH9B1HaZpuoZhfA3gqud5TAjRrCt3d3eHnPMdQoh3NE17LYqi07lc7saDBw9EO7AGYJ/v+7sJITAM4y6AqYWFBcYYQxiGTwzgmm3b9xqNRiiESAghkgC6pJTY6iY4IYSIRVEEQsgGgGXf95+ChmGIO3fu1CmlHueccc4hpbQBdAghnqltjoJLKcMwDC0hhGmaZpxzjq2z6+/vN6SUacaYSQhBFEUhAB6GIdrNmW4ufzUIgsTGxkbecZwBIcQ9pdTW2qPVajUdBEHMsizfNM01AH++CPxTMpn8qFKpZJVSBcuyzg4MDIQAJgFsALAAvM05H3Zd9y1d16Hr+pKu6zdnZ2cbQRA8F/xrV1fXHysrK67v+1nP896r1Wo7du7cORSLxZgQglYqlbTneW9GUbSNUop6vf7K8vLyqWKxuD41NTXWDkyiKILrum9wzi+Uy+XjUsq0UgpSylApxYQQhlLKppTCNE0YhgFCCKSUKpVKTaZSqauTk5NjrdBz585Bv3TpEpLJ5F/1en1x165dyUajETLGOqWUjlLKIoQYhmH4nZ2dXhAEHUopTSkFpRSpVqt5Qkjy0KFDolwu326u25EjRx533BJEMQCDUspParXatiAIYrqui46OjjXLsqYfPnz48fz8/DFN07TNzYCUMspkMj/k8/mL4+PjMwBw/vz5f9NtM5V8ANdd172xffv23S2x+ffExETj5MmTa0II3L9//5iu69pmQEVBEDiMsc+HhoZSAL4FEJF2g798+fLjC3h88CmdOXPm0/n5+c/K5fJxSmnU29s7WalU9iwtLe3r6+v7MZ/Pu4SQC7TdO2/JiGc0Ojo6Njw8rHHOjTAMnUePHu1ZXFw8AABzc3MnVldXbxWLxUHteeAXuVQqfVMoFC7u37//7sLCQqHZCKU0iMfjdQCrbcHtgqXVQghcuXJlxrKsawcPHvxeSqk0TfOLxeJ3hULhy2w2O/2/wE2PjIyM9fb2lnK53GxPT890Op2+WiqVJp48kK1yXRf/QQ6AQQCrAKabf94/AwDOKLZO+C9NvQAAAABJRU5ErkJggg==";
        closeTrev = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHonAACAgwAA+mQAAIDSAAB2hgAA7OkAADmeAAAV/sZ+0zoAAAFrSURBVHjalFI7S8NQGD0390qDCPXVDjVNRLRLUfwFgi7uTnWwhCoiTv4XQYpge81k/4ogbiI4WKqJJCQ+htaU3uRzaUFFh57xwPn4zoMREcaBAABHyjyA4yF3VrXt4D9eAAARuY/tttA0DcbCwr4j5RIAKKVunl3XAICiYZwAmNYAgDFmmcVizw8ChFGUU0q1kiQ5DaMoF72+wjJNxTkvAYAGAFXb9oQQ26vl8rvreZmBUptJmu76QZBZX1vrMcas0Zvsu+nmxUW99/lZ6Tw9ZTnnMA3jQ9f1K7tWO/phegQiyvfjWBdCgHOOlIj/Tkn7fr3b7W69+H6mtLysTMN494NgKo7jimw06j8EjpTlgVK7d/f32UXL+mCM7QghWrMzM/12p5Mloj1HygIAsMtms6CUenh23Uld1/vzc3PXtYODDUfKCZUkt2EYltM0RT6X6wkhVhgRYag+BPA2LGjwR3HnVdv22LjT+BoAm8OvkCeFVjoAAAAASUVORK5CYII=";

            wrapper = "<div class='treeview "+ arg.classes +" hidden'> " +
            "<div class='title'>"+ arg.title + "</div>" +
            "<div class='appender'>&nbsp;</div>"+
            "<div class='buttons'>"+
                "<div class='search'><input type='text' class='xxl' /><img src='"+search+"' alt='Search'/></div>"+
                "<div class='lightBtn green fRight round5' id='tree_confirm'>Conferma</div>"+
                "<div class='lightBtn red fRight round5' id='tree_cancel'>Annulla</div>"+
            "</div>"+
            "<img src='"+closeTrev+"' style='position:absolute; top:5px; right:5px;' alt='' class='closeTrev' />"+
        "</div>";
        return wrapper;
    };

    //ACTION FUNCTION TO ATTACH EVENTS RELATED BEHAVIORS
    arg.actions = [function(){
        $(".treeview")
            .off()
            .on("click",".item",function(){
                    $(".tweakBar .selector").css({'background-color':'#FFBB00'});
                })
            .on("click","#tree_confirm", function(){
                arg.onConfirm();
                $(".treeview").trigger("confirm");
            })
            .on("click","#tree_cancel, .closeTrev", function(){
                arg.onCancel();
                $(".treeview").trigger("cancel");
            })
            .on("create", arg.onCreate)
            .on("close", arg.onClose)
            .on("keyup",".search > input", function(){
                    searchTreview($(".treeview .item"),$(this).val());
                });
    }];

    //WRAPS ITEMS
    arg.itemsW = function(){
        var i, arglen, single, item, actions, sel, dis, wrapper = "";
        arglen = arg.items.length;

        for(i=0; i<arglen; i++){
            item = arg.items[i];
            sel = item.selected ? " selected" : "";
            dis = item.disabled_item ? " disabled" : "";
            single = "<div id='"+ item.id +"' class='item " + item.classes + sel + dis +"'>"+
                "<img src='"+ item.img +"' class='avatar small fLeft' alt='"+item.title+"' />" +
                "<div class='title'>"+item.title+"</div>" +
                "<div class='description'>"+ item.description + "</div>"+
                "</div>";
            wrapper += single;
        }
        actions = function(){
            $(".treeview")
                .on("click.item_click.native",".appender > .item",function(){
                    if(arg.selectionMode == "single"){
                        arg.items = unselectItems(arg.items,$(this));
                    }
                    arg.items = selectItem(this,arg.items);
                    $(".treeview").trigger("change");
                })
        };
        return {"html":wrapper,"actions":actions};
    };

    //WRAPS PARAMS
    arg.paramsW = function(){
        var i, j,len, item_len, item, list, actions, wrapper = "", tweakB_class,opener,closer;

        // IMAGE BASE64 ENCODED
        opener = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAwCAYAAAAhOEsMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHonAACAgwAA+mQAAIDSAAB2hgAA7OkAADmeAAAV/sZ+0zoAAANXSURBVHja7JZPT+NGFMB/4xkTiBwkJC5k+SOEgBUiXMqBQwXSXnvot+gHrFSp6oWVkOCE1C8AApaFOHEcx0lsx/HM9NDGApzl0FNV7ZMsy2/ezzPz3ps3T1hrAbi4uPhBSonjOMwTay1aa7TWX8/Oztri/Pxcuq77h+u6n5RSOI6DEKICzcCiKEZ5nv+spJQt13U/LSwsoJRCSlkBAYwxFEWBEMKz1v6ipJSeUgqlFK7ropSaC2qtEUJgraUoCk85joPjOEgpmS317T6ttSUkpfzbFkAIUT7fArXW5f6FEDgvwfdkNj57O/xL+Q7+p0AFEAQBCwsL1Go16vU6y8vLPD8/k+c5i4uL1Go1Go1GdUbHcfjy5QvdbpdutwuA53nc3d3h+z6+7zM7t6/AlZUV2u02QRAQhiFJktBoNEiSBN/3ieOYwWBQBYUQrK2t0W63yfMc3/cB2N7e5unpiSzL6HQ6853z8eNHhsMhSZIQhiFaa3Z3d9FaMxqNGA6HTCaTKri0tESz2SSOY/I8JwgCpJTs7e0RRRFFURCG4fxwtFot4jhmOp2WTjo6OiJJEiaTCf1+H2NMFWw2mzQaDdI0ZTgcEscxy8vLrK2tkaYpWZaVTqokwNHREdZasizj/v6+1AFMJhOenp7mg57n4boug8GAIAgAqNfr1Go1hsNh6fEK2Ov1EEIQRRHb29ulTilFFEU0m80qmKYpSZKQpimO47C1tcV0OqXf75NlGVmWsbOzUwWDIEBrzWAwYH9/HyFEqYvjmM3NTVzXfQ0aYwjDkPF4zGg0otVqYa2l0+mU3jw8PKzGsd/vl7FaX1+nXq8TRRHj8Zh+v4/neayurlbBx8dHOp0OnU6HVqsFwMPDA91uF9/3OTg4qJ7HMAy5vr6m1+vheR4bGxuMx2MuLy/p9XoYY9jf368m+e3tLVEUMZ1OOTk5AeDm5qbM2+PjY5RSryv71dXVj/V6/aJWq+G6LvMuV2ttec3leU6apr99r6v/I/BtlX5PZrbqZWbMOqi3P5rpXtqo2YcxBq0181bwctwYgzEGZYzRRVGUPYwx5t1cLYoCrbVWRVH8KaX8CnyYdVDfArXWTKdTiqL4VVhr+fz58wel1E+zPu5b3eM/sz6cnp7+/tcA+VkjVZ49VxUAAAAASUVORK5CYII=";
        closer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAwCAYAAAAhOEsMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHonAACAgwAA+mQAAIDSAAB2hgAA7OkAADmeAAAV/sZ+0zoAAANbSURBVHja7JZNa+tGFIaf0YwsybY+rPgL35AEh7vJInSXVSDLhkL/RP9V6d8o3hXiTbxIN3EI+SCYfFx7EzDExsGRRtOVjF07ULoq5R4QYg569Ioz54xeYYyh2+3+qJTasSwLIQRCCJbDGIMxhjRNSdP095OTk2+i2+3+Ytv2b7ZtI6Ukh5cjyzKMMSRJQpqm3+bz+VellPq5UChg2zZKqU/BLMvy/Bet9Q9KSimVUiilsG37U1BrjTGGLMtIkkQqy7KwLAsp5aefmq+11gghsCwLlRdjuTCbwOVnAKzlN/6TWAH/TXwH/1Og+nui0+nQ6/UolUqcnp5yeHjI+fk5nU4H13U5Ojri4OBgVTFNUy4uLigUCgRBwP7+PgC9Xg/btomiiHa7va54e3tLrVaj1Wqxt7dHqVTi+fkZx3Fot9s0m03iOGY2m60qXl9f02g0qNVq7OzsANDv96nX69Trdba3t9eL8/r6ynQ6pVKpUCqViKKI2WzGy8sLlUoFx3GoVCrr4NXVFWEY4rou9XodIQT9fp9yuUypVCKOYyzLWgWTJOHp6YkgCJBSUq1WMcZwe3tLGIaL3No+Pjw84LourutSqVSwbZvHx0eyLMPzPIrFIp7nrYPD4ZAoikjTlK2tLQAGgwFRFGGMWeTWwEajge/7zOdzZrMZANVqlTAMSZKE6XS6GWy1WjiOA8Dl5SUAu7u7uK6LEGKRWwPzanqex2g04u3tjSAI8H0fz/OYTCYMh8N10LKsxV4Vi8WFQq1Ww7ZtgiCg3+9vno44jlFKEUURd3d3aK2pVquLvh0Oh7y/v6+DjuPg+z7lchkpJff390gpieOYYrGI7/vc3Nxsnsd6vY7rurRaLQaDAXnFC4UCzWaT0WiEMWZ9OsIwJAgCHMdhPB4zmUzwfZ84jnFdF9u2GY/HuK67CgohaDQazOdzwjBkOp3i+z61Wo3ZbEYQBHx8fGw+AcIwXPsllMtlPM8jSZJFk3w/V/9HYN5/+f2zyB0WgMoXWZYhpVw2QmvOagXUWpNfQgiklBuV0jRFa71wWSrLsmmapgghMMagtd4Iaq1zE4jWeqqSJPlVCPGTMaacq25yj1mWkaYpSZL8obXuC2MMZ2dnTSnlFynlp2Yp93PHx8d/Avw1AKrHexXASv7kAAAAAElFTkSuQmCC";

        len = arg.params.length;

        tweakB_class = " "+arg.sidebarClass;

        for(i=0; i<len; i++){
            item = arg.params[i];
            list = "<ul id='" + item.id + "'> ";
            list += "<li>"+ item.title + "</li>";

            item_len = item.items_id.length;
            for(j=0; j<item_len; j++){
                list+="<li>"+
                          "<span class='checkbox disabled' id='"+item.items_id[j]+"'>" +
                          "<input type='checkbox' value='"+item.items_id[j]+"' disabled='disabled' />" +
                        "</span>"+item.items_title[j]+
                    "</li>";
            }
            wrapper += "</ul>";
            wrapper += list;
        }

        wrapper = "<div class='tweakBar shadow round5-right"+tweakB_class+"'>" +
            "<div class='title'>"+ arg.sidebarTitle + "</div>"+
            "<div class='appender'>"+wrapper+"</div>" +
            "<img src='"+closer+"' alt='' class='opener' />" +
            "</div>";

        actions =  function(){
            $(".treeview")
                .on("click.params_edit.native",".tweakBar > .appender span.checkbox",function(){
                    var collection;
                    //GET UPDATED PARAMS LIST FROM THE CURRENT ITEM SELECTION
                    collection = setParam(arg.items, $(this));
                    //MERGE THE CHANGES WITH ORIGINAL ITEMS ARRAY
                    arg.items = mergeItems(arg.items,collection,"id","parameters");
                })
                .on("change.params_refresh.native", function(){
                    //REFRESH SELECTED PARAMS ON THE LIST UPON SELECTED ITEMS
                    refreshParams(arg.items,arg.params);
                })
                .on("change.params_enable.native", function(){
                    //ENABLE PARAMS ON THE LIST UPON SELECTED ITEMS
                    enableParams(arg.items,arg.params);
                })
                .on("click",".tweakBar .opener",function(){
                    if($(this).parent().hasClass("closed")){
                        $(this).attr("src",closer);
                    }else
                        $(this).attr("src",opener);

                    $(this).parent().toggleClass("closed");
                });

        };

        return {"html":wrapper, "actions":actions};
    };

    //WRAPS GROUPS
    arg.filterW = function(){
        var i,len, item, group = "", wrapper, actions;

        wrapper = "<div class='itemGroups'>" +
                     "<ul>";

        len = arg.filters.length;
        for(i=0; i<len; i++){
            item = arg.filters[i];
            group += "<li id='" + item.id +"'>" + item.title + "</li>";
        }
        wrapper += group + "</ul>" +
            "</div>";

        actions = function(){
            $(".treeview").on("click.filter_apply.native",".itemGroups li",function(){
                filterGroup(arg.items,$(this));
                $(".itemGroups .active").removeClass("active");
                $(this).addClass("active");

            });
            $(".treeview > .appender").addClass("twoCols");
            filterGroup(arg.items,arg.filters[0].id);
            $("#"+arg.filters[0].id).addClass("active");

        };
        return {"html":wrapper, "actions":actions};
    };

    //INIT CLASS THAT CREATE A FULL READY VIEW
    arg.init = function(where){
        var coord, obj, i, len, ext;

        //REMOVE PREVIOUS INSTANCES
        $(".treeview").remove();

        //INIT SYNC MODE
        syncMode('open');

        //APPEND NEW INSTANCE

        $(where).append(arg.wrapped());
        $(".treeview").fadeIn().removeClass("hidden");

        //APPEND ITEMS IF AVAIABLE
        if(arg.items instanceof Array && arg.items.length > 0){
            obj = arg.itemsW();
            $(".treeview > .appender").append(obj.html);
            arg.actions.push(obj.actions);
        }

        //APPEND PARAMS (AND SIDEBAR-RIGHT) IF AVAIABLE
        if(arg.params instanceof Array && arg.params.length > 0){
            obj = arg.paramsW();
            $(".treeview > .appender").after(obj.html);
            arg.actions.push(obj.actions);
        }

        //APPEND GROUPS (AND SIDEBAR-LEFT) IF AVAIABLE
        if(arg.filters instanceof Array && arg.filters.length > 0){
            obj = arg.filterW();
            $(".treeview > .title").after(obj.html);
            arg.actions.push(obj.actions);
        }

        //LOAD MODULES EXTENSIONS ACTIONS
        if(arg.extend_modules){
            ext = arg.extend_modules();
            len = ext.length;
            for(i=0; i<len; i++){
                arg.actions.push(ext[i].actions);
            }
        }

        //SET POSITION ON THE SCREEN
        coord = centerScreen($(".treeview"));
        $(".treeview").css({left:coord.x,top:coord.y});

        //ENABLE ACTIONS
        len = arg.actions.length;
        for(i=0; i<len; i++)
            arg.actions[i]();

        //FIRE CREATION END EVENT
        $(".treeview").trigger("create");
    };

    //ADD ACTIONS TO THE TREEVIEW MODULES
    arg.add_action = function(action,fn,obj){
        var ret = false;
        obj = obj == null ? "" : obj;
        if(action && fn){
            $(".treeview")
                .on(action,obj,fn);
            ret = true;
        }
        return ret;
    }

    //REMOVE ACTIONS FROM THE TREEVIEW MODULES
    arg.remove_action = function(action){
        var ret = false;
        if(action){
            $(".treeview")
                .off(action);
            ret = true;
        }
        return ret;
    }

    //HANDLE THE CLOSE OF THE TREEVIEW (ANIMATIONS)
    arg.close = function(){
        $(".treeview")
            .trigger("close")
            .effect("drop",650, function(){
            $(this).remove();
            syncMode('close');
        });

    }
}

/***********************************************************************************************************************
******    TREE VIEW MODULAR EXTENSIONS    ****
************************************************************************************************************************

    THIS MODULE MODIFY DEFAULT INTERACTIONS BETWEEN ITEMS AND THEIR PARAMETERS.
    THE SELECTION AND THE PARAMETER SETTING WORKFLOW WILL BE SEPARATED, AS I CAN SELECT AS MANY ITEMS AS I PREFER, WHILE
    SETTING PARAMETERS OF JUST ONE ITEM PER TIME (clicking on the wrench). */

function manual_interactionW(context){
    var MODULENAME = "manual_interactionW";
    var actions,interaction,key, key_h;

    //IMAGES BASE64 ENCODED
    key = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHonAACAgwAA+mQAAIDSAAB2hgAA7OkAADmeAAAV/sZ+0zoAAANrSURBVHjarJZNaCRFFMffq8+u6erp6Yjekt0FUQ8660Xw4FVQ2Gz2IigEYQXZIDoRJBBDYA6yKCgIuRhGyB5yWSSHmKgHPy568CbsuigqrOseFDzMMDM13UlXT5WHTeKQnSST0XfsV49f/d//9evG2dlZGBLnCCGvU0q/cc594ZwD7/2wc7C+vg4nBRn2EBG5lPKFKIrWyuXyspQyIITAuHFU5a+I+GwQBGkcx+9UKpXrSqnSuKChVd57sNb+kmXZu4QQiON4JkmSN5VSMA7oyAprLaRpuruzswOMMYii6BWtdcgYGwtyDhEfRsT7ks45WxQFeO9BCDFZKpWmOOcw7OyxEELIG0EQfKuUepRzfjj/NCICIgIhxHLOs3GUMErpl0qpy0EQfJ5l2Qdpmu465wAAnpRS1qSUQAjZv/2DiHgHEY8c6aEQ59xX3vv3pZRXgyD4SCkFRVEAIoKUErTWsHf7kFL6Ced8hlJ6c+8iI0P6WZZ9KKV8Ko7jS0op8N7vtwgYYwceCCHOlsvl7aIopo0xN621o3nivYc8z7Nut/tir9d72zn3M+d8RwjR45zvDJpMKYUwDKeSJNnSWleHeDhcyd4UQZZluwDwnrV2pVQqTTLGckR8iFJ6XQhxllJ6r4Ax0FqfAYBtALgIADdOguDg7kJE4JwD5/ygTUKIx6Mo+iwMwzODk1UUBRhj7rZarYsrKys3Rn4Z91oHaZpCp9OBTqcDrVbrVrPZnDbG/FEUxb8tuKdoKkmSrVqtVh1rrXjvwTkH1lowxvzYarWmjTF3jgBt12q186deK4dXzADoOEXnx4YMgG6dBJqfn79wrPGjBOcctNZPJEmyrbW+bxjSNIV2u33NGHOl0WjYUykZpXWU0m4Yhn9NTExcTpLk47m5uQAAgFar1VMvPOcc9Pv9v51zX1NKn2eMJYjYdM5dyvN82Tn3COf8JUKI3djY+G7sb+qAR6/1ej3o9/tFnuffLy0tdZrN5g/WWtBavxXH8ctjKTmk6DYiTgohnnHOVTc3Nx/L83xeSllSSt0lhGyN/3ewF2tra84Yc6Xb7V7z3s9oreuVSuUBpdRPAPBcvV7/9D9DAAAajUbRbrdf7fV6y0KIZhRFvzHGLiwuLt4+WJD/R6yurvYB4OrCwsKfWutWvV7/fT/3zwCbZqCIO6T1ywAAAABJRU5ErkJggg==";
    key_h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHonAACAgwAA+mQAAIDSAAB2hgAA7OkAADmeAAAV/sZ+0zoAAAOJSURBVHjarJXNa2NVGMafc3Lu1+nNbZKee9PQNp2AoKCIS/8Bu+nEgkVwJx2QATMVGVeCpFAdWqi7ElwIdTvMso0KI7pw0434MTMoCs7YC629+bC0pcm5zf1wY8dQkswk+m7fw/md5/14DonjGJejVCoVGGM3GGNfR1H0RRAEiKIIw0alUgEA0F5JSqlimubruVxuK5fLfWCapp5IJDBq9IRsbm7+lkgkXrEsqzU9Pf3hzMzM7XQ6zRlj/x8EAFZXV389Pj5eo5RiampqIZ/Pv5tKpTCKIjoo2Ww2/ZOTE+i6jlwud81xnDFd14eHlEqlwvLy8jO9kp1OpyOlRBzHGBsbm8lkMnnOOQghw0EYY8uWZX1bLpefvZwkhLxMKQUhBIyxjmEYbVVVh4YwxtjdTCazZFnW5xsbGx83m00/CAIAeMmyrHeSySQYYyCEgBBiU0r/GBoSRdFXYRhumKZ5y7KsT8bHx+H7PiilSCaTsG0bmqYBwJiiKHc45wuapt1rt9votWO9IrG7uxtXq9XvNE17Pp1OPyeEQCaTwcTEBFKpFDjnoJRe7E+KEDIfBME3vu97YRgOvHx+fv7f6VpbW2sfHh6+0Wg03g/D8BfDMKRpmmeGYcgLAACoqgohRD6fz29ns9kXdV1/qv6Qy5IrlQpPp9MzhmGcU0odRVFuc86vqKr6+IyUEvV63XVd91XP8366mMB+tkIG1XV9fR2c8xcmJyerQojZ7h2RUqLRaLh7e3t9QReQgT5xcHAATdMe+L5fjON4x7btxyBd1yGEyAPYBlD0PO9eP0UDIWEYot1uw/O8+wCKALZt277SA7QDoK+iJzpeHMeQUnaDqgMU9QQ9la12gR7EcVwE0Ld0hJCS53lVKeVwkG5QrVa7TwjpC6KU7iiK8lmtVrsOoPNEFx5UOtd1i/V6fa/7xZqmnQoh/iwUCkuzs7Ofrqys6EMp6dOjq/8MQ0HTtL86nc5rZ2dnP0RRtCWEeBPAw3K5/NFIX113jwC8TSn9UggRtFqtXdd1z6WU3zuOs+g4zntRFLls1H+7q0d3FUXZUlX1WhzHd6SUP7ZarRthGIJz7tm2fTQypAsU1ev165xzIoRYymazC0EQIJVK/QyguLi4+PA/QQAgiiKcnp4G+/v7bwH43XGcm5zzJoCrc3Nzj0ZqfD9nODo6CqMouhWG4YFt20fn5+ePLvJ/DwByBr1QAHrwsAAAAABJRU5ErkJggg==";

    //PREPARE ACTION CONTROLLER WRAPPER
    interaction = "<img src='"+key+"' class='ed_param "+MODULENAME+"' alt='Modifica i Parametri' />";

    //ADD REQUIRED ACTIONS, AND MODIFIY PREVIOUS SCRIPTS BEHAVIOR
    actions = function(){

        $(".treeview > .appender .item > .description").after(interaction);
        $(".treeview")
            //** DEFINE NEW 'SELECT ITEM' EVENT CHAIN
            .off(".item_click.native")
            .on("click.item_click."+MODULENAME,".appender > .item",function(){
                if(context.selectionMode == "single"){
                    context.items = unselectItems(context.items,$(this));
                }
                context.items = selectItem(this,context.items);

                $(".treeview .tweakBar > .appender span.checkbox").addClass("disabled");
                $(".treeview .tweakBar").addClass("closed");
            })
            .on("mouseenter",".ed_param."+MODULENAME,function(){
                $(this).attr("src",key_h);
            })
            .on("mouseleave",".ed_param."+MODULENAME,function(){
                $(this).attr("src",key);
            })
            .on("click",".ed_param."+MODULENAME,function(e){
                var sel;
                e.stopPropagation();

                //IF THE CLICKED ITEM IS NOT SELECTED, SELECT IT FIRST.
                sel = $(this).parent();
                if(!sel.hasClass("selected")){
                    if(context.selectionMode == "single"){
                        context.items = unselectItems(context.items,sel);
                    }
                    context.items = selectItem(sel,context.items);
                }

                $(".treeview")
                    .trigger("change.params_refresh."+MODULENAME,$(this).parent())
                    .trigger("change.params_enable.native");
                $(".treeview .tweakBar").removeClass("closed");
            })
            //** DEFINE NEW PARAMETERS EDIT BEHAVIOR
            .off(".params_edit.native")
            .on("click.params_edit."+MODULENAME,".tweakBar > .appender span.checkbox",function(){
                var collection;
                if(!$(this).hasClass("disabled")){
                    //GET UPDATED PARAMS LIST FROM THE CURRENT ITEM SELECTION
                    collection = setParam(context.items, $(this));
                    //MERGE THE CHANGES WITH ORIGINAL ITEMS ARRAY
                    context.items = mergeItems(context.items,collection,"id","parameters");
                }
            })
            //** DEFINE NEW PARAMETERS REFRESHING BEHAVIOR
            .off(".params_refresh.native")
            .on("change.params_refresh."+MODULENAME, function(e,arg_item){
                var id, item;
                //IF LAST SELECTED ITEM IS SET (arg_item)
                if(arg_item){
                    id = $(arg_item).attr("id");
                    //GET IT'S DATA STRUCTURE
                    item = filterArray(context.items,"id",id);

                    //REFRESH SELECTED PARAMS WITH IT
                    refreshParams(item,context.params);
                }
            })
            .find(".tweakBar").addClass("closed")
            .find(".opener").remove();
    }

    return {"actions":actions};
};

/*  THIS MODULE ADDS ONE METHOD IN THE MIDDLE OF THE INTERACTION AMONG ITEMS AND USERS BY CHANGING SIDEBAR R CONTEXT
    TITLE, ACCORDING TO AN ITEM SPECIFIC ATTRIBUTE (sbar_title) OR IF NOT FOUND RECOVERING IT'S ORIGINAL STATE, TO
    CLEAR UP THE ACTION THAT THE USER IS GOING TO PERFORM WHILE INTERACTING WITH SIDEBAR R AND ITEMS*/
function sidebarTitle_changer(context){
    var MODULENAME = "sidebarTitle_changer";
    var actions;

    //ADD REQUIRED ACTIONS, AND MODIFIY PREVIOUS SCRIPTS BEHAVIOR
    actions = function(){
        $(".treeview")
            //** DEFINE NEW 'SELECT ITEM' EVENT CHAIN
            .on("click.item_click."+MODULENAME,".appender > .item",function(){
                var id, item, title;
                id = $(this).attr("id");
                item = filterArray(context.items,"id",id);
                title = item[0].sbar_title;
                if(title){
                    $(".treeview > .tweakBar > .title").html(title);
                }else{
                    $(".treeview > .tweakBar > .title").html(context.sidebarTitle);
                }
            });
    }

    return {"actions":actions};
};

/*  THIS MODULE HANDLE SCROLLBARS BEHAVIOR AROUND THE TREEVIEW AND BODY, AND HOPEFULLY WILL SUBSTITUTE DEFAULT SCROLLING
*   BARS WITH CUSTOM ONES*/
function scrollbars_module(context){
    var MODULENAME = "scrollbars_module";
    var actions;

    actions = function(){
        //** DISABLE SCROLLING EVENTS IN THE BODY WHILE INTERACTING WITH TREEVIEW
        $("body").css("overflow","hidden");
        //** RESTORE CHANGES ON CLOSE
        $(".treeview")
            .on("close."+MODULENAME,function(){
                $("body").css("overflow","auto");
            })
            //ADJUST SCROLLBAR WHILE FILTERING ELEMENTS
            .on("click",".itemGroups li",function(){
                //RESET SCROLLBARS ON ITEM FILTERING
                $(".treeview .scrollbarH").remove();
                init_trev_scrollbar();
            })
            .children(".appender").css("overflow","hidden");

        //SET CONTAINER ELEMENTS
        $(".treeview > .appender").addClass("scrollbar_container");

        //INIT SCROLLBAR FOR EACH CONTAINER ELEMENT
        init_trev_scrollbar();

        function init_trev_scrollbar(){
            $(".treeview .scrollbar_container").each(function(){
                var clip_h, h, dim, html, container = $(this);

                html = "<div class='scrollbarH'>" +
                            "<div class='scroller'></div>" +
                       "</div>";

                //APPEND THE SCROLLBAR STRUCTURE
                $(this).after(html);

                //EVALUATE VISIBLE WINDOW DIMENSIONS OVER TOTAL WINDOW DIMENSION THAT INCLUDES HIDDEN ELEMENTS
                h = parseInt($(this).css("maxHeight"));
                if(isNaN(h))
                    h = $(this).height();

                clip_h = clippedHeight($(this));

                //IF THERE ARE ELEMENT THAT NEED TO BE SHOWN
                if(clip_h > h){
                    //EVALUATE HEIGHT OF THE SCROLLER IN RELATION WITH VISIBLE WINDOW SPACE AND TOTAL SPACE
                    //(the greater the number of elements that needs to be shown the smaller the scroller and viceversa).
                    dim = h * (h/clip_h);
                    //RESET SCROLLER POSITION. AND SET DIMENSION
                    $(this).next().children(".scroller").css({height:dim,top:0});

                    //RESET CONTAINER SCROLL VALUE
                    $(this).scrollTop(0);

                    container = $(this);
                    //INIT SCROLLER ACTIONS
                    $(".treeview .scrollbarH > .scroller")
                        .draggable({containment: "parent", scroll:false})
                        .off("drag").on("drag", function(){
                            var Dy, scroll_space;
                            //GET SCROLLABLE SPACE AS DIFFERENCE OF SCROLLER HEIGHT AND TOTAL SCROLLBAR HEIGHT
                            scroll_space = $(this).parent().height() - $(this).outerHeight(true);

                            //EVALUATE PROPORTIONALLY THE SCROLL OF THE VIEW CONSIDERING
                            // (min scroll == 0, max scroll == container height 360px fixed)
                            Dy = parseInt($(this).css("top"))*h / scroll_space;
                            container.scrollTop(Dy);
                        });
                }
            });
        }

    }

    return {"actions":actions};
};

/*  THIS MODULE ADD BUTTONS TO SELECT AND DESELECT ALL VISIBLE ITEMS.*/
function selectors_deselectors(context){
    var MODULENAME = "selectors_deselectors";
    var actions;

    //IMAGES BASE64 ENCODED
    var sel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJyGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHja7Zh7cFxVHcc/u03TJE1LKbGUQstlwRLQ7CvPxjQl2dC00pSaLG0SeZ3cvbu5dHfv9e7dbNKiAgqjgwP4gFHBqWJVlFGGh05FZRjxhXQQCjLyGMRaZJD3QwYdnPrHvXv3bnaTLLVUnOl2ppM595zf43t+5/y+3wOn35RU05pXglTaNAb7e6XhkVFpwVMsZAU1dNIq5Iw+MLQ+SvmfB956DA/AI02zzJvpVxdTMjLwDngulnXDBO/5QChn6iZ4rwMajOGRUfDuBhoS1t97gIYx6++9QIMRHYyA9xnw1ieigxGoehG89WPRwQhUvw3e+oGhYBBqq2DVDbZfgOHMYH+vFFMzelJMSbqhxdWkIuVUc9wZHBdGLCcMRZK1dFxNZA1hqlpaiglTSDHFUCeUmBQ3tJQki6Q6Zn0F1dwYBe5gCwYacVSSaEhkGKSfXiRiKCSdUZlxFAxSaEjIaKSRiCEwUZGIoTrjcVQSZDEQ7EBFI43isng64wgMYuQQGM43A5UJl0WBhInAQGDa9g7Dz1QmTYCIpk8ZamLclBrlM6RwMNgiDaiyoWW0uClFNEPX8mjB8MioZK1+I4oH8Cy7vzCm7YSO+2CeWRiTJ2HPI7DsisLYqQdg8SXw0zY5a0w4ZQoNNNLFFmRyXM0u7uS3vOjxelZ4mj0DHtVzlWe35z7PAW+19wzvZq/pvcn7a+8r806ct2Febt735j1eVV/VUzVZdVvV8/NPmy/m75r/52qpWq6+pfrlBW0LLlvwQM3ymkTNntq62gtr76pbWKfU3btw5cKdC5+q766/eVHNIn3RE4vXL77zGN8xX1myYMmlS944Nnnsc0tjS/cfJx/3t4btDa99YMey+cu+dLx0/O3L+5Y/foK+onbF7hN7T/zLSVesXL3ygVWZk1eefL+UO6XxlCd81566/tSDp939wcnV7av/efovGj97xqYzjz/zwIfu+vCVTSP+QKAmsD94b2hX+PJmpeWc1ua2Ve317e90vLxmf+fjH9nX9eDaB7r3rvvDWY/2PNn7bOT1sz3rl/av3tC18byP6udcs+lHAw9vfmvLyo/1D5pD347+cWvttrOGp0Z+PPrm+S0XTF54z8ULxODYN+VXlUj8a4nX1E2X/CBZl0ql9+mdn/hOZql5RfYfuUsm/7rjgp1PfvLjn3r6MvnyFz4zcWXVVdd/rvHz91y99QuvX3PddaEvPvrlndefdsNDX/3014M3PvuNm3Zt/dZxN+/bff13R2/xff+lW3/2w6tvu+j21jsX3/X3n9y/59a7r/157h5x77m/XPer8G8af3fK71fuPenBVQ/59p35aOtjvX8aeiL+1KVP3/DMHfsfPvDmcyc83/NC8qUbX9n7Om92vGW8fdu/Xv1388GpgweP1sLRWjhaC0drYXotDAyFgnbLkmBJNSxZDTWNsHwzVG/oYh2TpEgiMYGCQcZutmvxEcJPEB8SCmlkNGKopEmwFh9ZTOI0EaINH+voZhF1dCETI0UnETSSaBj0oTCBiozCAJrdxCXbc5oMnfaqtfgYx8REp5MAAYc2pBBk8JNCRcZAI4NGHBM/MhopAuRQSRNDI0eGAGGCBGklQJAwAWQnosCc0flK4hMk35P42gkQIlQSnyCJyphNXaxdmR5VDpnMEURtGzIZImikSKGRLiJ/ClGm0FHIlESaQq4gTg0dhbS9Mo6GQQqBaX81SBAghcBgO1l0muw8dBulMVSSqJhMObm04bOrs9ZVn8WRb0aQQnHm1dJlo9tJFIVJTCejTpII5xyomDSxkSg+usuQ4WLaWyCjGl0ESnwU4gxUGGkhoz4UMsgYqOhOzRz+jN7f9L5SVGdHq4BqD1lMxtEw/msso9NilVynSy2D4kDJua00u3JRF3IaQEGQIYuBQgqFNCYRNNLEUB00MkUZl97sQ+gIZBS6ibCRsxlmhNGiSMrPLrW6jXFUTBS2oKGSxnTVeh9ttBbZnX1+KSLvPudCbEMoJImziSwpVNJoZMnQjYlBFqXI08yzS/dBMOlCSJDGpNvuvMXRl59ZalElXWZesIzF8jOnW7RO+1ZUDEyyCJJFPbPcXpbHug+BiUAiikoKhSFMBCl01uIjTJAQYZoIEaKJMG1ECdJBJ632/82uu7y2AizPI4NC7F1gWlhR3ks51AprKsV5di/u2jZQ7Y43hcQwa/Gxhlb8BGnFh8SIzdaCtneLs406ox34WUMQH4EZ/A2iEJvBVwsh/IRpcfkK22NtRZ78rKF5Fi/9GCgoNmso9dRMK37abauWp3ZC+GklXOTJ8hWexVcvSbIz4heiowS/dvyEi/y4UZ7Nj0Bm+wyegi4P7n0JzoqTIEUKwbnEiZNBwaQfgUqaTaikURAYzpjkWmPtj9/eL7cFy6+VkZV5fn3+yxpaaKeDNtrxIZX1ZeEXdnZAImpXdcZ1ixbu5ILXFoK0lKA59x2dvzfK3eqV3k7u7lWOWRffYoIknfQQQ6Bjotj5WwhHSjhMqRW3nS1210+h2LZUdqAQI0IWgwmUok5bzC+ssxllkEjJPgfx007Q+Vd+T9sJ0eqcIXdFhFy7M70e3TEUTu6hxRGy7yX390OJI3+qj3wUVs0d2n661x56TRVzqplruDz3Kq9y8ysqeQVwK3wxzXoPOrp9TwjSJUp/I31HUKVaXNFvx6mX1fL/m7eG2XH6/1X3k2XjzJEjh58czS71bkUQIsAwA2xiyJVNEyppMpgOOsXKXRxW5a6QponzGMJHN9uIMISEXmRdsl8h3Lp3AhXFRjbhaNpiDTG3ThMVantxWLV9cc59KMQRZElizpK7KMrfqg0V0/5qMZD8rsVs5X54cZpbrYvDoNaL0SlV3xIRNAx0m8nn46g0i5lUufV1axFec6tx8S51s6hYN7vt99r8NoGBRpY0MRePXuO8EY84Gs5fxHQtrdBORwnvy3sYIovhst5Nj92HBAlHW880t9ReQXfnb5Fzibs6r4XvelQUkrY2bHPptkO1UhpJHwoJmzsVr3Z37VBJpc+9prS2Kq0e95pKO9Oh8YQEKZeeyWIygED/HzKDARRiqAiGUEnht2Ms5QjW+JGLbGaMjrKC2VlBvsreG1ZgWbXsWl2sCYkMKimyJBGYKEjoCHQUDAKknCpzv+/O1SMqy6OQ73vDCKx7wEBDx0B18sszgY1EiCAhGCODRpKsPcP9km0pIwMVGQkDhbTzfm+haPUdS99L5NAw2E6cpF2TlaI1Fy/Iz3t/8oLZoive6QJL60WQQSFpv83MfHN0s4EtzvtjHxfRM23XpiN5aF7yXWXu+96aC/8BCRDrlFix+zwAAAAgY0hSTQAAeicAAICDAAD6ZAAAgNIAAHaGAADs6QAAOZ4AABX+xn7TOgAAAvxJREFUeNp8lN9rHFUUxz/nzt2dnfxos1lQU6tsqU0VKlShWPEh1SK0WCn9A/pY6mNBBF/0xScRHxTBJ5+kz6XQEJC6SCs21khbUeg2aBvSNv0FjUuazO7MvceH2d3MNhMPXGaGOed7fny/58rF+Wm+/EWYmYfREACcz85nB5Xje5VvZuXUXw8lPPqyfj67CN//IQAE2YPUw3MjMFkDS4GJgFNYWBaWWvDPY3nt4gJRKxaWVkC6PkXWA3wLqAM+jxsYfjdCsxSwGpXwQ2UILTuBNwDN+RpgEbjQA/wQOFaQ8COg2c+QnXeBbwt8Z4ALpvvhihsYqLhnuomv65W6WeBmwfp/yXstD2vOM/ceDkQoeKWsBRkURpwHawTilO86bX59IhmOV+gkSOJpGAEBdZr9c8rPK20+NQbtEZ04ZC3ketmCHavA4V16ZrLGmbBbr2qmw33boGRAhE5kMYdeUoCrzUdcNWa9wtRDLYIXt4J8MjN96v4qu0dKaL4VAeIUcV70t7tMxSnBgbo2QosUzbHjkMjKvJ1bknDuLpXh0kantkMiC9YQxCnBD39L1HYQyEbflQ4yVacip+em+fMBdBwYWR+yAGEA9SrMLspXP92isn87JydGwYjidUOFvD4B9tVnlVvL8t7lO7wy1K1SFRKPvD/Jj1N1rly+TSlxlEILXnXP7RaH8m07j1Qj5m8uc9a2YuHSonxw7gZHtoTr8ohTqI/x8Zsv6BUFsQHybwzX7smB64/4QjL2+6RMjHJ+ssZZq0BgWC2bjNG+3rrsPt1aIHS6zPcBBbDCqjU9YStSKGxFCgTMJsIWFKxmO1PubkF+I1AIeOpKUQi89i+KgQ3yCrZaUfZv5+tywLkoR0rqkD3PcMlIFpA42FqBg+Pa2F3jBDnpeI+MVVjYNgp2uAy7xmkYQyMM1lvwHiZGsoE7z9BaQnT/Cewcp/n8FpqJH9zx4RKMR2C9QtvBWpKB9Gei8DiGagTViGtv7yB8Z0emv1YbUh1sOZAM578BAELpReWfbbpbAAAAAElFTkSuQmCC",
        des = "data:image/png;base64,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",
        html = "<div class='lightBtn fLeft round5-left selAll "+MODULENAME+"'><img src='"+sel+"' alt='' /></div>"+
               "<div class='lightBtn fLeft round5-right desAll "+MODULENAME+"'><img src='"+des+"' alt='' /></div>";


    $(".treeview > .buttons").prepend(html);
    //ADD REQUIRED ACTIONS, AND MODIFIY PREVIOUS SCRIPTS BEHAVIOR
    actions = function(){
        $(".treeview")
            .off("click."+MODULENAME)
            //**ADDING ACTION TO SELECT ALL VISIBLE ITEMS,
            .on("click."+MODULENAME,".buttons > .selAll, .buttons > .desAll",function(){
                var groupID, items, i, len;

                //GET ID FROM ACTIVE GROUP IF EXIST
                groupID = $(".treeview > .itemGroups li.active").attr("id");
                //OR GET ALL MEANING ALL ELEMENTS
                if(groupID == null)
                    groupID = "all";

                //FILTER ACTUAL ARRAY OF ITEMS DEPENDING ON ACTIVE GROUP
                switch (groupID){
                    case "all":
                        items = context.items;
                        break;
                    case "selected":
                        items = filterArray(context.items,"selected",true);
                        break;
                    case "not_selected":
                        items = filterArray(context.items,"selected",false);
                        break;
                    default:
                        items = filterArray(context.items,"groups",groupID);
                }

                //NOT CONSIDERING ELEMENTS THAT HAVE PRIORITY GROUP OR ALL
                items = filterArray(items,"priority","");

                len = items.length;
                //AND AT LEAST SELECT OR DESELECT THIS COLLECTION OF ITEMS.
                if($(this).hasClass("selAll"))
                    for(i=0; i<len; i++){
                        items[i].selected = true;
                        $("#"+items[i].id).addClass("selected");
                    }
                else
                    for(i=0; i<len; i++){
                        items[i].selected = false;
                        $("#"+items[i].id).removeClass("selected");
                    }
            })
            //**GRAPHIC ADJUSTMENT.
            .find(".buttons > .search").css("marginLeft","5px");
    }

    return {"actions":actions};
};

//**********************************************************************************************************************

//HANDLE SELECTION AND DESELECTION OF ITEMS IN DOM & VARS
function selectItem(target,items){
    var id,ix, i, len, selStatus, vect, vect2, groups;
    id = $(target).attr("id");
    ix = searchObj(id,items,"id");
    if(!items[ix].disabled_item){
        if(ix > -1){
        if(items[ix].selected){
            items[ix].selected = false;
            $(target).removeClass("selected");
        }else{
            items[ix].selected = true;
            $(target).addClass("selected");
        }

        //CHECKS IF PRIORITY ITEMS ARE IN SELECTION
        selStatus = items[ix].selected;
        //IF CURRENT ITEM HAS PRIORITY ALL, DESELECT ALL THE OTHERS
        if(items[ix].priority == "all"){
            len = items.length;

            //SET ALL OTHER ITEMS UNSELECTED (INCLUDING TARGET ITEM)
            for(i=0; i<len; i++)
                items[i].selected = false;

            //DESELECT ALL OTHER ITEMS ON THE DOM
            $(".treeview > .appender .item").removeClass("selected");

        }else{
            //IF CURRENT ITEM HAS PRIORITY GROUP, DESELECT ALL THE OTHERS IN THE SAME GROUP
            if(items[ix].priority == "group"){
                groups = items[ix].groups;
                groups = groups instanceof Array ? groups : [groups];
                len = groups.length;
                vect = [];
                //GROUPS CAN CONTAIN MORE THAN ONE ELEMENT, IN THAT CASE FILTER ITEMS TO OBTAIN EVERY ITEM THAT SHARE
                //AT LEAST ONE GROUP WITH TARGET ITEM
                for(i=0; i<len; i++){
                    vect = vect.concat(filterArray(items,"groups",groups[i]));
                }

                len = vect.length;
                for(i=0; i<len; i++){
                    vect[i].selected = false;
                    $("#"+vect[i].id).removeClass("selected");
                }

                //SAVE MODIFIES
                items = mergeItems(items,vect,id,"selected");

            }else{
            //CURRENT ITEM HAS NO PRIORITY, ALL ITEMS THAT GOT PRIORITY (ALL OR GROUP AND SHARE A GROUP WITH CURRENT TARGET)
            // WILL BE DESELECTED
                vect = filterArray(items,"priority","all");
                len = vect.length;
                //ITERATE THROUGH SELECTED ITEMS TO DESELECT THAT WITH PRIORITY 'ALL'
                for(i=0; i<len; i++){
                    vect[i].selected = false;
                    $("#"+vect[i].id).removeClass("selected");
                }
                //SAVE MODIFIES
                items = mergeItems(items,vect,id,"selected");
                //END ALL DESELECT

                //STARTING GROUPS DESELECT

                vect = filterArray(items,"priority","group");

                groups = items[ix].groups;
                groups = groups instanceof Array ? groups : [groups];
                len = groups.length;
                vect2 = [];
                for(i=0; i<len; i++){
                    vect2 = vect2.concat(filterArray(vect,"groups",groups[i]));
                }

                len = vect2.length;
                for(i=0; i<len; i++){
                    vect2[i].selected = false;
                    $("#"+vect2[i].id).removeClass("selected");
                }

                //SAVE MODIFIES
                items = mergeItems(items,vect2,id,"selected");

                //END GROUPS DESELECT

            }
        }

        //RECOVER PREVIOUS TARGET ITEM SELECT SITUATION AFTER APPLYING PRIORITY DESELECTS
        items[ix].selected = selStatus;
        if(selStatus)
            $(target).addClass("selected");

        //END OF PRIORITY CHECKS
    }
    }
    return items;
}

//UNSELECTS ALL THE ITEMS IN THE TREEVIEM, AND KEEP OPTIONALLY (obj) THE STATUS OF THE LAST CLICKED ITEM
function unselectItems(items,obj){
    var i, len, pos, id, status = false;

    //IF OBJ IS SET, THE FUNCTION WILL HOLD THE STATUS OF OBJ, AND RECOVER IT AFTER THE DESELECTION
    if(obj != null){
        id = obj.attr("id");
        pos = searchObj(id,items,"id");
        status = items[pos].selected;
    }

    //DESELECT ALL THE ITEMS
    len = items.length;
    for(i=0; i<len; i++){
        items[i].selected = false;
    }
    $(".treeview > .appender .item").removeClass("selected");

    //IF THE ELEMENT WAS PREVIOUSLY SELECTED, RECOVER IT'S STATUS
    if(status){
        items[pos].selected = true;
        $("#"+id).addClass("selected");
    }

    return items;
}

//FILTER AN (OBJECT LIKE OR SIMPLE) ARRAY AND RETURN ITEMS WHERE THERE'S MATCH
function filterArray(items,field,value){
    var i, src, len, val, ret = [];
    if(items instanceof Array && items.length > 0){
        len = items.length;
        for(i=0; i<len; i++){
            //THE ITEM WILL BE SEARCHED EVEN IF AN ARRAY OF ARRAY IS FOUND
            val = items[i][field];
            if(!(val instanceof  Array))
                val = [val];

            src = val.indexOf(value);
            if(src > -1)
                ret.push(items[i]);
        }
    }
    return ret;
}

//SEARCH AN (OBJECT LIKE OR SIMPLE) ARRAY AND RETURN POSITION
function searchObj(v,b,field){
    var i, len, ret, sel;

    i = 0;
    len = b.length;

    do {
        if(field != null)
            sel = b[i][field];
        else
            sel = b[i];
        i++;
    } while (i<len && v != sel);

    if(v == sel){
       ret = i-1;
    }else{
       ret = -1;
    }
    return ret;
}

//REFRESH CURRENT PARAMS LIST STATE
function refreshParams(items,par){
    var sel, i, j, len, lenJ, params, paramsA, tmp, input;
    //GET ARRAY OF SELECTED ITEMS
    sel = filterArray(items,"selected",true);

    //RESET CURRENT ACTIVE PARAMETERS (INPUTS)
    $(".treeview .tweakBar > .appender input").attr("checked",false);

    //RESET CURRENT ACTIVE PARAMETERS (SPANS)
    $(".treeview .tweakBar > .appender .checkbox").removeClass("partial checked");

    //EXPLODE LIST PARAM ARRAYS INTO A SINGLE LIST
    len = par.length;
    params = [];
    for(i=0; i<len; i++){
        params = params.concat(par[i].items_id);
    }

    //CREATE AN ASSOCIATIVE ARRAY TO KEEP COUNT OF PARAMETERS USAGE
    len = params.length;
    paramsA = {};
    for(i=0; i<len; i++){
        paramsA[params[i].toString()] = 0;
    }

    //FLATTEN CHECKED PARAMETERS INTO COUNTERS TO CHECK INCONGRUENCE
    len = sel.length;
    for(i=0; i<len; i++){
        lenJ = sel[i].parameters.length;
        for(j=0; j<lenJ; j++){
            paramsA[sel[i].parameters[j].toString()]++;
        }
    }

    //PARAMS WITH
    // 0 WONT BE SELECTED
    // 1 - (selected items collection lenght - 1) WILL BE PARTIALS
    // N = (selected items collection lenght) WILL BE CHECKED

    len = sel.length;

    for(i in paramsA){
        tmp = paramsA[i];
        input = $("#"+i);
        if(tmp == 0){
            //PARAM NOT CHECKED
            input.removeClass("partial checked");
            input.children("input").attr("checked",false);
        }else{
            if(tmp < len){
                //PARAM PARTIALLY CHECKED
                input.removeClass("checked").addClass("partial");
            }else{
                //PARAM CHECKED
                input.removeClass("partial").addClass("checked");
                input.children("input").attr("checked",true);
            }
        }
    }
}

//ENABLE OR DISABLE PARAMS IN THE LIST UPON ITEM SELECTION RULES
function enableParams(items,par){
    var sel, i, len, dis_params;
    //GET ARRAY OF SELECTED ITEMS
    sel = filterArray(items,"selected",true);
    if(sel.length > 0){
        //RESET CURRENT DISABLED PARAMETERS (SPANS)
        $(".treeview .tweakBar > .appender span.checkbox").removeClass("disabled");

        dis_params = getDisabledParams(sel);

        //ACTUALLY DISABLE PARAMETERS IN THE LIST
        len = dis_params.length;
        for(i=0; i<len; i++){
            $("#"+dis_params[i]).addClass("disabled");
        }
    }else
        $(".treeview .tweakBar > .appender span.checkbox").addClass("disabled");
}

//RETURN LIST OF DISABLED PARAMS UPON SELECTED ITEMS
function getDisabledParams(selItems){
    var i, len, disabled;

    //EXPLODE LIST OF DISABLED PARAMS INTO A SINGLE LIST
    len = selItems.length;
    disabled = [];
    for(i=0; i<len; i++){
        disabled = disabled.concat(selItems[i].disabled_parameters);
    }
    return disabled;
}

//ENABLE OR DISABLE PARAMS IN THE LIST UPON ITEM SELECTION RULES
function setParam(items, obj){
    var sel, i, check, len, dis_params, param, src, ret = [];
    //GET ARRAY OF SELECTED ITEMS
    sel = filterArray(items,"selected",true);
    if(sel.length > 0){
        dis_params = getDisabledParams(sel);
        param = obj.attr("id");
        src = searchObj(param,dis_params);
        if(src == -1){
            //THE SELECTED PARAM IS ENABLED AND CAN BE CHANGED
            len = sel.length;
            if(obj.hasClass("checked")){
                //UNCHECK PARAM FROM SELECTED ITEMS
                for(i=0; i<len; i++){
                    check = sel[i].parameters.indexOf(param); // Find the index
                    if(check!=-1) sel[i].parameters.splice(check, 1); // Remove it if really found!
                }
                obj.removeClass("checked");
            }else{
                //CHECK PARAM FROM SELECTED ITEMS
                for(i=0; i<len; i++){
                    check = sel[i].parameters.indexOf(param); // Find the index
                    if(check==-1) sel[i].parameters.push(param); // Adds it if its not found!
                }
                obj.removeClass("partial").addClass("checked");
            }
            ret = sel;
        }
    }
    return ret;
}

//MERGE DIFFERENCES BETWEEN TWO ARRAYS AND RETURN THE NEW COLLECTION
function mergeItems(orig,diff,id,field){
    var i, j, len;

    len = diff.length;
    for(i=0; i<len; i++){
        //SEARCHING FOR A MATCH BETWEEN DIFFERENCE VECTOR AND ORIGINAL
        j = searchObj(diff[i][id],orig,"id");
        if(j > -1){
            //SUBSTITUTE FIELD IN THE MATCH
            orig[j][field] = diff[i][field];
        }
    }
    return orig;
}

//FILTER ITEMS BY GROUPS OR SPECIAL MATCHS
function filterGroup(items, group){
    var i,len,id, sel;
    //SHOW EVERY ITEM FIRST
    $(".treeview > .appender .item").addClass("hidden");
    //HANDLE GROUP SELECT
    group = typeof(group ) == "string" ? group : $(group).attr("id");
    //GET ITEMS WITHIN THAT GROUP
    switch (group){
        case "all":
            sel = items;
            break;
        case "selected":
            sel = filterArray(items,"selected",true);
            break;
        case "not_selected":
            sel = filterArray(items,"selected",false);
            break;
        default:
            sel = filterArray(items,"groups",group);
    }

    //SHOW ITEMS WITHIN THE GROUP
    len = sel.length;
    for(i=0; i<len; i++){
        $("#"+sel[i].id).removeClass("hidden");
    }
}

//VISUALLY FILTER CURRENT SET OF ELEMENTS
function searchTreview(where,string){
    if(string != ""){
        where.removeClass("filtered");
        where.each(function(){
            var str = new RegExp(string, "i");
            str = str.test($(this).text());
            if(!str){
                $(this).addClass("filtered");
            }
        });
    }else{
        where.removeClass("filtered");
    }
}

//ACTIVATE LIGHTBOX [SYNCMODE] FOR THE CURRENT INTERFACE MODULE
function syncMode(sw){
    switch(sw){
        case 'open':
            $("body").append("<div id='lightbox' class='hidden'></div>");
            $("#lightbox").fadeIn(300,function(){
                $(this).removeClass("hidden");
            });
            break;
        case 'close':
            $("#lightbox").fadeOut(200,function(){
                $(this).remove();
            })
            break;
        default:
            if($("#lightbox").length == 0){
                $("body").append("<div id='lightbox' class='hidden'></div>");
                $("#lightbox").fadeIn().removeClass("hidden");
            }else
                $("#lightbox").fadeOut().remove();
    }
}

//FINDS COORDINATES TO SET AN ELEMENT ON THE SCREEN CENTER
//object, x or y
function centerScreen(obj){
    var x,y;
    x = parseInt(($(window).width()/2)) - parseInt($(obj).outerWidth()/2);
    y = parseInt(($(window).height()/2)) - parseInt($(obj).outerHeight()/2);// + $("body").scrollTop();
    return {"x":x,"y":y};
}

function clippedHeight(target){
    var node = $(target).clone().css({'visibility':'hidden','display':'block','maxHeight':'none','minHeight':'none',"height":"auto"});
    $(target).after(node);
    var clipHeight = node.height();
    node.remove();
    return clipHeight;
}


//INIT ALL UNDEFINED PARAMS IN THE TREEVIEW, PREVENTING CRASHES AND ALLOWING ADDING NEW FEATURES, WITHOUT BROKING OLD
function init_optional(tv,full){
    var ret, i, len, field;
    tv.items = tv.items ? tv.items : [];
    tv.params = tv.params ? tv.params : [];
    tv.filters = tv.filters ? tv.filters : [];
    tv.title = tv.title ? tv.title : "Effettua una Selezione: ";
    tv.classes = tv.classes ? tv.classes : "";
    tv.sidebarTitle = tv.sidebarTitle ? tv.sidebarTitle : "";
    tv.sidebarClass = tv.sidebarClass ? tv.sidebarClass : "";
    tv.selectionMode = tv.selectionMode ? tv.selectionMode : "multi";
    tv.extend_modules = tv.extend_modules ? tv.extend_modules : function(){return []};
    tv.onConfirm = tv.onConfirm ? tv.onConfirm : function(){};
    tv.onCancel = tv.onCancel ? tv.onCancel : function(){};
    tv.onCreate = tv.onCreate ? tv.onCreate : function(){};
    tv.onClose = tv.onCreate ? tv.onCreate : function(){};
    if(full){
        len = tv.items.length;
        for(i=0; i<len; i++){
            field = tv.items[i];
            field.title = field.title ? field.title : "Nuovo Item";
            field.classes = field.classes ? field.classes : "";
            field.description = field.description ? field.description : "";
            field.priority = field.priority ? field.priority : "";
            field.parameters = field.parameters ? field.parameters : [];
            field.groups = field.groups ? field.groups : [];
            field.disabled_parameters = field.disabled_parameters ? field.disabled_parameters : [];
            field.disabled_item = field.disabled_item != null ? field.disabled_item : false;
            field.selected = field.selected != null ? field.selected : false;
            field.img = field.img ? field.img : "resources/generic_ph.png";
            tv.items[i] = field;
        }
        len = tv.params.length;
        for(i=0; i<len; i++){
            field = tv.params[i];
            field.title = field.title ? field.title : "Nuovo Parametro";
            field.items_id = field.items_id ? field.items_id : [];
            field.items_title = field.items_title ? field.items_title : [];
            tv.params[i] = field;
        }

        len = tv.filters.length;
        for(i=0; i<len; i++){
            field = tv.filters[i];
            field.id = field.id ? field.id : "all";
            field.title = field.title ? field.title : "Tutti";
            field.contents = field.title ? field.title : "items";
            tv.filters[i] = field;
        }
    }

    return tv;

}
