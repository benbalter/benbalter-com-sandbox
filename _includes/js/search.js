(function(){jQuery(document).ready(function(t){var e;return e=function(e){var n,i,o;return i=[],o=RegExp(e,"im"),t.each(entries.posts,function(t,e){return o.test(e.title)||o.test(e.url)||o.test(e.description)||o.test(e.content)||o.test(e.tags)||o.test(e.category)?i.push({title:e.title,url:e.url,date:e.date}):void 0}),t("body").addClass("search"),n=t("#content"),n.append("<h3>Search Results</h3>"),i.length>0?(n.append('<ul class="search-results">'),t.each(i,function(t,e){return n.append('<li><a href="'+e.url+'">'+e.title+"</a></li>")}),n.append("</ul>")):n.append('<div class="no-search-results">No matches found</div>'),n.append('<a href="#" id="back">Back</a>')},t("#search_form").live("submit",function(e){var n;return e.preventDefault(),n=t("#query").val(),window.location.hash="q="+escape(n.replace(/\s/g,"+")),!1}),t(window).bind("hashchange",function(){var n,i;return i=window.location.hash,/[#?]{1}q=(.*)/.test(i)?(i=window.location.hash.replace("+"," ").replace("#q=",""),t("#query").val(i),i&&(n===void 0&&(n=t("#content").html()),t("#content").html('<div id="loader"></div>'),t("#query").blur().attr("disabled",!0),"undefined"==typeof entries?t.getJSON("{{ site.url }}/posts.json",function(t){var n;return n=t,e(i)}):e(i),t("#query").blur().attr("disabled",!1)),_gaq.push(["_trackEvent","Search","Search",i])):(n===void 0&&(n=t("#content").html()),t("body").removeClass("search"),t("#content").html(n),t("#query").blur().attr("disabled",!1).val(""),_gaq.push(["_trackEvent","Search","Back",i]))}),t(window).trigger("hashchange")})}).call(this);